import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.capecavogreco.com';
  const elUrl = `${baseUrl}/el/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const trUrl = `${baseUrl}/tr/cookie-settings`;
  const deUrl = `${baseUrl}/de/cookie-settings`;
  const selfUrl = `${baseUrl}/${locale}/cookie-settings`;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'el': elUrl,
        'en': enUrl,
        'zh': zhUrl,
        'tr': trUrl,
        'de': deUrl,
        'x-default': enUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
