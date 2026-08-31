import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const DOMAIN_NAME = 'capecavogreco.com';
const BASE_URL = `https://${DOMAIN_NAME}`;
const HERO_IMAGE = `${BASE_URL}/gallery/cape-cavo-greco%20(1).jpg`;
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/FigeLZdG7kd1iPYcA';
const GOVT_TOURISM_URL = 'https://www.visitcyprus.com/discover-cyprus/nature/excursions/cape-gkreko-national-forest-park/';
const LATITUDE = 34.9608713;
const LONGITUDE = 34.0787873;
const POSTAL_CODE = '5330';
const COUNTRY_CODE_2LETTER = 'CY';

const localeData: Record<string, {
  ogLocale: string;
  htmlLang: string;
  fullName: string;
  shortName: string;
  cityName: string;
  stateProvince: string;
  countryName: string;
  nearby1: string;
  nearby2: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  faqLocationQ: string;
  faqLocationA: string;
  faqFreeQ: string;
  faqFreeA: string;
  imageAlt: string;
}> = {
  el: {
    ogLocale: 'el_GR',
    htmlLang: 'el-GR',
    fullName: 'Ακρωτήριο Κάβο Γκρέκο',
    shortName: 'Cape Cavo Greco',
    cityName: 'Αγία Νάπα',
    stateProvince: 'Αμμόχωστος',
    countryName: 'Κύπρος',
    nearby1: 'Μοναστήρι Αγίας Νάπας',
    nearby2: 'Κόλπος Συκιάς (Fig Tree Bay)',
    title: 'Ακρωτήριο Κάβο Γκρέκο (Αγία Νάπα) - Οδηγός Επισκέπτη & Τοποθεσία',
    description: 'Ανακαλύψτε το Ακρωτήριο Κάβο Γκρέκο, το εμβληματικό φυσικό καταφύγιο στην Αγία Νάπα, Αμμόχωστο, Κύπρος. Δείτε το χάρτη τοποθεσίας, ώρες επίσκεψης, κοντινά αξιοθέατα και συμβουλές ταξιδιού.',
    ogTitle: 'Ακρωτήριο Κάβο Γκρέκο - Οδηγός Ταξιδιού Αγίας Νάπας',
    ogDescription: 'Επίσημος οδηγός επισκέπτη για το Ακρωτήριο Κάβο Γκρέκο στην Αγία Νάπα, Αμμόχωστο, Κύπρος.',
    faqLocationQ: 'Πού βρίσκεται το Ακρωτήριο Κάβο Γκρέκο;',
    faqLocationA: 'Το Ακρωτήριο Κάβο Γκρέκο βρίσκεται στην Αγία Νάπα, Αμμόχωστο, Κύπρος.',
    faqFreeQ: 'Είναι δωρεάν η επίσκεψη στο Ακρωτήριο Κάβο Γκρέκο;',
    faqFreeA: 'Ναι, το Ακρωτήριο Κάβο Γκρέκο είναι δημόσιος χώρος και είναι δωρεάν για επίσκεψη όλο το χρόνο.',
    imageAlt: 'Ακρωτήριο Κάβο Γκρέκο - Κύρια θέα στην Αγία Νάπα, Κύπρος',
  },
  en: {
    ogLocale: 'en_US',
    htmlLang: 'en',
    fullName: 'Cape Cavo Greco',
    shortName: 'Cape Cavo Greco',
    cityName: 'Ayia Napa',
    stateProvince: 'Famagusta',
    countryName: 'Cyprus',
    nearby1: 'Ayia Napa Monastery',
    nearby2: 'Fig Tree Bay, Protaras',
    title: 'Cape Cavo Greco (Ayia Napa) - Visitor Guide & Location',
    description: 'Discover Cape Cavo Greco, the iconic nature reserve in Ayia Napa, Famagusta, Cyprus. View location map, opening details, nearby Ayia Napa Monastery, and travel tips.',
    ogTitle: 'Cape Cavo Greco - Ayia Napa Travel Guide',
    ogDescription: 'Official visitor guide to Cape Cavo Greco in Ayia Napa, Famagusta, Cyprus.',
    faqLocationQ: 'Where is Cape Cavo Greco located?',
    faqLocationA: 'Cape Cavo Greco is located in Ayia Napa, Famagusta, Cyprus.',
    faqFreeQ: 'Is Cape Cavo Greco free to visit?',
    faqFreeA: 'Yes, Cape Cavo Greco is a public space and is free to visit year-round.',
    imageAlt: 'Cape Cavo Greco - Main view in Ayia Napa, Cyprus',
  },
  zh: {
    ogLocale: 'zh_CN',
    htmlLang: 'zh-CN',
    fullName: '卡沃格雷科角 (Cape Cavo Greco)',
    shortName: '卡沃格雷科角',
    cityName: '阿依纳帕',
    stateProvince: '法马古斯塔',
    countryName: '塞浦路斯',
    nearby1: '阿依纳帕修道院',
    nearby2: '无花果树湾 (Fig Tree Bay)',
    title: '卡沃格雷科角 (阿依纳帕) - 游客指南与位置',
    description: '探索卡沃格雷科角，这座位于塞浦路斯法马古斯塔省阿依纳帕的标志性自然保护区。查看位置地图、开放信息、周边阿依纳帕修道院及旅行建议。',
    ogTitle: '卡沃格雷科角 - 阿依纳帕旅游指南',
    ogDescription: '位于塞浦路斯法马古斯塔省阿依纳帕的卡沃格雷科角官方游客指南。',
    faqLocationQ: '卡沃格雷科角位于哪里？',
    faqLocationA: '卡沃格雷科角位于塞浦路斯法马古斯塔省的阿依纳帕。',
    faqFreeQ: '参观卡沃格雷科角是免费的吗？',
    faqFreeA: '是的，卡沃格雷科角是公共区域，全年免费向游客开放。',
    imageAlt: '卡沃格雷科角 - 塞浦路斯阿依纳帕主景',
  },
  tr: {
    ogLocale: 'tr_TR',
    htmlLang: 'tr-TR',
    fullName: 'Cape Cavo Greco',
    shortName: 'Cape Cavo Greco',
    cityName: 'Ayia Napa',
    stateProvince: 'Gazimağusa',
    countryName: 'Kıbrıs',
    nearby1: 'Ayia Napa Manastırı',
    nearby2: 'Fig Tree Bay, Protaras',
    title: 'Cape Cavo Greco (Ayia Napa) - Ziyaretçi Rehberi & Konum',
    description: 'Cape Cavo Greco\'yu keşfedin: Kıbrıs, Gazimağusa, Ayia Napa\'daki ikonik doğa rezervi. Konum haritasını, ziyaret saatlerini, yakındaki Ayia Napa Manastırı\'nı ve seyahat ipuçlarını görün.',
    ogTitle: 'Cape Cavo Greco - Ayia Napa Seyahat Rehberi',
    ogDescription: 'Ayia Napa, Gazimağusa, Kıbrıs\'taki Cape Cavo Greco için resmi ziyaretçi rehberi.',
    faqLocationQ: 'Cape Cavo Greco nerede bulunur?',
    faqLocationA: 'Cape Cavo Greco, Ayia Napa, Gazimağusa, Kıbrıs\'ta bulunur.',
    faqFreeQ: 'Cape Cavo Greco\'yu ziyaret etmek ücretsiz mi?',
    faqFreeA: 'Evet, Cape Cavo Greco halka açık bir alandır ve yıl boyu ücretsizdir.',
    imageAlt: 'Cape Cavo Greco - Ayia Napa, Kıbrıs ana görünüm',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const data = localeData[locale as keyof typeof localeData] || localeData.en;

  const selfUrl = `${BASE_URL}/${locale}`;
  const elUrl = `${BASE_URL}/el`;
  const enUrl = `${BASE_URL}/en`;
  const zhUrl = `${BASE_URL}/zh`;
  const trUrl = `${BASE_URL}/tr`;

  return {
    metadataBase: new URL(BASE_URL),
    title: data.title,
    description: data.description,
    keywords: [
      data.fullName,
      data.shortName,
      data.cityName,
      data.stateProvince,
      data.countryName,
      'Nature Reserve',
      'National Forest Park',
      'Sea Caves',
      data.nearby1,
      data.nearby2,
    ],
    alternates: {
      canonical: selfUrl,
      languages: {
        'el': elUrl,
        'en': enUrl,
        'zh': zhUrl,
        'tr': trUrl,
        'x-default': elUrl,
      },
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: selfUrl,
      siteName: data.fullName,
      locale: data.ogLocale,
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 630,
          alt: data.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.ogTitle,
      description: data.ogDescription,
      images: [HERO_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const data = localeData[locale as keyof typeof localeData] || localeData.en;

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${BASE_URL}/#attraction`,
    name: data.fullName,
    alternateName: [data.shortName, `${data.cityName} ${data.fullName}`],
    description: data.description,
    url: `${BASE_URL}/${locale}`,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    publicAccess: true,
    touristType: ['Hikers', 'Nature Lovers', 'Photographers', 'Families'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.fullName,
      addressLocality: data.cityName,
      addressRegion: data.stateProvince,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    containedInPlace: {
      '@type': 'City',
      name: data.cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: data.stateProvince,
        containedInPlace: {
          '@type': 'Country',
          name: data.countryName,
        },
      },
    },
    sameAs: [
      MAPS_SHARE_URL,
      GOVT_TOURISM_URL,
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: data.faqLocationQ,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.faqLocationA,
        },
      },
      {
        '@type': 'Question',
        name: data.faqFreeQ,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.faqFreeA,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: data.fullName,
        item: `${BASE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.cityName,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.stateProvince,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: data.countryName,
      },
    ],
  };

  return (
    <html lang={data.htmlLang} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${BASE_URL}/${locale}`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:image:alt" content={data.imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
