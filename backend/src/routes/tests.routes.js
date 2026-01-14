import express from 'express';
import {pool} from '../config/db.js';


const router = express.Router();

// Testing the Database

router.get("/db",async (req,res) => {

    const insert = await pool.query(
        `
        INSERT INTO users(email, password_hash)
        VALUES ($1, $2)
        RETURNING id, email, created_at
        `,
        [`test_${Date.now()}@example.com`, "hashed_password"]
    );

    const select = await pool.query(
        `SELECT id, email, created_at
        FROM users
        ORDER BY created_at DESC
        LIMIT 5
        `
    );

    res.json({
        inserted: insert.rows[0],
        recentUsers: select.rows,
    });
});

export default router;