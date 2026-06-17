// Blog posts data — used by both index and individual post pages.

export const posts = [
  {
    slug: 'growth-plateau-model-problem',
    category: 'Growth',
    readTime: '7 min read',
    date: '08 Jun 2026',
    title: 'Most growth plateaus are not channel problems. They are model problems.',
    excerpt:
      'Why throwing budget at the same paid mix rarely breaks a ceiling, and the operating shift that does.',
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    author: { name: 'Aarav Khanna', role: 'Founding Partner, Growth', avatar: 'https://i.pravatar.cc/120?img=12' },
    body: [
      "Almost every growth plateau we are called in to fix starts the same way: spend has climbed, revenue has not kept pace, and the team is searching for a new channel that will finally unlock the next phase.",
      'That conversation almost never ends with a new channel. It ends with a new model.',
      '## The diagnostic question',
      'Before any media plan, we ask the same question: do you know exactly what every rupee of spend is supposed to do, and how it ties back to contribution profit?',
      'In nine out of ten engagements, the answer is some version of "kind of". The acquisition team has a CAC target. The creative team has a calendar. The CRM team has flows. Each is locally optimising, but no one owns the model that connects them.',
      '## What a growth model actually is',
      'A growth model is not a spreadsheet. It is a shared belief about which inputs compound: which channel, at which CAC, fed by which creative concept, produces a customer with which retention curve, and what contribution that customer makes to the business over twelve months.',
      'When the model is clear, every meeting changes. Creative briefs become hypotheses. Media tests become experiments with priors. Lifecycle is no longer a downstream channel, it is part of the unit economics.',
      '## The shift that breaks ceilings',
      'Plateaus break when teams stop optimising channels in isolation and start operating against a single, defensible model. That is rarely a tool problem. It is an operating model problem. Fix that, and the channels you already have usually have more room than you thought.',
    ],
  },
  {
    slug: 'be-the-answer-ai-seo',
    category: 'AI SEO',
    readTime: '6 min read',
    date: '02 Jun 2026',
    title: 'Be the answer, not the result: a primer on AI SEO for ambitious brands.',
    excerpt:
      'Why the next decade of search rewards citation, not ranking, and what that means for your content engine.',
    cover:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
    author: { name: 'Rohan Nair', role: 'Head of AI SEO', avatar: 'https://i.pravatar.cc/120?img=33' },
    body: [
      'For a decade, SEO meant one thing: be the first blue link. That game has changed.',
      'When a buyer asks Perplexity, ChatGPT or Gemini about your category, the model does not return ten links. It returns an answer. The brands cited inside that answer are the ones the next generation of buyers will trust. The rest become a footnote.',
      '## What AI SEO actually optimises for',
      'Classic SEO optimises for retrieval and rank. AI SEO optimises for retrieval, citation and synthesis. That requires editorial-grade content the model is willing to quote, clean structured data so the model can parse you as an entity, and an authority signal it recognises across the open web.',
      '## Three things to start with',
      "**1. Audit your citations.** Run your top buyer prompts through Perplexity, ChatGPT and Gemini today. Who is cited? Is it you, your competitors, or third-party media?",
      "**2. Build for entities, not keywords.** Your brand needs to be a thing the model understands, not a string it crawls. Knowledge graph hygiene, schema and consistent positioning across the web matter more than ever.",
      "**3. Publish to be quoted.** One citable, original piece outperforms fifty rewrites of competitor content. LLMs reward authority, not output.",
      '## The window is open, briefly',
      'The interesting thing about answer-engine SEO is that most categories are still unclaimed. The brands that move now will own the default answer for years. The brands that wait will spend the next decade trying to dislodge whoever did.',
    ],
  },
  {
    slug: 'brand-most-expensive-to-get-wrong',
    category: 'Brand',
    readTime: '5 min read',
    date: '24 May 2026',
    title: 'Brand is the most expensive thing to get wrong.',
    excerpt:
      'Founders treat brand as decoration when it is actually the most leveraged decision in the business.',
    cover:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80',
    author: { name: 'Ishita Rao', role: 'Founding Partner, Brand', avatar: 'https://i.pravatar.cc/120?img=47' },
    body: [
      'Founders rarely think of brand as a unit-economics decision. They should.',
      'The brand sets your pricing power, your CAC, your conversion rate, your inbound, your hiring funnel and the price tag attached to the company if it ever sells. Almost no other decision compounds across that many surfaces.',
      '## Why brand work gets deferred',
      'Brand is treated as decoration because its impact is felt later than performance marketing. Paid ads have a 24-hour feedback loop. Brand has a 24-month one. Founders, understandably, optimise for the feedback they can see.',
      'But the cost of a weak brand is not 24 months away, it is hiding inside today\'s CAC, today\'s conversion rate, today\'s premium customers who refuse to engage.',
      '## What a strong brand actually does',
      'A strong brand lowers the cost of every other input. It makes paid creative work harder. It makes content cited. It makes the right candidates apply. It allows pricing to climb. And it survives ten product launches, not one.',
      '## Treat brand as infrastructure',
      'The most ambitious brands we work with treat brand as infrastructure: a system that sits underneath product, marketing and culture, not a finish you apply on top. Build the infrastructure once, and every dollar of marketing spent against it goes further, forever.',
    ],
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
