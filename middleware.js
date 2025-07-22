import { NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from './lib/constants';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
};
