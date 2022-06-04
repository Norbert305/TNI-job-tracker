/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

 const router = require("express").Router();
 const controller = require("./jobs.controller");
 const interactionsController = require("../interactions/interactions.controller");
 const methodNotAllowed = require("../errors/methodNotAllowed");


 router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:jobId")
  .get(controller.read)
  .get(interactionsController.list)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);


module.exports = router;