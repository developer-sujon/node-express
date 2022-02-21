const add = require("./add");
const sub = require("./sub");
const mul = require("./mul");
const div = require("./div");

const a = parseInt(process.argv[2]);
const type = process.argv[3];
const b = parseInt(process.argv[4]);

let result;

if (type === "add") {
  result = add(a, b);
} else if (type === "sub") {
  result = sub(a, b);
} else if (type === "mul") {
  result = mul(a, b);
} else if (type === "div") {
  result = div(a, b);
}

console.log(result);
