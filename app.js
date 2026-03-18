import express from 'express'
import { createUser, getUsers } from './backend.js'


const app = express()
app.use(express.json())




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