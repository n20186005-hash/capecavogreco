import { useTranslations, useMessages } from 'next-intl';

export default function NearbySection() {
  const t = useTranslations('nearby');
  const messages = useMessages() as any;
  const items = (messages?.nearby?.items || []) as Array<{ name: string; distance: string; description: string }>;
  const hasIntro = messages?.nearby?.intro;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 mx-auto" style={{ background: 'var(--accent)' }} />

        {hasIntro && (
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('intro')}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                className="font-display text-2xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.name}
              </h3>
              <div 
                className="inline-block px-3 py-1 text-sm rounded-full mb-4 self-start"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {item.distance}
              </div>
              <p
                className="text-base leading-relaxed flex-grow"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
