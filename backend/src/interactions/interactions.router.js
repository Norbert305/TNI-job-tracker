/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

 const router = require("express").Router();
 const controller = require("./interactions.controller");
 const methodNotAllowed = require("../errors/methodNotAllowed");


 router
  .route("/")
  .post(controller.create)
  .all(methodNotAllowed);


router
  .route("/:interactionId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);


module.exports = router;