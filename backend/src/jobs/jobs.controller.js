const service = require("./jobs.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

    //------MIDDLEWARE FUNCTIONS------//

//validForm - ensures that when submitting the job that there is input present, not submitting an empty job
function validForm(req, res, next) {
    const { data } = req.body;
  
    if (!data) {
      return next({
        status: 400,
        message: `You must include information in your applied job.`,
      });
    }
    next();
  }

//hasRequiredFields - ensures that when submitting the job form, that the required fields are present (position title, company name, date)
function hasRequiredFields(req, res, next) {
    const { data } = req.body;
    const requiredFields = [
      "position_title",
      "company_name",
      "date",
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        let field = field.replace("_", " ");
        return next({
          status: 400,
          message: `Your applied job creation must include a ${field}`,
        });
      }
    }
    next();
  }

//hasValidSalary - ensures that the salary is just integers
function hasValidSalary(req, res, next) {
    const { data } = req.body;
    if (!Number.isInteger(data.salary)) {
      return next({
        status: 400,
        message: "The job salary must only be numbers.",
      });
    }
    next();
  }


//hasValidDate - ensures that the date has the correct format
function hasValidDate(req, res, next) {
    const { data } = req.body;
    const validDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  
    if (!validDate.test(data.date)) {
      return next({
        status: 400,
        message: "Date must be a valid date format.",
      });
    }
    next();
  }




    //-------ROUTE FUNCTIONS------//

//GET, list all jobs
async function list(req, res) {
  const data = await service.list();
    res.json({ data });
  }

//GET, read one job
async function read(req, res, next) {
  const { jobId } = req.params;
  const job = await service.read(jobId);
  res.status(200).json({ job });
  
}

//POST, create a job
async function create(req, res) {
  const createdJob = await service.create(req.body.data);
  res.status(201).json({ data: createdJob });
}

//PUT, update a job
async function update(req, res) {
  const { jobId } = req.params;
  const updatedJob = {
    ...req.body.data,
    job_id: jobId,
  };
  const newData = await service.update(updatedJob);
  res.json({ data: newData });
}


//DELETE, delete a job
async function destroy(req, res) {
  const { jobId } = req.params;
  await service.delete(jobId);
  res.sendStatus(204);
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    create: [validForm, hasRequiredFields, hasValidSalary, hasValidDate, asyncErrorBoundary(create)],
    update: asyncErrorBoundary(update),
    delete: asyncErrorBoundary(destroy),
};