const express=require('express');
const cors=require('cors');
require('dotenv').config();
const {Pool} =require('pg');

const pool=new pool({
    user:'postgres',
    host:'localhost',
    database:'erp_db',
    password:'P@ssw0rd',
    port:5432,
});

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("ERP is online!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)   
});

const FACULTY_USER={
    email:"admin@college.com",
    password:"admin@123",
    roles: ["admin", "faculty"]
}

app.post('/api/login', async(req,res)=>{
    const{email, password}=req.body;

    const query=`select * from users where email=$1`;
    const result=await pool.query(query,[email])

    if(email===FACULTY_USER.email && password===FACULTY_USER.password){
        res.status(200).json({
            success: true, 
            message: "Login successful",
            roles: FACULTY_USER.roles
    });
    } else {
        res.status(401).json({success: false, message: "Invalid Credential"});
    }
});