'use client';

import { useTranslations } from 'next-intl';

type Step = { time: string; title: string; text: string };

export default function AyiaNapaSection() {
  const t = useTranslations('dayTrip');
  const steps = t.raw('steps') as Step[];

  return (
    <section className="section-padding" id="ayia-napa">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        <p className="leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('intro')}
        </p>

        <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('transportTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('byBusTitle')}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('byBusText')}
            </p>
          </div>
          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('byCarTitle')}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('byCarText')}
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('itineraryTitle')}
        </h3>
        <ol className="space-y-4 mb-10">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="flex-shrink-0 w-16 text-sm font-semibold pt-0.5"
                style={{ color: 'var(--accent)' }}
              >
                {s.time}
              </span>
              <div>
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {s.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('photoTitle')}
        </h3>
        <p className="leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('photoText')}
        </p>

        <div
          className="rounded-xl p-5"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            {t('faqQ')}
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('faqA')}
          </p>
        </div>
      </div>
    </section>
  );
}
