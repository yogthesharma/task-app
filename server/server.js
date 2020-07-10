const express = require(`express`);
const cors = require(`cors`);
const taskRouter = require("./routes/tasksRouter");
// initializing database
require(`./db/mongoose`);
// initializing app
const app = express();
const port = process.env.PORT || 5001;

// basic defaults
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// getting the router info
app.use(taskRouter);

// starting the port
app.listen(port, () => {
  console.log(`Server Started At Port ${port}`);
});
