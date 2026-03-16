const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
host: process.env.DB_HOST ,
user: process.env.DB_USER ,
password: process.env.DB_PASSWORD ,
database: process.env.DB_NAME ,
port: 5432
})

/* GET BOOKS */

app.get("/books", async (req,res)=>{


try{

    const result = await pool.query(
        "SELECT * FROM books ORDER BY id DESC"
    )

    res.json(result.rows)

}catch(err){

    console.error(err)
    res.status(500).json({error:"database error"})

}


})

/* ADD BOOK */

app.post("/books", async (req,res)=>{


const {title,author,description} = req.body

try{

    await pool.query(
        "INSERT INTO books(title,author,description) VALUES($1,$2,$3)",
        [title,author,description]
    )

    res.json({message:"book added"})

}catch(err){

    console.error(err)
    res.status(500).json({error:"insert failed"})

}


})

/* DELETE BOOK */

app.delete("/books/:id", async (req,res)=>{


const id = req.params.id

try{

    await pool.query(
        "DELETE FROM books WHERE id=$1",
        [id]
    )

    res.json({message:"book deleted"})

}catch(err){

    console.error(err)
    res.status(500).json({error:"delete failed"})

}

})

/* UPDATE BOOK */

app.put("/books/", async (req,res)=>{

const id = req.params.id
const {title,author,description} = req.body

try{

    await pool.query(
        "UPDATE books SET title=$1, author=$2, description=$3 WHERE id=$4",
        [title,author,description,id]
    )

    res.json({message:"book updated"})

}catch(err){

    console.error(err)
    res.status(500).json({error:"update failed"})

}

})
app.listen(3000, ()=>{
console.log("API running on port 3000")
})

