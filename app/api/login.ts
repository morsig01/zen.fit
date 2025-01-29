import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Fetch user by email
      const [users] = await pool.query(
        'SELECT * FROM Users WHERE email = ?',
        [email]
      );
      const user = (users as any)[0];

      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }

      // Compare password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }

      // You can generate and return a JWT token here if you want for authentication

      res.status(200).json({ message: 'Login successful!' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed.' });
  }
}
