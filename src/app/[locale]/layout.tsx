import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const DOMAIN_NAME = 'www.capecavogreco.com';
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
  faqBestTimeQ: string;
  faqBestTimeA: string;
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
    title: 'Κάβο Γκρέκο (Cape Greco) - Ο Απόλυτος Οδηγός & Αξιοθέατα',
    description: 'Ανακαλύψτε το Εθνικό Πάρκο Κάβο Γκρέκο στην Κύπρο. Πληροφορίες για θαλάσσιες σπηλιές, μονοπάτια, πρόσβαση & χάρτη.',
    ogTitle: 'Κάβο Γκρέκο (Cape Greco) - Ο Απόλυτος Οδηγός & Αξιοθέατα',
    ogDescription: 'Ανακαλύψτε το Εθνικό Πάρκο Κάβο Γκρέκο στην Κύπρο – θαλάσσιες σπηλιές, Γέφυρα της Αγάπης, μονοπάτια και χάρτης.',
    faqLocationQ: 'Πού βρίσκεται το Ακρωτήριο Κάβο Γκρέκο;',
    faqLocationA: 'Το Ακρωτήριο Κάβο Γκρέκο βρίσκεται στην Αγία Νάπα, Αμμόχωστο, Κύπρος.',
    faqFreeQ: 'Είναι δωρεάν η επίσκεψη στο Ακρωτήριο Κάβο Γκρέκο;',
    faqFreeA: 'Ναι, το Ακρωτήριο Κάβο Γκρέκο είναι δημόσιος χώρος και είναι δωρεάν για επίσκεψη όλο το χρόνο.',
    faqBestTimeQ: 'Ποια είναι η καλύτερη ώρα για να επισκεφθείτε τις θαλάσσιες σπηλιές στο Κάβο Γκρέκο;',
    faqBestTimeA: 'Οι θαλάσσιες σπηλιές επισκέπτονται καλύτερα το πρωί (πριν τις 10:00) ή αργά το απόγευμα για φωτογραφίες, αποφεύγοντας τη μεσημεριανή ζέστη. Ο Απρίλιος–Ιούνιος και ο Σεπτέμβριος–Νοέμβριος προσφέρουν τις πιο άνετες συνθήκες για τα μονοπάτια.',
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
    title: 'Cape Greco Cyprus: Ultimate Visitor Guide & Must-See Spots',
    description: 'Plan your visit to Cape Greco (Cavo Greco) National Park in Cyprus. Discover the famous Sea Caves, Kamara Tou Koraka bridge, hiking trails, bus routes & sunset spots. Free entry!',
    ogTitle: 'Cape Greco Cyprus: Ultimate Visitor Guide & Must-See Spots',
    ogDescription: 'Plan your visit to Cape Greco National Park in Cyprus – Sea Caves, Lovers\' Bridge, hiking trails, bus routes & sunset spots. Free entry.',
    faqLocationQ: 'Where is Cape Cavo Greco located?',
    faqLocationA: 'Cape Cavo Greco is located in Ayia Napa, Famagusta, Cyprus.',
    faqFreeQ: 'Is Cape Cavo Greco free to visit?',
    faqFreeA: 'Yes, Cape Cavo Greco is a public space and is free to visit year-round.',
    faqBestTimeQ: 'What is the best time to visit the Cape Greco Sea Caves?',
    faqBestTimeA: 'The sea caves are best visited in the morning (before 10:00) or late afternoon for photography, avoiding the midday heat. April–June and September–November offer the most comfortable conditions for the walking trails.',
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
    title: '卡沃格雷科角 (Cape Greco) 塞浦路斯终极指南 - 海蚀洞与必看景点',
    description: '探索塞浦路斯阿依纳帕的卡沃格雷科角（Cape Greco / Cavo Greco）国家森林公园。了解著名海蚀洞、卡马拉托科拉卡桥、徒步路线、公交线路与日落观赏点。免费入园！',
    ogTitle: '卡沃格雷科角 (Cape Greco) 塞浦路斯终极指南 - 海蚀洞与必看景点',
    ogDescription: '探索塞浦路斯卡沃格雷科角国家公园：海蚀洞、情人桥、徒步路线与公交线路。免费入园！',
    faqLocationQ: '卡沃格雷科角位于哪里？',
    faqLocationA: '卡沃格雷科角位于塞浦路斯法马古斯塔省的阿依纳帕。',
    faqFreeQ: '参观卡沃格雷科角是免费的吗？',
    faqFreeA: '是的，卡沃格雷科角是公共区域，全年免费向游客开放。',
    faqBestTimeQ: '什么时间最适合游览卡沃格雷科角的海蚀洞？',
    faqBestTimeA: '海蚀洞最适合在上午（10:00 前）或傍晚前往拍照，避开正午炎热。4–6 月和 9–11 月是徒步步道最舒适的时段。',
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
    title: 'Cape Greco Kıbrıs: Nihai Ziyaretçi Rehberi & Görülecek Yerler',
    description: 'Kıbrıs\'taki Cape Greco (Cavo Greco) Milli Parkı ziyaretinizi planlayın. Ünlü Deniz Mağaraları, Kamara Tou Koraka köprüsü, yürüyüş parkurları, otobüs güzergahları ve gün batımı noktalarını keşfedin. Ücretsiz giriş!',
    ogTitle: 'Cape Greco Kıbrıs: Nihai Ziyaretçi Rehberi & Görülecek Yerler',
    ogDescription: 'Kıbrıs\'taki Cape Greco Milli Parkı\'nı keşfedin – Deniz Mağaraları, Aşıklar Köprüsü, yürüyüş parkurları ve gün batımı noktaları. Ücretsiz giriş!',
    faqLocationQ: 'Cape Cavo Greco nerede bulunur?',
    faqLocationA: 'Cape Cavo Greco, Ayia Napa, Gazimağusa, Kıbrıs\'ta bulunur.',
    faqFreeQ: 'Cape Cavo Greco\'yu ziyaret etmek ücretsiz mi?',
    faqFreeA: 'Evet, Cape Cavo Greco halka açık bir alandır ve yıl boyu ücretsizdir.',
    faqBestTimeQ: 'Cape Greco Deniz Mağaraları\'nı ziyaret etmek için en iyi zaman nedir?',
    faqBestTimeA: 'Deniz mağaraları, öğle sıcağından kaçınarak fotoğraf çekimi için sabah (10:00\'dan önce) veya öğleden sonra geç saatlerde en iyi ziyaret edilir. Nisan–Haziran ve Eylül–Kasım, yürüyüş parkurları için en rahat koşulları sunar.',
    imageAlt: 'Cape Cavo Greco - Ayia Napa, Kıbrıs ana görünüm',
  },
  de: {
    ogLocale: 'de_DE',
    htmlLang: 'de',
    fullName: 'Cape Cavo Greco',
    shortName: 'Cape Cavo Greco',
    cityName: 'Agia Napa',
    stateProvince: 'Famagusta',
    countryName: 'Zypern',
    nearby1: 'Agia-Napa-Kloster',
    nearby2: 'Feigenbaum-Bucht (Fig Tree Bay), Protaras',
    title: 'Cape Greco Zypern: Der ultimative Besucherführer & Sehenswürdigkeiten',
    description: 'Planen Sie Ihren Besuch im Nationalpark Cape Greco (Cavo Greco) auf Zypern. Entdecken Sie die berühmten Meeresgrotten, die Kamara-Tou-Koraka-Brücke, Wanderwege, Busverbindungen & Sonnenuntergangsplätze. Freier Eintritt!',
    ogTitle: 'Cape Greco Zypern: Der ultimative Besucherführer & Sehenswürdigkeiten',
    ogDescription: 'Planen Sie Ihren Besuch im Nationalpark Cape Greco auf Zypern – Meeresgrotten, Brücke der Liebenden, Wanderwege & Sonnenuntergangsplätze. Freier Eintritt.',
    faqLocationQ: 'Wo liegt Cape Cavo Greco?',
    faqLocationA: 'Cape Cavo Greco liegt in Agia Napa, Famagusta, Zypern.',
    faqFreeQ: 'Ist der Besuch von Cape Cavo Greco kostenlos?',
    faqFreeA: 'Ja, Cape Cavo Greco ist ein öffentlicher Ort und das ganze Jahr über kostenlos zugänglich.',
    faqBestTimeQ: 'Wann ist die beste Zeit für einen Besuch der Meeresgrotten am Cape Greco?',
    faqBestTimeA: 'Die Meeresgrotten lassen sich am besten morgens (vor 10:00 Uhr) oder am späten Nachmittag zum Fotografieren besuchen, um der Mittagshitze auszuweichen. April–Juni und September–November bieten die angenehmsten Bedingungen für die Wanderwege.',
    imageAlt: 'Cape Cavo Greco – Hauptansicht in Agia Napa, Zypern',
  },
  pl: {
    ogLocale: 'pl_PL',
    htmlLang: 'pl-PL',
    fullName: 'Cape Cavo Greco',
    shortName: 'Cape Cavo Greco',
    cityName: 'Ayia Napa',
    stateProvince: 'Famagusta',
    countryName: 'Cypr',
    nearby1: 'Klasztor Ayia Napa',
    nearby2: 'Zatoka Figowa, Protaras',
    title: 'Cape Greco na Cyprze: Ostateczny przewodnik i najlepsze atrakcje',
    description: 'Zaplanuj wizytę w parku narodowym Cape Greco (Cavo Greco) na Cyprze. Odkryj słynne Jaskinie Morskie, most Kamara Tou Koraka, szlaki piesze, linie autobusowe i punkty zachodu słońca. Bezpłatne wejście!',
    ogTitle: 'Cape Greco na Cyprze: Ostateczny przewodnik i najlepsze atrakcje',
    ogDescription: 'Zaplanuj wizytę w parku narodowym Cape Greco na Cyprze – Jaskinie Morskie, Most Zakochanych, szlaki piesze i punkty zachodu słońca. Bezpłatne wejście!',
    faqLocationQ: 'Gdzie znajduje się Cape Cavo Greco?',
    faqLocationA: 'Cape Cavo Greco znajduje się w Ayia Napa, w dystrykcie Famagusta, na Cyprze.',
    faqFreeQ: 'Czy wstęp do Cape Cavo Greco jest bezpłatny?',
    faqFreeA: 'Tak, Cape Cavo Greco jest terenem publicznym i można go zwiedzać bezpłatnie przez cały rok.',
    faqBestTimeQ: 'Kiedy najlepiej odwiedzić Jaskinie Morskie w Cape Greco?',
    faqBestTimeA: 'Jaskinie morskie najlepiej odwiedzać rano (przed 10:00) lub późnym popołudniem, by uniknąć południowego upału. Kwiecień–czerwiec i wrzesień–listopad to najprzyjemniejszy czas na szlaki piesze.',
    imageAlt: 'Cape Cavo Greco – główny widok w Ayia Napa, Cypr',
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
  const deUrl = `${BASE_URL}/de`;
  const plUrl = `${BASE_URL}/pl`;

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
        'de': deUrl,
        'pl': plUrl,
        'x-default': enUrl,
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
      {
        '@type': 'Question',
        name: data.faqBestTimeQ,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.faqBestTimeA,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                  if (prefs.analytics) {
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function() { window.dataLayer.push(arguments); };
                    var s = document.createElement('script');
                    s.async = true;
                    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP';
                    document.head.appendChild(s);
                    gtag('js', new Date());
                    gtag('config', 'G-HXM22WWPKP');
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
