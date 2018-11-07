const express = require("express");
const Joi = require("joi");
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
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  // if (!req.body.name || req.body.name.length < 3) {
  //   // 400 Bad Request
  //   res.status(400).send("Nameis required and should be minimum 3 characters");
  // }
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
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
    return c.id === parseInt(req.params.id);
  });
  if (!course) {
    return res.status(404).send("The course was not found");
  }
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  // Look up the course
  const course = courses.find(c => {
    return c.id === parseInt(req.params.id);
  });
  // If not existing, return 404
  if (!course) {
    return res.status(404).send("The course was not found");
  }

  // Validate
  // If invalid, return 400 - Bad request
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Update course
  course.name = req.body.name;
  // Return the updated course
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  // Look up the course
  const course = courses.find(c => {
    return c.id === parseInt(req.params.id);
  });
  // Not existing, return 404
  if (!course) {
    return res.status(404).send("The course was not found");
  }

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  //Return the same course
  res.send(course);
});

// util function
function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
