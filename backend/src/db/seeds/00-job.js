/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 const job = require("../fixtures/job");

 exports.seed = function (knex) {
   return knex
     .raw("TRUNCATE TABLE job RESTART IDENTITY CASCADE")
     .then(function () {
       return knex("job").insert(job);
     });
 };