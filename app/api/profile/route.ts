import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import jwt, { JwtPayload } from 'jsonwebtoken';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function GET(req: Request) {
  try {
    // Extract token from cookies
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized: No token provided.' }, { status: 401 });
    }

    // Verify the token
    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    } catch (err) {
      return NextResponse.json({ message: 'Unauthorized: Invalid or expired token.' }, { status: 401 });
    }

    // Fetch user from the database using the userId from the decoded token
    const [rows]: any = await pool.query('SELECT full_name, email, membership, trainer, phone FROM users WHERE user_id = ?', [decoded.userId]);
    const user = rows[0];

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        full_name: user.full_name,
        email: user.email,
        membership: user.membership,
        trainer: user.trainer,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
