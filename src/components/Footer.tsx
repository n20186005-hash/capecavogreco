import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  const officialLinks = t.raw('officialLinks') || {};

  return (
    <footer
      className="py-12 px-4 sm:px-6"
      style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
          <div className="max-w-md">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {t('brandName')}
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {t('brandSubtitle')}
              </p>
            </div>
            <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('officialResourcesTitle')}
            </h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.moa.gov.cy/moa/fd/fd.nsf/index_gr/index_gr?opendocument" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {officialLinks.moa || 'Ministry of Agriculture, Rural Development and Environment - Department of Forests'}
              </a>
              <a href="https://www.visitcyprus.com/discover-cyprus/nature/excursions/cape-gkreko-national-forest-park/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {officialLinks.visitcyprus || 'Deputy Ministry of Tourism, Cyprus'}
              </a>
              <a href="https://visitfamagusta.com.cy/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {officialLinks.visitfamagusta || 'Famagusta Region Official Tourism'}
              </a>
              <a href="https://www.agianapa.org.cy/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {officialLinks.agianapa || 'Ayia Napa Municipality'}
              </a>
              <a href="https://natura2000.eea.europa.eu/?views=Sites_View" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {officialLinks.natura2000 || 'Natura 2000 Database'}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm mt-4 sm:mt-0">
            <a href={`${prefix}/privacy-policy`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('privacy')}
            </a>
            <a href={`${prefix}/terms-of-service`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('terms')}
            </a>
            <a href={`${prefix}/cookie-settings`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('cookies')}
            </a>
          </div>
        </div>

        <div
          className="pt-6 text-center text-sm space-y-4"
          style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
        >
          <p>{t('rights')}</p>
          <p className="text-xs max-w-3xl mx-auto leading-relaxed">{t('disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
