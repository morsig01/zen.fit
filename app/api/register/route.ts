import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password, membershipId } = body;

    if (!fullName || !email || !password || !membershipId) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Check if the membershipId exists (assuming you have a membership table)
    const [membershipRows]: any = await pool.query('SELECT * FROM memberships WHERE membership_id = ?', [membershipId]);
    if (membershipRows.length === 0) {
      return NextResponse.json({ message: 'Invalid membership ID.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the user already exists
    const [rows]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      return NextResponse.json({ message: 'Email already exists.' }, { status: 400 });
    }

    // Insert the new user into the database
    await pool.query(
      'INSERT INTO users (full_name, email, password, membership_id) VALUES (?, ?, ?, ?)',
      [fullName, email, hashedPassword, membershipId]
    );

    return NextResponse.json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
