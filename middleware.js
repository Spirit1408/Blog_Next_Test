import { NextResponse } from 'next/server';

const locales = ['en', 'uk'];
const defaultLocale = 'en';

function getLocale(pathname) {
  const segments = pathname.split('/');
  const locale = segments[1];
  return locales.includes(locale) ? locale : null;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
};
