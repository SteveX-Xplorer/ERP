const express=require('express');
const cors=require('cors');
require('dotenv').config();
const {Pool} =require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user && user.password === password) {
        res.status(200).json({ 
            success: true, 
            roles: user.roles });
    } else {
        res.status(401).json({ 
            success: false, 
            message: "Invalid credentials" });
    }
});

app.post('/api/log-class', async (req, res) => {
    const { email, subject, topic } = req.body;
    
    const query = 'INSERT INTO class_logs (faculty_email, subject_name, topic_covered) VALUES ($1, $2, $3) RETURNING *';
    const values = [email, subject, topic];

    try {
        const result = await pool.query(query, values);
        res.status(201).json({ 
            success: true, 
            log: result.rows[0] });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message });
    }
});