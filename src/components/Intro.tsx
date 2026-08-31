import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const hasEquivalence = messages?.intro?.equivalence;
  const hasBreadcrumb = messages?.intro?.breadcrumb;
  const hasNearbyCluster = messages?.intro?.nearbyCluster;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        {hasEquivalence && (
          <p
            className="text-lg font-semibold leading-relaxed mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('equivalence')}
          </p>
        )}

        {hasBreadcrumb && (
          <nav
            aria-label={t('breadcrumb.label')}
            className="mb-8 p-4 sm:p-5 rounded-xl border-l-4"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--accent)' }}
          >
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
              {t('breadcrumb.label')}
            </p>
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li
                className="font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {t('breadcrumb.level1')}
              </li>
              <li style={{ color: 'var(--text-muted)' }}>→</li>
              <li style={{ color: 'var(--text-secondary)' }}>{t('breadcrumb.level2')}</li>
              <li style={{ color: 'var(--text-muted)' }}>→</li>
              <li style={{ color: 'var(--text-secondary)' }}>{t('breadcrumb.level3')}</li>
              <li style={{ color: 'var(--text-muted)' }}>→</li>
              <li style={{ color: 'var(--text-secondary)' }}>{t('breadcrumb.level4')}</li>
            </ol>
          </nav>
        )}

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        {hasNearbyCluster && (
          <div
            className="mb-12 p-6 rounded-xl border"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('nearbyCluster')}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
