//importing modules
const bcrypt = require("bcrypt");
const db = require("../model");
const jwt = require("jsonwebtoken");

const race_model = require('../hfc_model')

// Assigning users to the variable User
const User = db.users;
const Race = db.races;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
 try {
   const { userName, email, password } = req.body;
   const data = {
     userName,
     email,
     password: await bcrypt.hash(password, 10),
   };
   //saving the user
   const user = await User.create(data);

   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   if (user) {
     let token = jwt.sign({ id: user.id }, process.env.secretKey, {
       expiresIn: 1 * 24 * 60 * 60 * 1000,
     });

     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
     console.log("user", JSON.stringify(user, null, 2));
     console.log(token);
     //send users details
     return res.status(201).send(user);
   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
};


//login authentication
const login = async (req, res) => {
  try {    
    const { email, password } = req.body;

    //find a user by their email
    const user = await User.findOne({
      where: {
      email: email
    } 
     
  });

   //if user email is found, compare password with bcrypt
   if (user) {
     const isSame = await bcrypt.compare(password, user.password);

     //if password is the same
      //generate token with the user's id and the secretKey in the env file

     if (isSame) {
       let token = jwt.sign({ id: user.id }, process.env.secretKey, {
         expiresIn: 1 * 24 * 60 * 60 * 1000,
       });

       //if password matches wit the one in the database
       //go ahead and generate a cookie for the user
       res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
       console.log("user", JSON.stringify(user, null, 2));
       console.log(token);
       //send user data
       // return res.status(201).send(user);
       return res.status(201).send({
          userName: user['userName']
        });       
     } else {
       return res.status(401).send("Authentication failed");
     }
   } else {
     return res.status(401).send("Authentication failed");
   }
 } catch (error) {
   console.log(error);
 }
};

const postRace = async (req, res) => {
  try {

   const { raceName, raceDate, raceNotes } = req.body;
   const data = {
     raceName,
     raceDate,
     raceNotes,
   };
   //save the race
   const newRace = await Race.create(data);

   if (newRace) {
     return res.status(201).send(newRace);
   } else {
     return res.status(409).send("Details are not correct");
   }
  } catch (error) {
    return res.status(401).json({ error: "Something went wrong saving race" });
  } 
};  

const getRaces = async (req, res) => {
  try { 
    const races = await Race.findAll()
    const cols = await Object.keys(Race.getAttributes())
    return res.status(201).send({
      cols: cols,
      races: races
        });
  }
    catch (error) {
    return res.status(401).json({ error: "Something went wrong getting races" });
  }
};

module.exports = {
 signup,
 login,
 postRace,
 getRaces
};