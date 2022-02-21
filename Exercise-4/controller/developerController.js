const developer = require("../Developer");

exports.getAllDeveloper = (req, res) => {
  res.send(developer.getAllDeveloper());
};

exports.getSingleDeveloper = (req, res) => {
  res.send(developer.getSingleDeveloper(req.params.id));
};
exports.createDeveloper = (req, res) => {
  const { name, email, phone } = req.body;
  res.send(developer.createDeveloper({ name, email, phone }));
};
exports.updateDeveloper = (req, res) => {
  const { name, email, phone } = req.body;
  res.send(developer.updateDeveloper({ name, email, phone }, req.params.id));
};
exports.deleteDeveloper = (req, res) => {
  res.send(developer.deleteDeveloper(req.params.id));
};
