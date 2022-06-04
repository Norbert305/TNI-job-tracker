/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const interaction = require("../fixtures/interaction");

 exports.seed = function (knex) {
   return knex
     .raw("TRUNCATE TABLE interaction RESTART IDENTITY CASCADE")
     .then(function () {
       return knex("interaction").insert(interaction);
     });
 };