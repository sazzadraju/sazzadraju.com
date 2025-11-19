import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { pin } = await request.json();
  
  if (pin === '009161') {
    const response = NextResponse.json({ success: true });
    response.cookies.set('keystatic-auth', pin, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return response;
  }
  
  return NextResponse.json({ success: false }, { status: 401 });
}
