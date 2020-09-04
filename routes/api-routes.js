const router = require("express").Router();
const Workout = require('../models/workout.js');
const ObjectId = require('mongodb').ObjectId; 


    router.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });

    router.put("/api/workouts/:id", (req, res) => {
       const exercise = req.body;
       console.log(exercise);
        Workout.updateOne({_id: ObjectId(req.params.id)},{$push: {exercises: exercise}}, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.json(data);
            }
          });
    })

    router.post("/api/workouts", ({ body }, res) => {
        const workout = new Workout(body);
        Workout.create(workout)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

    router.get("/api/workouts/range", (req, res) => {
       Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });

module.exports = router;