const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());
app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true});


app.use(require("./routes/api-routes.js"));
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
