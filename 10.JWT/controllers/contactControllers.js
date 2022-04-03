const Contact = require("../models/Contact.js");
const User = require("../models/User.js");

//get all contacts
exports.getAllContacat = async (req, res, next) => {
  try {
    const contacts = await Contact.find().populate("user", "name username -_id");
    if (contacts && contacts.length > 0) {
      res.json({ result: contacts });
    } else {
      res.status(404).json({ message: "Contacts Not Found", result: contacts });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//get a contact by id
exports.getSingleContacat = async (req, res, next) => {
  try {
    const contact = await Contact.find({ _id: req.params.id }).populate("user");
    if (contact && contact.length > 0) {
      res.json({ result: contact });
    } else {
      res.status(404).json({ message: "Contact Not Found", result: contact });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//create a contact
exports.createContact = async (req, res, next) => {
  try {
    const user = await User.find({ _id: req.userId });
    const newContact = await Contact({
      ...req.body,
      user: user[0]._id,
    });
    const contact = await newContact.save();

    await User.updateOne(
      {
        _id: req.userId,
      },
      {
        $push: {
          contacts: contact._id,
        },
      },
    );
    res.json({ message: "Contact created successfully", result: contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//create multiple contacts
exports.createMultipleContact = async (req, res, next) => {
  try {
    const contacts = await Contact.insertMany(req.body);
    res.json({ message: "Contacts created successfully", result: contacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//update a contact
exports.updateContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ _id: req.params.id });
    if (contacts) {
      const contact = await Contact.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true },
      );
      res.json({ message: "Contact Update Successfull", result: contact });
    } else {
      res.status(404).json({ message: "Contact Not Found", result: contact });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//delete a contact
exports.deleteContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (contacts && contacts.length > 0) {
      const contact = await Contact.findOneAndDelete({ _id: req.params.id });
      res.json({ messages: "Contact Delete Successfull", result: contact });
    } else {
      res.status(404).json({ message: "Contact Not Found", result: contact });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//delete multiple contacts
exports.deleteMultipleContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (contacts && contacts.length > 0) {
      const contact = await Contact.deleteMany({});
      res.json({ messages: "Contacts Delete Successfull", result: contact });
    } else {
      res.status(404).json({ message: "Contacts Not Found", result: contact });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};
