 const [userName] = await pool.query(
      `INSERT INTO sign_UP (name)
      VALUES (?)
      `,[name]
     )

     if(userName.name==name){
      res.status(401).json({message:"Error userName already exists"})
     }

    const [userEmail] = await pool.query(
      `INSERT INTO sign_UP (email)
      VALUES (?)
      `,[email]
     )

     if(userEmail.email==email){
      res.status(401).json({message:"Error Email already exists"})
     }

      const [userPass] = await pool.query(
      `INSERT INTO sign_UP (name, email,pass )
      VALUES (?,?,?)
      `,[hashedPassowrd]
     )