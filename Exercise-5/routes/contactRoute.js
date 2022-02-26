const contactRoute = require("express").Router();

const {
  getAllContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

contactRoute.get("/", getAllContact);
contactRoute.post("/", createContact);
contactRoute.patch("/:id", updateContact);
contactRoute.get("/delete/:id", deleteContact);

module.exports = contactRoute;