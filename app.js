import express from 'express'
import bcrypt from 'bcrypt'
import cors from "cors";
import dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg
dotenv.config()

// import { createUser, getEmail,getPass } from './backend.js'

 const pool= new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: 5432
    
})


const app = express()
app.use(express.json())
app.use(cors({ origin: "http://127.0.0.1:5500" }));


app.post("/sign_up", async (req,res,next)=>{
  try{
    const {userName,userEmail,pass} = req.body
    const hashedPassowrd= await bcrypt.hash(pass, 10)

     if(!userName || !userEmail || !pass){
      return res.status(400).send({message:"fields are empty please fill them up"})
     }

    const result=  await pool.query(
      `SELECT * FROM sign_up WHERE name = $1
      `,[userName]
     )
      
    const rowsEmail =  await pool.query(
      `SELECT * FROM sign_up WHERE email = $1
      `,[userEmail]
     )
      
    const useremail=rowsEmail.rows[0]
    const User=result.rows[0]
    

    if(useremail && User){
      return res.status(401).send({message:"Error userName and Email already exists"});
     }

    if(User){
      return res.status(401).send({message:"Error userName already exists"});
     }

    if(useremail){
      return res.status(401).send({message:"Error Email already exists"});
     }



    await pool.query(
      `INSERT INTO sign_up (name, email,pass )
      VALUES ($1,$2,$3)
      `,[userName,userEmail,hashedPassowrd]
     )

     res.status(201).json({ message: "User created successfully" });
  }catch(err){
    console.error(err)
    next(err)
  }
 
})


app.post("/sign_up/login", async (req,res,next)=>{
  try{
    const {logEmail,loginPass} = req.body
    const row = await pool.query(`SELECT * FROM sign_up where
        email=$1`,[logEmail]
      )

      const user=row.rows[0]

      if(!user){
        return res.status(401).send({message: "User not found"})
      }

      

      const isMatch= await bcrypt.compare(loginPass,user.pass)

      if(!isMatch){
        return res.status(401).send({message: "Wrong password"})
      }

    res.status(201).send({ message: `Logged in successfully ${user.name}`});
 
  }catch(err){
    console.error(err)
    next(err)
  }

})




app.post("/sign_UP", async (req,res)=>{
    const {name,password,email}=req.body
    const result= await createUser(name,password,email)
    res.status(201).send(result)
})



app.get("/sign_UP", async (req,res)=>{
  const result=await getUsers()
  res.status(201).send(result)
})




app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({
    error: err
  })
  
})

// console.log(process.env.POSTGRES_HOST);
// console.log(process.env.POSTGRES_PASSWORD);



app.listen(8000, () => {
  console.log('Server running on port 8000');
});

app.get("/", (req, res) => {
  res.send("Server is running")
})