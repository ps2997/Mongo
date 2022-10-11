const express = require("express")
const app = express();
app.use(express.json());

const dotenv = require("dotenv")
const mongoose = require("mongoose")

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to ${port}...`))

// for CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Direct to /input</h1>")
})

dotenv.config({ path: "./config.env" })
const dbURi = process.env.DATABASE

mongoose.connect(dbURi)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(`Error encountered while connecting to db: ${err}`))

const { Fruit } = require("./schema");

app.get("/input-fruit", (req, res) => {
  Fruit.find()
    .then(response => res.send(response))
    .catch(err => console.log(`Error encountered while fetching Fruit: ${err}`))
})

app.post("/input-fruit", (req, res) => {
  const data = new Fruit(req.body)
  res.send(data)
  data.save()
    .then(() => console.log("Fruit data stored..."))
    .catch(err => console.log(`Error encountered while sending data to Fruit db: ${err}`))
})