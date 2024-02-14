const express = require("express");
const authorModels = require("./model/authorModel.js");
const mongoose = require("mongoose");
const route = require("./route/routes.js");
const port = 6000;

// mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/
// password = E5ESleWwGGp0waa1 ;
// user = parthjohi009 ;
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/",
    {
      useNewUrlParser: true,
    }
  )
  .then(async () => {
    console.log("MongoDb is connected");
    try {
      const data = await authorModels.findOne({
        email: "parth1237440.doe@example.com",
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => console.log(err));

app.use("/api", route);

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
