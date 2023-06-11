//importing modules
const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../model");
//Assigning db.users to User variable
 const User = db.users;


//Function to check if httponly cookie that was sent
//is legit
 const isAuthorized = async (req, res, next) => {
   if (!req.headers.cookie) {
     return res.status(401).json({ error: "Not Authorized - No Token Sent. Please Logout/Login" });
   }  

   const authHeader = req.headers.cookie;
   const token = authHeader.split("=")[1];

   try {
     // Verify the token is valid
     const { user } = jwt.verify(token, process.env.secretKey);
     next();
   }

   catch (error) {
     return res.status(401).json({ error: "Not Authorized - verify failed" }) ;
   }

  };

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const saveUser = async (req, res, next) => {
 //search the database to see if user exist
 try {
   const username = await User.findOne({
     where: {
       userName: req.body.userName,
     },
   });
   //if username exist in the database respond with a status of 409
   if (username) {
     return res.json(409).send("username already taken");
   }

   //checking if email already exist
   const emailcheck = await User.findOne({
     where: {
       email: req.body.email,
     },
   });

   //if email exist in the database respond with a status of 409
   if (emailcheck) {
     return res.json(409).send("Authentication failed");
   }

   next();
 } catch (error) {
   console.log(error);
 }
};

//exporting module
 module.exports = {
 saveUser,
 isAuthorized
};