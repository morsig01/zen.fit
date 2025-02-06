import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create a response that removes the cookie
    const response = NextResponse.json({ message: 'Logout successful!' });
    
    // Clear the token cookie by setting it with maxAge=0
    response.cookies.set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 0, // Immediately expire the cookie
    });
    
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
