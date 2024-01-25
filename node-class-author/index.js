const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/routes.js")
const port = 6000

// mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/
// password = E5ESleWwGGp0waa1 ;
// user = parthjohi009 ;
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/", {
    useNewUrlParser: true,
}).then(() => console.log("MongoDb is connected")).catch((err) => console.log("Promise failed", err))


app.use("/api", route)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

 
