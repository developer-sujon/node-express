var express = require("express");

app = express();

//Simple String Response
// res.send()--> response Body
// res.end()---> reponse ending point...
app.get("/one", function (req, res) {
  res.end("This is simple string response ");
});

app.post("/two", function (req, res) {
  res.end("This is simple string response ");
});

// Response Status Code
app.get("/three", function (req, res) {
  res.status(201).end();
});

// JSON Response
app.get("/four", function (req, res) {
  let MyJSONArray = [
    {
      name: "Mohammad",
      city: "Dhaka",
      occupation: "Dev.",
    },
    {
      name: "Rakib",
      city: "Dhaka",
      occupation: "Pharama",
    },
    {
      name: "Rifat",
      city: "Rangpur",
      occupation: "Student",
    },
  ];
  res.json(MyJSONArray);
});

// Response Download
app.get("/five", function (req, res) {
  res.download("./uploads/abc.jpg");
});

// Response Redirect
app.get("/Bangladesh", function (req, res) {
  res.redirect("http://localhost:8000/India");
});

app.get("/India", function (req, res) {
  res.send("This is india");
});

app.get("/Six", function (req, res) {
  res.append("name", "Mohammad Sujon");
  res.append("city", "Dhaka");
  res.append("age", "22 Years Old");
  res.status(201).end("Hello World");
});

app.get("/Seven", function (req, res) {
  res.cookie("name", "Mohammad");
  res.cookie("city", "Dhaka");
  res.cookie("age", "22 years old");
  res.end("cookie set success");
});

app.get("/Eight", function (req, res) {
  res.clearCookie("name");
  res.clearCookie("age");
  res.clearCookie("city");

  res.end("cookie clear success");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
