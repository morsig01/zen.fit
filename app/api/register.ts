import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, password, role } = req.body;

    try {
      // Hash password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Check if user already exists
      const [existingUser] = await pool.query(
        'SELECT * FROM Users WHERE email = ?',
        [email]
      );
      if ((existingUser as any).length > 0) {
        return res.status(400).json({ message: 'Email already exists.' });
      }

      // Insert new user
      const [result] = await pool.query(
        'INSERT INTO Users (full_name, email, password, trainer_id) VALUES (?, ?, ?, NULL)',
        [fullName, email, hashedPassword]
      );

      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed.' });
  }
}
