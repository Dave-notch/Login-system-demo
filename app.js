import express from 'express'
import bcrypt from 'bcrypt'
import cors from "cors";
import dotenv from 'dotenv'
import mysql2 from 'mysql2'
dotenv.config()

// import { createUser, getEmail,getPass } from './backend.js'

 const pool=mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // port: 5432
    
}).promise()


const app = express()
app.use(express.json())
app.use(cors());
app.use(express.static("public"))


app.post("/sign_UP", async (req,res,next)=>{
   console.log(req.body)
  try{
    const {userName,userEmail,pass} = req.body
    const hashedPassowrd= await bcrypt.hash(pass, 10)

     if(!userName || !userEmail || !pass){
      return res.status(400).send({message:"fields are empty please fill them up"})
     }

      const NAME =  await pool.query(
      `SELECT * FROM sign_UP WHERE name = ?
      `,[userName]
     )
      
    const EMAIL=  await pool.query(
      `SELECT * FROM sign_UP WHERE email = ?
      `,[userEmail]
     )
      
    // const useremail=EMAIL[0]
    // const User=NAME[0]
    

    if(EMAIL.length>0 && NAME.length>0){
      return res.status(401).json({error:"Error userName and Email already exists"});
     }else if(NAME.length>0){
      return res.status(401).json({error:"Error userName already exists"});
     }else if(EMAIL.length>0){
      return res.status(401).json({error:"Error Email already exists"});
     }



    await pool.query(
      `INSERT INTO sign_UP (name, email,pass )
      VALUES (?,?,?)
      `,[userName,userEmail,hashedPassowrd]
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
    const [row] = await pool.query(`SELECT * FROM sign_UP WHERE
        email=?`,[logEmail]
      )

      const user=row[0]

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






















