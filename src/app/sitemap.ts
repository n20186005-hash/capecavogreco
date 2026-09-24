import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://www.capecavogreco.com';
const LOCALES = routing.locales; // ['el', 'en', 'zh', 'tr', 'de']
const PATHS = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PATHS) {
    const languages: Record<string, string> = {};
    for (const locale of LOCALES) {
      languages[locale] = `${BASE_URL}/${locale}${path}`;
    }
    languages['x-default'] = `${BASE_URL}/en${path}`;

    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'monthly' : 'yearly',
        priority: path === '' ? 1 : 0.3,
        alternates: { languages },
      });
    }
  }

  return entries;
}
