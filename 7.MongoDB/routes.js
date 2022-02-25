const contactRoute = require("express").Router();
const {
  getAllcontact,
  getSingleContact,
  createContact,
  updateContact,
  deleteSingleContact,
  deleteAllContact,
} = require("./controllers");

contactRoute.get("/", getAllcontact);
contactRoute.get("/:id", getSingleContact);
contactRoute.post("/", createContact);
contactRoute.put("/:id", updateContact);
contactRoute.delete("/:id", deleteSingleContact);
contactRoute.delete("/", deleteAllContact);

module.exports = contactRoute;
