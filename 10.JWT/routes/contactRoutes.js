const contactRoutes = require("express").Router();

//check login
const checkLogin = require("../middlewares/checkLogin");

const {
  getAllContacat,
  getSingleContacat,
  createContact,
  createMultipleContact,
  updateContact,
  deleteContact,
  deleteMultipleContact,
} = require("../controllers/contactControllers");

//get all contacts
contactRoutes.get("/", getAllContacat);

//get a contact by id
contactRoutes.get("/:id", getSingleContacat);

//create a contact
contactRoutes.post("/", checkLogin, createContact);

//create multiple contacts
contactRoutes.post("/all", checkLogin, createMultipleContact);

//update a contact
contactRoutes.patch("/:id", checkLogin, updateContact);

//delete a contact
contactRoutes.delete("/:id", checkLogin, deleteContact);

//delete multiple contacts
contactRoutes.delete("/", checkLogin, deleteMultipleContact);

module.exports = contactRoutes;
