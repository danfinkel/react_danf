const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001

const race_model = require('./hfc_model')

app.use(cors());
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.get('/', (req, res) => {
  race_model.getRaces()
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json(error);
  })
})

app.post('/races', (req, res) => {
  console.log(req.body)
  race_model.createRace(req.body)
  .then(response => {    
    res.status(200).json(response);
  })
  .catch(error => {    
    console.log(error);
    res.status(500).send(error);
  })
})

app.delete('/race/:id', (req, res) => {
  merchant_model.deleteRace(req.params.id)
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