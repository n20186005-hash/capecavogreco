import { useTranslations, useMessages } from 'next-intl';

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'subtitle'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] };

type Section = {
  id: string;
  title: string;
  content?: string;
  structuredContent?: Block[];
};

export default function InfoSection() {
  const t = useTranslations('knowledge');
  const messages = useMessages() as any;
  const sections = ((messages?.knowledge?.sections as Section[]) || []);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: 'var(--accent)', color: 'white' }}>
                    {index + 1}
                  </div>
                  <h3
                    className="font-display text-2xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {section.title}
                  </h3>
                </div>
                <div className="ml-14 space-y-4">
                  {section.structuredContent && section.structuredContent.length > 0 ? (
                    section.structuredContent.map((block, i) => renderBlock(block, i))
                  ) : section.content ? (
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {section.content}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case 'subtitle':
      return (
        <h4
          key={key}
          className="font-semibold text-lg mt-4 mb-2"
          style={{ color: 'var(--accent)' }}
        >
          {block.text}
        </h4>
      );
    case 'list':
      if (block.ordered) {
        return (
          <ol
            key={key}
            className="list-decimal pl-6 space-y-1.5 text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {block.items.map((it, i) => <li key={i}>{it}</li>)}
          </ol>
        );
      }
      return (
        <ul
          key={key}
          className="list-disc pl-6 space-y-1.5 text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      );
    case 'paragraph':
    default:
      return (
        <p
          key={key}
          className="text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {block.text}
        </p>
      );
  }
}
