const Contact = require("./Contact");

exports.getAllcontact = (req, res) => {
  const contacts = Contact.find();
  contacts
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error Occurred",
      });
    });
};

exports.getSingleContact = (req, res) => {
  const { id } = req.params;
  const contact = Contact.findOne({ _id: id });
  contact
    .then((c) => {
      res.status(200).json(c);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error Occurred",
      });
    });
};

exports.createContact = (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;
  const contact = new Contact({
    name,
    phone,
    email,
  });
  contact
    .save()
    .then((c) => {
      res.status(200).json(c);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Occurred",
      });
    });
};

exports.updateContact = (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;
  const contact = {
    name,
    phone,
    email,
  };
  Contact.findOneAndUpdate({ _id: id }, { $set: contact }, { new: true })
    .then((c) => {
      console.log(c);
      res.status(200).json(c);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Occurred",
      });
    });
};

exports.deleteSingleContact = (req, res) => {
  const { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      res.status(200).send(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).josn({
        message: "Error Occurred",
      });
    });
};

exports.deleteAllContact = (req, res) => {
  Contact.collection
    .remove()
    .then((c) => {
      res.status(200).json({
        message: "Success",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error Occurred",
      });
    });
};
