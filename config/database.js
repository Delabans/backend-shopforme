const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://empors:empors@cluster0.i1q2s.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err.message));
