import express from "express";
import mongoose from './dbconnect.js';

const app = express();

const port = 5500;

// APP LEVEL MIDDLE WARE
app.use(express.json())

app.get("/", (req,res)=> {
    res.status(200).json({success :"HELLO FROM EXPRESS"})
})

// Sign-up endpoint
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
  
    // Load existing user data (if any)
    let userData = [];
    try {
      const data = fs.readFileSync('users.json', 'utf-8');
      userData = JSON.parse(data);
    } catch (error) {
      console.error(error);
    }
  
  
    // Check if the username already exists
    const existingUser = userData.find((user) => user.username === username);
    if (existingUser) {
      res.send('Username already exists');
    } else {
      // Save the new user to the JSON file
      userData.push({ username, password });
      fs.writeFileSync('users.json', JSON.stringify(userData, null, 2));
      // res.send('Sign-up successful');
      res.redirect("/login")
    }
  });



  // Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Load existing user data
    try {
      const data = fs.readFileSync('users.json', 'utf-8');
      const userData = JSON.parse(data);
      console.log(userData);
  
      // Check if the username and password match
      const user = userData.find((user) =>{ 
        return user.username === username && user.password === password});
      if (user) {
        authorized=true
        res.redirect('/')
      } else {
        authorized=false
        res.send('Login failed');
      }
    } catch (error) {
      console.error(error);
      res.send('Login failed');
    }
  });

  


app.listen(port,()=> {
    console.log("Server Started at port : ",port)
})