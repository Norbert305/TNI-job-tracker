const knex = require("../db/connections");

//GET, list all interactions for a specific job, used in the jobs router

function list(jobId) {
  return knex("interaction").select("*").where({ job_id: jobId }).orderBy("date");
}

//GET, read one interaction
function read(interactionId) {
  return knex("interaction").where({ interaction_id: interactionId });
}

//POST, create an interaction
function create(interaction){
  return knex("interaction")
  .insert(interaction)
  .returning("*")
  .then((newInteraction) => newInteraction[0]);
}

//PUT, update an interaction
function update(updatedInteraction){
  return knex("interaction")
  .where({ interaction_id: updatedInteraction.interaction_id })
  .update(updatedInteraction, "*")
  .then((res) => res[0]);
}

//DELETE, delete an interaction
function destroy(interactionId){
  return knex("interaction").where({ interaction_id: interactionId }).del();
}



module.exports = {
    list,
    read,
    create,
    update,
    delete: destroy
  };
  