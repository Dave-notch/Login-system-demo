import mysql from 'mysql2'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

 const pool=mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export default pool;

export async function getUser(id){
    const [rows] = await pool.query(`SELECT * FROM sign_UP
        WHERE id = ?`,[id])
    return rows
}


export async function createUser(name,password,email){
    const hashedPassowrd= await bcrypt.hash(password, 10)
    const [result]= await pool.query(`insert into sign_UP(name,password,email)
        values(?,?,?)
        `,[name,hashedPassowrd,email]
    )
    const id = result.insertId
    return getUser(id)

}

export async function getUsers() {
    const result = await pool.query("select * from sign_UP")
    return result
    
}



// const result=await createUser('muuse','muuse911','muuse@gmail.com')
// const results=await getUsers()
// console.log(result)
// console.log(results)