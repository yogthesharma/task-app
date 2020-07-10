const mongoose = require(`mongoose`);

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    default: Date.now,
    type: Date,
    required: true,
  },
});

const Tasks = mongoose.model("Tasks", taskSchema);

// exporting the model

module.exports = Tasks;
