import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const CANONICAL_HOST = 'www.capecavogreco.com';
const LEGACY_PATH_TOKENS = [':path*', ':path', ':splat', '*'];

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const host =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host');

  const url = request.nextUrl.clone();
  let needsRedirect = false;

  if (host && host !== CANONICAL_HOST && !host?.startsWith(CANONICAL_HOST + ':')) {
    url.host = CANONICAL_HOST;
    needsRedirect = true;
  }

  let pathname = url.pathname;
  for (const token of LEGACY_PATH_TOKENS) {
    if (pathname.includes(token)) {
      pathname = '/';
      needsRedirect = true;
      break;
    }
  }
  url.pathname = pathname;

  if (needsRedirect) {
    return NextResponse.redirect(url, { status: 307 });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
