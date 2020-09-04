const db = require('../models');
const { Workout } = require('../models');
const ObjectId = require('mongodb').ObjectId; 


module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
       const exercise = req.body;
       console.log(exercise);
       let id = req.params.id;
       console.log(id);
        db.Workout.update({_id: ObjectId(id)},{$push: {exercises: exercise}}, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.json(data);
            }
          });
    })

    app.post("/api/workouts", ({ body }, res) => {
        const workout = new Workout(body);
        db.Workout.create(workout)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

    app.get("/api/workouts/range", () => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
};