const service = require("./interactions.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

    //------MIDDLEWARE FUNCTIONS------//

//validForm - ensures that when submitting the interaction that there is input present, not submitting an empty interaction
function validForm(req, res, next) {
    const { data } = req.body;
  
    if (!data) {
      return next({
        status: 400,
        message: `You must include information in your new interaction.`,
      });
    }
    next();
  }

//hasRequiredFields - ensures that when submitting the interaction, that the required fields are present (date, interaction_list_id)
function hasRequiredFields(req, res, next) {
    const { data } = req.body;
    const requiredFields = [
      "date",
      "interaction_list_id"
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        let field = field.replace("_", " ");
        return next({
          status: 400,
          message: `Your interaction  must include a ${field}`,
        });
      }
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

//GET, list all interactions for a specific job
async function list(req, res) {
  const { jobId } = req.params;
    const data = await service.list(jobId);
      res.json({ data });
    }


//GET, read one specific interaction
async function read(req, res, next) {
  const { interactionId } = req.params;
  const interaction = await service.read(interactionId);
  res.status(200).json({ interaction });
  
}

//POST, create an interaction
async function create(req, res) {
    const createdInteraction = await service.create(req.body.data);
    res.status(201).json({ data: createdInteraction });
  }


//PUT, update an interaction
async function update(req, res) {
    const { interactionId } = req.params;
    const updatedInteraction = {
      ...req.body.data,
      interaction_id: interactionId,
    };
    const newData = await service.update(updatedInteraction);
    res.json({ data: newData });
  }

//DELETE, delete an interaction
async function destroy(req, res) {
    const { interactionId } = req.params;
    await service.delete(interactionId);
    res.sendStatus(204);
  }

module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    create: [validForm, hasRequiredFields, hasValidDate, asyncErrorBoundary(create)],
    update: asyncErrorBoundary(update),
    delete: asyncErrorBoundary(destroy),
};