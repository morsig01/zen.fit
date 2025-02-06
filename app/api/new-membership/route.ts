import { NextResponse } from 'next/server';
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
    const { membershipId, userId } = body;

    if (!membershipId || !userId) {
      return NextResponse.json({ message: 'Membership ID and User ID are required.' }, { status: 400 });
    }

    // Update the user's membership
    await pool.query('UPDATE users SET membership_id = ? WHERE user_id = ?', [membershipId, userId]);

    // Retrieve the plan name
    const [result]: any = await pool.query('SELECT name FROM memberships WHERE membership_id = ?', [membershipId]);

    if (result.length === 0) {
      return NextResponse.json({ message: 'Invalid membership ID.' }, { status: 400 });
    }

    return NextResponse.json({ planName: result[0].name });
  } catch (error) {
    console.error('Error updating membership:', error);
    return NextResponse.json({ message: 'Failed to update membership.' }, { status: 500 });
  }
}