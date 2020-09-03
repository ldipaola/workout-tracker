const db = require('../models');


module.exports = function(app) {
    app.get("/api/lastworkout", (req, res) => {
        db.Workout.find({}).limit(1)
        .sort({ date: -1 })
        .then(dbTransaction => {
          res.json(dbTransaction);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
};