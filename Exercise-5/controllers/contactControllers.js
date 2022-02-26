const Contact = require("../models/Contact");

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      return res.render("pages/index", { contacts, errors: {} });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({
        message: "Error Occurred",
      });
    });
};

exports.createContact = (req, res) => {
  const { name, email, phone, id } = req.body;

  const errors = {};
  const isError = validator(errors, name, email, phone);

  if (isError) {
    Contact.find()
      .then((contacts) => {
        return res.render("pages/index", { contacts, errors });
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).json({
          message: "Error Occurred",
        });
      });
  } else {
    if (id) {
      Contact.findOneAndUpdate(
        { _id: id },
        { $set: { name, email, phone } },
        { new: true },
      )
        .then(() => {
          Contact.find()
            .then((contacts) => {
              return res.render("pages/index", { contacts, errors: {} });
            })
            .catch((err) => {
              console.log(err);
              return res.status(500).json({
                message: "Error Occurred",
              });
            });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            message: "Error Occurred",
          });
        });
    } else {
      const contact = new Contact({ name, email, phone });
      contact
        .save()
        .then((c) => {
          Contact.find()
            .then((contacts) => {
              return res.render("pages/index", { contacts, errors });
            })
            .catch((err) => {
              console.log(err);
              return res.status(404).json({
                message: "Error Occurred",
              });
            });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            message: "Error Occurred",
          });
        });
    }
  }

  //   new Contact({ name, email, phone });
};

exports.updateContact = (req, res) => {};
exports.deleteContact = (req, res) => {
  const { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then(() => {
      Contact.find()
        .then((contacts) => {
          return res.render("pages/index", { contacts, errors: {} });
        })
        .catch((err) => {
          console.log(err);
          return res.status(404).json({
            message: "Error Occurred",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: "Error Occurred",
      });
    });
};

function validator(errors, name, email, phone) {
  if (!name) {
    errors.name = "Please Provite Your Name";
  }
  if (!email) {
    errors.email = "Please Provite Your Email";
  }
  if (!phone) {
    errors.phone = "Please Provite Your Phone";
  }

  return Object.keys(errors).length > 0;
}
