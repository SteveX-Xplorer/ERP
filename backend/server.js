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

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user && user.password === password) {
        res.status(200).json({ success: true, roles: user.roles });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});