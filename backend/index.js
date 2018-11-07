const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    // 400 Bad Request
    res.status(400).send("Nameis required and should be minimum 3 characters");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  // res.send(req.params.id);
  const course = courses.find(c => {
    c.id === parseInt(req.params.id);
  });
  if (!course) res.status(404).send("The course was not found");
  res.send(course);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
