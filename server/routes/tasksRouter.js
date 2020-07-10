const express = require(`express`);
const Tasks = require(`../models/taskModel`);

// making the task router
const taskRouter = express.Router();

// creating new task
taskRouter.post("/addTask", async (req, res) => {
  console.log("Yes");
  const task = await new Tasks(req.body);
  console.log("Yes");
  try {
    await task.save();
    console.log("Yes");
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({ error });
  }
});

taskRouter.delete("/deleteTask/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Tasks.findByIdAndRemove({ _id });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({ error });
  }
});

taskRouter.patch("/updateTask/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Tasks.findByIdAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({ error });
  }
});

taskRouter.get("/getTask", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send({ error });
  }
});
// exporting the router
module.exports = taskRouter;
