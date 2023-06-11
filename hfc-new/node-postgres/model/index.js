//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5432
//database name is discover
const sequelize = new Sequelize(`postgres://my_user:root@localhost:5432/hfc`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to models
db.users = require('./userModel') (sequelize, DataTypes)
db.races = require('./raceModel') (sequelize, DataTypes)

//exporting the module
module.exports = db