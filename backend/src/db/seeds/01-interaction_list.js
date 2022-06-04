/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const interaction_list = require("../fixtures/interaction_list");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE interaction_list RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("interaction_list").insert(interaction_list);
    });
};