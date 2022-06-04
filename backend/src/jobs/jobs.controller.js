const jobsService = require("./jobs.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

    //------MIDDLEWARE FUNCTIONS------//

//validForm - ensures that when submitting the job that there is input present, not submitting an empty job


//hasRequiredFields - ensures that when submitting the job form, that the required fields are present (position title, company name, date)


//hasValidSalary - ensures that the salary is just integers


//hasValidDate - ensures that the date has the correct format



    //-------ROUTE FUNCTIONS------//

//GET, list all jobs

//GET, read one job

//POST, create a job

//PUT, update a job

//DELETE, delete a job


module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    create: [validForm, hasRequiredFields, hasValidSalary, hasValidDate, asyncErrorBoundary(create)],
    update: asyncErrorBoundary(update),
    delete: asyncErrorBoundary(destroy),
};