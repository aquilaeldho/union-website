const UsersModel1 = require('./models/Users')
const VendorModel = require('./models/Vendors');
const { MongoClient } = require('mongodb');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

const uri = "mongodb+srv://edappattuaquila:c7diklsUVPpSj92Z@cluster0.pm99u.mongodb.net/union_user"

mongoose.connect("mongodb+srv://edappattuaquila:c7diklsUVPpSj92Z@cluster0.pm99u.mongodb.net/union_user")
  .then(() => {
      console.log("Connected to MongoDB");
  })
  .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
  });

// Get all users
app.get('/getUsers', (req, res) => {
    UsersModel1.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
  });

  app.get('/getVendors', (req, res) => {
    VendorModel.find()
    .then(vendors => res.json(vendors))
    .catch(err => res.json(err));
});

  app.get('/getUserId', async (req, res) => {
    const { email } = req.query;
  
    try {
      const user = await UsersModel1.findOne({ email });
      if (user) {
        res.json({ userId: user._id });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.get('/api/profile', async (req, res) => {
    try {
      const client = new MongoClient(uri);
      await client.connect();
  
      const database = client.db('union_user');
      const collection = database.collection('union_users');
  
      const userProfile = await collection.findOne({ _id: req.user.id });
  
      client.close();

      if (!userProfile) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(userProfile);
    } catch (error) {
      console.error('Error fetching profile data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
//   app.get('/:id', async (req, res) => {
//     try {
//       const user = await UsersModel1.findById(req.params.id);
//       res.json(user);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

app.put('/:id', async (req, res) => {
    try {
      const user = await UsersModel1.findById(req.params.id);
      if (req.body.name) user.name = req.body.name;
      if (req.body.email) user.email = req.body.email;
      if (req.body.role) user.role = req.body.role;
  
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  app.delete('/:id', async (req, res) => {
    try {
      await UsersModel1.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  


// app.post("/signup", (req, res) => {
//     UsersModel1.create(req.body)
//     .then(union_user => res.json(union_user))
//     .catch(err => res.json(err))
// });

app.post("/signup", (req, res) => {
  const { role } = req.body;

  // Check if the role is vendor or user
  if (role === 'vendor') {
      // Create vendor if role is vendor
      VendorModel.create(req.body)
          .then(vendor => res.json(vendor))
          .catch(err => res.status(500).json({ error: 'Error creating vendor', details: err }));
  } else {
      // Create user if role is user
      UsersModel1.create(req.body)
          .then(union_user => res.json(union_user))
          .catch(err => res.status(500).json({ error: 'Error creating user', details: err }));
  }
});

app.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
    const user = await UsersModel1.findOne({email: email});
    if (!user) {
        return res.status(401).json("Invalid Credentials");
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return res.status(401).json("Invalid Credentials");
    }

    res.status(200).json({message: "Login Successful", role: user.role});
} catch (error) {
    res.status(500).json({message: "Server Error"});
}
    // .then(user => {
    //     if(user){
    //         if(user.password == password){
    //             isMatch = true;
    //             return res.status(200).json({message: "Login Succesful", role: user.role})
    //             // res.json({message: "success", role: user.role})
    //         } else{
    //             isMatch = false;
    //             // res.json("fail")
    //         }
            
    //         // if(user.password == password){
    //         //     res.json("success")
    //         // } else{
    //         //     res.json("The Password is incorrect")
    //         // }

    //     } 
    //     // else{
    //     //     res.json("No such user is registered")
    //     // }
    // })

    // if (isMatch){
    //     console.log("Login Successful");
    //     // return res.status(200).json({message: "Login Succesful", role: user.role})
    // } else {
    //     res.json("fail");
    // }
});


app.listen(3001, (error) => {
    if (!error) {
        console.log("Server running");

    } else {
        console.log("Error:" + error);
    }
});

