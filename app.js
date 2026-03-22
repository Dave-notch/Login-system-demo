import express from 'express'
import { createUser, getEmail,getPass } from './backend.js'
import pool from "./backend.js"
import bcrypt from 'bcrypt'
import cors from "cors";


const app = express()
app.use(express.json())
app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.post("/sign_UP", async (req,res,next)=>{
  try{
    const { name,email,pass} = req.body
    const hashedPassowrd= await bcrypt.hash(pass, 10)

     if(!name || !email || !pass){
      return res.status(400).send("fields are empty please fill them up")
     }

     await pool.query(
      `INSERT INTO sign_UP (name, email,pass )
      VALUES (?,?,?)
      `,[name,email,hashedPassowrd]
     )
     res.status(201).json({ message: "User created successfully" });
  

  }catch(err){
    console.error(err)
    next(err)
  }
 
})

app.post("/sign_UP/login", async (req,res,next)=>{
  try{
    const {logEmail,loginPass} = req.body
    const [rows] = await pool.query(`SELECT * FROM sign_UP
        WHERE email = ?`,[logEmail]
      )

      const user=rows[0]

      if(!user){
        return res.status(401).send("User not found")
      }

      const isMatch= await bcrypt.compare(loginPass,user.pass)

      if(!isMatch){
        return res.status(401).send("Wrong password")
      }

      res.status(200).json({ message: "Login successful" });
    
  }catch(err){
    console,error(err)
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



app.listen(8000, () => {
  console.log('Server running on port 8000');
});