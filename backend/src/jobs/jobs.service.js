const knex = require("../db/connections");

//GET, list all jobs
function list() {
  return knex("job").select("*").orderBy("date");
}

//GET, read one job
function read(jobId) {
  return knex("job").where({ job_id: jobId });

}

//POST, create a job
function create(job){
  return knex("job")
  .insert(job)
  .returning("*")
  .then((newJob) => newJob[0]);

}

//PUT, update a job
function update(updatedJob){
  return knex("job")
  .where({ job_id: updatedJob.job_id })
  .update(updatedJob, "*")
  .then((res) => res[0]);
}

//DELETE, delete a job
function destroy(jobId){
  return knex("job").where({ job_id: jobId }).del();
}



module.exports = {
    list,
    read,
    create,
    update,
    delete: destroy
  };
  