const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type is required",
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name is required",
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
