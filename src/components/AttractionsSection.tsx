import { useTranslations, useMessages } from 'next-intl';

type Spot = {
  name: string;
  tag: string;
  description: string;
};

export default function AttractionsSection() {
  const t = useTranslations('attractions');
  const messages = useMessages() as any;
  const spots = (messages?.attractions?.spots || []) as Spot[];

  return (
    <section id="attractions" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spots.map((spot, i) => (
            <article
              key={i}
              className={`rounded-xl p-6 sm:p-8 border ${
                i === spots.length - 1 && spots.length % 2 !== 0 ? 'md:col-span-2' : ''
              }`}
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {i + 1}
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider"
                  style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                >
                  {spot.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {spot.name}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {spot.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
