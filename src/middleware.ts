import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const url = request.nextUrl.clone();

  if (host === 'capecavogreco.com' || host?.startsWith('capecavogreco.com:')) {
    url.host = 'www.capecavogreco.com';
    return NextResponse.redirect(url, { status: 308 });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
