'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type FacilityDef = {
  key: string;
  icon: ReactNode;
};

export default function FacilitiesSection() {
  const t = useTranslations('facilities');

  const facilities: FacilityDef[] = [
    {
      key: 'restrooms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21V9a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12" />
          <path d="M17 21V9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12" />
          <circle cx="5.5" cy="5" r="1.5" />
          <circle cx="18.5" cy="5" r="1.5" />
        </svg>
      ),
    },
    {
      key: 'parking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      ),
    },
    {
      key: 'dining',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      ),
    },
    {
      key: 'accommodation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
          <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M2 18h20" />
          <path d="M10 14h4" />
        </svg>
      ),
    },
    {
      key: 'shopping',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
      ),
    },
    {
      key: 'fuel',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="22" x2="15" y2="22" />
          <line x1="4" y1="9" x2="14" y2="9" />
          <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
          <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
        </svg>
      ),
    },
    {
      key: 'medical',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8" />
          <path d="M9 11h6" />
        </svg>
      ),
    },
    {
      key: 'accessibility',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4" r="2" />
          <path d="M19.5 17a7 7 0 1 0-15 0" />
          <path d="M12 6v8" />
          <path d="M8 10h8" />
          <circle cx="12" cy="20" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((f) => (
            <FacilityCard
              key={f.key}
              icon={f.icon}
              title={t(`${f.key}.title`)}
              description={t(`${f.key}.description`)}
              subtitle={t(`${f.key}.subtitle`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({
  icon,
  title,
  description,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  subtitle?: string;
}) {
  return (
    <div
      className="rounded-xl p-5 sm:p-6 flex gap-4"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: 'var(--accent)', color: 'white' }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        {subtitle && (
          <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
