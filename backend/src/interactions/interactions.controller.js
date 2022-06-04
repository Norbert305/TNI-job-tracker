const jobsService = require("./interactionss.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

    //------MIDDLEWARE FUNCTIONS------//

//validForm - ensures that when submitting the interaction that there is input present, not submitting an empty interaction


//hasRequiredFields - ensures that when submitting the interaction, that the required fields are present (date, interaction_list_id)


//hasValidDate - ensures that the date has the correct format



    //-------ROUTE FUNCTIONS------//

//GET, list all interactions for a specific job

//GET, read one specific interaction

//POST, create an interaction

//PUT, update an interaction

//DELETE, delete an interaction


module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    create: [validForm, hasRequiredFields, hasValidDate, asyncErrorBoundary(create)],
    update: asyncErrorBoundary(update),
    delete: asyncErrorBoundary(destroy),
};