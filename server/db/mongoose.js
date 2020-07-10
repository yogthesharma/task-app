const mongoose = require(`mongoose`);

mongoose.connect(
  "mongodb+srv://yogsharma:yogsharma@cluster0.nd35c.mongodb.net/Tasks?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Remote Database Connected");
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose Is Connected");
});
