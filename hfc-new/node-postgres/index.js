const express = require('express')
const cors = require('cors');
const sequelize = require('sequelize')
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

const db = require('./model')
const userRoutes = require ('./routes/userRoutes')

const app = express()
const port = 3001

const race_model = require('./hfc_model')

//middleware
// app.use(cors());
// app.use(cors({
//     origin: ['http://localhost:3000/'] 
// }));

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);  
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', userRoutes)
// app.options('/api/users/login', cors({origin: ['http://localhost:3000/']}))


app.get('/getRaces', (req, res) => {
  race_model.getRaces()
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json(error);
  })
})


app.delete('/race/:id', (req, res) => {
  race_model.deleteRace(req.params.id)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})