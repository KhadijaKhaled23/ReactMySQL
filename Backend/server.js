const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sqluser',
    database: 'school',
    password: 'password',
    port: 3306
})

db.connect((err)=>{
    if(err) console.log(err);
    console.log("connectioned established!");
})

app.get('/', (re, res)=>{
    return res.json("From backend side...")
})

app.get('/courses', (req, res)=>{
    const sql = 'select * from courses';
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening")
})

