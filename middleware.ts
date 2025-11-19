import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/keystatic')) {
    const pin = request.cookies.get('keystatic-auth')?.value;
    
    if (pin !== '009161') {
      const url = request.nextUrl.clone();
      url.pathname = '/keystatic-login';
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/keystatic/:path*',
};
