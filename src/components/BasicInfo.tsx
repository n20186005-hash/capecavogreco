'use client';

import { useTranslations, useMessages } from 'next-intl';

type InfoPair = { key: string; colSpan?: string };

const ORDERED_KEYS: InfoPair[] = [
  { key: 'officialName' },
  { key: 'type' },
  { key: 'googleRating' },
  { key: 'plusCode' },
  { key: 'area' },
  { key: 'elevation' },
  { key: 'geologicalAge' },
  { key: 'protectionCode' },
  { key: 'yearlyVisitors' },
  { key: 'accessibility' },
  { key: 'managingAuthority' },
  { key: 'address', colSpan: 'md:col-span-2 lg:col-span-3' },
];

export default function BasicInfo() {
  const t = useTranslations('basicInfo');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORDERED_KEYS.map((pair) => {
            const label = t.raw(pair.key) as string | undefined;
            const value = t.raw(`${pair.key}Value`) as string | undefined;
            if (!label || !value) return null;
            return (
              <div
                key={pair.key}
                className={`rounded-xl p-5 ${pair.colSpan || ''}`}
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{label}</p>
                <p className="font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
