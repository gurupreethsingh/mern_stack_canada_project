const express = require("express")

// make your app using express library. 
const app = express()

// import mongoose library. 
const mongoose = require("mongoose");

const cors = require("cors")

// use the cors library in our app. 
app.use(cors())

// use the express library to handle the json data. 
app.use(express.json())

// import the UserModel from the models, folder, Users.js file. 
const UserModel = require("./models/Users");

// POST , GET , PUT , DELETE 

// function to create new user.
app.post("/createUser" , (req, res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err))
})


// function to fetch everyone from the database. 
// get() method to fetch.. 
app.get("/" , (req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
})


// get() method to fetch.. 
app.get("/get_user/:id" , (req, res)=>{
    const userId = req.params.id;
    UserModel.findById(userId)
    .then(user => 
        {
            if(!user)
            {
                return res.status(404).json({"error" : "User not found"})
            }
            // if the user is found
            res.json(user);
         })
    .catch(err => res.json(err));
})


// function to update the user. 
//based on the id of the user. 

app.put('/update_user/:id', (req, res) => {
    const userId = req.params.id;
    UserModel.findByIdAndUpdate(userId, req.body, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json({ error: 'Error updating user' }));
});


// delete() method. 
	// function to delete the user from the database. 
	app.delete("/delete_user/:id" , (req, res)=>{
    	const id = req.params.id;
    	UserModel.findByIdAndDelete({_id : id})
    	.then(res => res.json(res))
    	.catch(err=> res.json(err));
	})

const PORT = 4000;

// connect to mongo db. 
mongoose.connect("mongodb://127.0.0.1:27017/aap_curd")
.then((result)=>{
    console.log(result);
})
.catch(err => console.log("error in connecting to mongodb database," , err));

app.listen(PORT , (req, res)=>{
    console.log(`server(api) is successfully running in port ${PORT}`);
})