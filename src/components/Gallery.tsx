'use client';

import { useTranslations, useMessages, useLocale } from 'next-intl';
import { useState, useCallback } from 'react';

const basePhotos = [
  { src: '/gallery/cape-cavo-greco (1).jpg' },
  { src: '/gallery/cape-cavo-greco (2).jpg' },
  { src: '/gallery/cape-cavo-greco (3).jpg' },
  { src: '/gallery/cape-cavo-greco (4).jpg' },
  { src: '/gallery/cape-cavo-greco (5).jpg' },
  { src: '/gallery/cape-cavo-greco (6).jpg' },
  { src: '/gallery/cape-cavo-greco (7).jpg' },
  { src: '/gallery/cape-cavo-greco (8).jpg' },
  { src: '/gallery/cape-cavo-greco (9).jpg' },
  { src: '/gallery/cape-cavo-greco (10).jpg' },
  { src: '/gallery/cape-cavo-greco (11).jpg' },
  { src: '/gallery/cape-cavo-greco (12).jpg' },
  { src: '/gallery/cape-cavo-greco (13).jpg' },
  { src: '/gallery/cape-cavo-greco (14).jpg' },
  { src: '/gallery/cape-cavo-greco (15).jpg' },
  { src: '/gallery/cape-cavo-greco (16).jpg' },
  { src: '/gallery/cape-cavo-greco (17).jpg' },
  { src: '/gallery/cape-cavo-greco (18).jpg' },
];

const defaultAltMap: Record<string, string[]> = {
  el: [
    'Θέα θαλάσσιων σπηλαίων στο Ακρωτήριο Κάβο Γκρέκο, Αγία Νάπα',
    'Μακρινή θέα του ακρωτηρίου Κάβο Γκρέκο',
    'Μονοπάτι φύσης στο Εθνικό Δασικό Πάρκο Κάβο Γκρέκο',
    'Βραχώδεις σχηματισμοί στις καταρράκτες Κάβο Γκρέκο',
    'Κρυστάλλινα νερά κοντά στο Ακρωτήριο Κάβο Γκρέκο',
    'Θέα ηλιοβασιλέματος από την άκρη του βράχου Κάβο Γκρέκο',
    'Φυσικοί σχηματισμοί ασβεστόλιθου στο Κάβο Γκρέκο',
    'Μεσογειακή ακτογραμμή στο Ακρωτήριο Κάβο Γκρέκο',
    'Πανοραμική θέα θάλασσας από σημείο θέας Κάβο Γκρέκο',
    'Περιοχή φυσικού καταφυγίου γύρω από το Κάβο Γκρέκο',
    '360° πανοραμική θέα του Ακρωτηρίου Κάβο Γκρέκο',
    'Ανοιξιάτικο τοπίο στο Κάβο Γκρέκο, Κύπρος',
    'Φυσικός κόλπος κοντά στο Κάβο Γκρέκο για κολύμπι',
    'Μεσογειακή βλάστηση στο Ακρωτήριο Κάβο Γκρέκο',
    'Πανόραμα ηλιοβασιλέματος στο Κάβο Γκρέκο',
    'Πεζοπορικές διαδρομές κοντά στην είσοδο Κάβο Γκρέκο',
    'Θέα θάλασσας και ουρανού από το Ακρωτήριο Κάβο Γκρέκο',
    'Εκπληκτική θέα βράχων στο Κάβο Γκρέκο',
  ],
  en: [
    'Sea caves view at Cape Cavo Greco, Ayia Napa',
    'Distant view of Cape Cavo Greco peninsula',
    'Nature trail at Cape Cavo Greco National Forest Park',
    'Rock formations at Cape Cavo Greco cliffs',
    'Crystal clear water near Cape Cavo Greco',
    'Sunset view from Cape Cavo Greco cliff edge',
    'Natural limestone formations at Cape Cavo Greco',
    'Mediterranean coastline at Cape Cavo Greco',
    'Panoramic sea view from Cape Cavo Greco viewpoint',
    'Nature reserve area around Cape Cavo Greco',
    '360° panoramic view of Cape Cavo Greco',
    'Spring landscape at Cape Cavo Greco, Cyprus',
    'Natural cove near Cape Cavo Greco for swimming',
    'Mediterranean vegetation at Cape Cavo Greco',
    'Sunset panorama at Cape Cavo Greco',
    'Hiking trails near Cape Cavo Greco entrance',
    'Sea and sky view from Cape Cavo Greco',
    'Dramatic cliff scenery at Cape Cavo Greco',
  ],
  zh: [
    '卡沃格雷科角海蚀洞景观, 阿依纳帕',
    '远眺卡沃格雷科角半岛',
    '卡沃格雷科角国家森林公园自然步道',
    '卡沃格雷科角悬崖岩石构造',
    '卡沃格雷科角附近清澈海水',
    '卡沃格雷科角悬崖边日落景色',
    '卡沃格雷科角天然石灰岩构造',
    '卡沃格雷科角地中海海岸线',
    '卡沃格雷科角观景点全景海景',
    '卡沃格雷科角周边自然保护区',
    '卡沃格雷科角360度全景',
    '塞浦路斯卡沃格雷科角春季景色',
    '卡沃格雷科角附近天然游泳海湾',
    '卡沃格雷科角地中海植被',
    '卡沃格雷科角日落全景图',
    '卡沃格雷科角入口附近徒步路线',
    '卡沃格雷科角海天一色景观',
    '卡沃格雷科角壮观悬崖风光',
  ],
  tr: [
    'Cape Cavo Greco deniz mağaraları görünümü, Ayia Napa',
    'Cape Cavo Greco yarımadasının uzaktan görünümü',
    'Cape Cavo Greco Ulusal Orman Parkı doğa yürüyüş yolu',
    'Cape Cavo Greco uçurum kayalık oluşumları',
    'Cape Cavo Greco yakınında berrak deniz suyu',
    'Cape Cavo Greco kayalık kenarından gün batımı görünümü',
    'Cape Cavo Greco doğal kireçtaşı oluşumları',
    'Cape Cavo Greco Akdeniz kıyı şeridi',
    'Cape Cavo Greco seyir noktasından panoramik deniz görünümü',
    'Cape Cavo Greco çevresi doğa rezerv alanı',
    'Cape Cavo Greco 360° panoramik görünüm',
    'Kıbrıs Cape Cavo Greco ilkbahar manzarası',
    'Cape Cavo Greco yakınında doğal yüzme koyu',
    'Cape Cavo Greco Akdeniz bitki örtüsü',
    'Cape Cavo Greco gün batımı panoraması',
    'Cape Cavo Greco giriş yakınında yürüyüş parkurları',
    'Cape Cavo Greco\'da deniz ve gökyüzü görünümü',
    'Cape Cavo Greco\'da etkileyici uçurum manzarası',
  ],
};

export default function Gallery() {
  const t = useTranslations('gallery');
  const messages = useMessages() as any;
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const captions = (messages?.gallery?.captions || []) as string[];
  const defaultAlts = defaultAltMap[locale] || defaultAltMap.en;

  const photos = basePhotos.map((photo, i) => ({
    ...photo,
    alt: captions[i] || defaultAlts[i] || `Cape Cavo Greco Photo ${i + 1}`,
  }));

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const mapsLink = messages?.hero?.mapsLink || 'https://maps.app.goo.gl/FigeLZdG7kd1iPYcA';

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {(showAll ? photos : photos.slice(0, 8)).map((photo, i) => (
                <div
                  key={i}
                  className={`gallery-item relative group cursor-pointer ${i === 0 && !showAll ? 'col-span-2 row-span-2' : ''}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    openLightbox();
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : undefined}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {showAll && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            <div className="flex justify-center mt-6 gap-4 items-center">
              {!showAll && photos.length > 8 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm hover:underline font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('showAll') || `View All ${photos.length} Photos`}
                </button>
              )}
              {showAll && (
                <button
                  onClick={() => setShowAll(false)}
                  className="text-sm hover:underline font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('showLess') || 'Show Less'}
                </button>
              )}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
