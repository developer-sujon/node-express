const productRoute = require("express").Router();
const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

let products = [
  {
    id: "1",
    name: "436354",
    price: "4",
  },
  {
    id: "2",
    name: "436354",
    price: "4",
  },
  {
    id: "3",
    name: "436354",
    price: "4",
  },
  {
    id: "4",
    name: "436354",
    price: "4",
  },
  {
    id: "5",
    name: "436354",
    price: "4",
  },
  {
    id: "6",
    name: "436354",
    price: "4",
  },
  {
    id: "7",
    name: "436354",
    price: "4",
  },
  {
    id: "8",
    name: "436354",
    price: "4",
  },
  {
    id: "9",
    name: "436354",
    price: "4",
  },
];

productRoute.get("/products", (req, res) => {
  return res.status(200).json(products);
});

productRoute.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).send("product is not found");
  }

  res.status(200).json(product);
});

productRoute.post("/products", (req, res) => {
  const { error } = validation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const product = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  };

  products.push(product);

  res.send(201).json(product);
});

productRoute.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send(`product is not found ${id} this`);
  }

  const { error } = validation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  products[index].name = req.body.name;
  products[index].price = req.body.price;

  return res.status(200).send(products[index]);
});

productRoute.patch("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send(`product is not found ${id}`);
  }

  const { error } = validationForPatchMethud(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const newProduct = {
    ...products[index],
    ...req.body,
  };

  products[index] = newProduct;

  return res.status(200).json(newProduct);
});

productRoute.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).send(`product is no found this ${id}`);
  }

  products = products.filter((product) => product.id !== id);

  return res.sendStatus(204)
});

productRoute.delete("/products", (req, res) => {
  products = [];

  return res.sendStatus(204);
});

function validation(body) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(6).required(),
    price: Joi.number().required(),
  });

  return (result = schema.validate(body));
}

function validationForPatchMethud(body) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(6),
    price: Joi.number(),
  });

  return (result = schema.validate(body));
}

module.exports = productRoute;
