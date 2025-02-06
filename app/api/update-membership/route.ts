import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function POST(req: Request) {
    try {
      const { userId, membershipId } = await req.json();
  
      if (!userId || !membershipId) {
        return NextResponse.json({ message: 'User ID and Membership ID are required.' }, { status: 400 });
      }
  
      // Check if the user exists
      const [users]: any = await pool.query('SELECT * FROM users WHERE user_id = ?', [userId]);
      if (users.length === 0) {
        return NextResponse.json({ message: 'User not found.' }, { status: 404 });
      }
  
      // Check if the membership exists
      const [memberships]: any = await pool.query('SELECT * FROM memberships WHERE membership_id = ?', [membershipId]);
      if (memberships.length === 0) {
        return NextResponse.json({ message: 'Invalid membership ID.' }, { status: 400 });
      }
  
      // Update membership for the user
      await pool.query('UPDATE users SET membership_id = ? WHERE user_id = ?', [membershipId, userId]);
  
      return NextResponse.json({ message: 'Membership updated successfully.' });
    } catch (error) {
      console.error('Error updating membership:', error);
      return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
  }