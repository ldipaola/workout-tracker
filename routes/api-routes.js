const router = require("express").Router();
const Workout = require("../models/Workouts.js");


module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).limit(1)
        .sort({ date: -1 })
        .then(dbTransaction => {
          res.json(dbTransaction);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });

}