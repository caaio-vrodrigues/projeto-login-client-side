import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
 
  console.log('Middleware interceptou:', request.url);

  if (request.nextUrl.pathname !== '/login') {
    console.log('Redirecionando para /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], 
};