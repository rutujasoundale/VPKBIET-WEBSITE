const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Rutuu@20050901",
  database:"vpkbiet"
});

db.connect(err=>{
 if(err) throw err;
 console.log("Database Connected");
});

app.get("/students",(req,res)=>{
 db.query("SELECT * FROM students",
 (err,result)=>{
   res.send(result);
 });
});

app.listen(5000,()=>{
 console.log("Server running");
});