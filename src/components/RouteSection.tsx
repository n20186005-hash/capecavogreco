'use client';

import { useTranslations, useMessages } from 'next-intl';

type Trail = {
  id: string;
  name: string;
  difficulty: string;
  distance: string;
  duration: string;
  elevation?: string;
  summary: string;
  steps: string[];
};

export default function RouteSection() {
  const t = useTranslations('route');
  const messages = useMessages() as any;
  const trails = ((messages?.route?.trails as Trail[]) || []);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('overview')}
        </p>

        <div className="space-y-12">
          {trails.map((trail, tIndex) => (
            <TrailCard key={trail.id} trailIndex={tIndex} trail={trail} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrailCard({ trailIndex, trail }: { trailIndex: number; trail: Trail }) {
  const colorMap = [
    { badgeBg: '#16a34a', text: '★☆☆' },
    { badgeBg: '#b91c1c', text: '★★★' },
  ];
  const style = colorMap[trailIndex % colorMap.length];

  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: 'var(--accent)', color: 'white' }}>
            {trailIndex + 1}
          </div>
          <h3 className="font-display text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            {trail.name}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge accentColor={style.badgeBg} label={trail.difficulty} stars={style.text} />
          <InfoBadge icon="📏" text={trail.distance} />
          <InfoBadge icon="⏱" text={trail.duration} />
          {trail.elevation && <InfoBadge icon="⛰" text={trail.elevation} />}
        </div>
      </div>

      <p className="mb-8 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {trail.summary}
      </p>

      {/* Timeline */}
      <div className="relative pl-4">
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5"
          style={{ background: 'var(--border-color)' }}
        />
        <div className="space-y-5">
          {trail.steps.map((desc, i) => (
            <RouteStep key={i} stepNumber={i + 1} description={desc} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Badge({ label, stars, accentColor }: { label: string; stars: string; accentColor: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: accentColor }}>
      <span>{label}</span>
      <span className="opacity-90">{stars}</span>
    </div>
  );
}

function InfoBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
    >
      <span aria-hidden>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function RouteStep({ stepNumber, description }: { stepNumber: number; description: string }) {
  return (
    <div className="relative flex gap-4 pl-4">
      <div
        className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 flex-shrink-0"
        style={{ background: 'var(--accent)', borderColor: 'var(--accent)', top: '0.25rem' }}
      />
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
        style={{ background: 'var(--accent)', color: 'white' }}
      >
        {stepNumber}
      </div>
      <div
        className="flex-1 rounded-xl p-4"
        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
