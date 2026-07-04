export type PricingTier = {
  name: string;
  price: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  cover: string;
  content: string[];
  pricingTiers?: PricingTier[];
};

const blogs: BlogPost[] = [
  {
    slug: "how-much-does-a-website-or-app-cost",
    title: "How Much Does a Website or App Actually Cost? My Honest Pricing Guide",
    excerpt:
      "The question every client asks first. Here's how I actually think about pricing a project — plus a realistic breakdown of what different budgets get you.",
    date: "2026-07-01",
    readTime: "6 min read",
    tag: "Pricing",
    cover: "https://picsum.photos/seed/blog-pricing/1200/700",
    content: [
      "\"How much will this cost?\" is always the first real question, and it deserves a real answer — not a vague \"it depends\" with nothing behind it.",
      "The truth is it does depend, but on specific, knowable things: how many pages or screens, whether there's a backend and database, whether payments are involved, how custom the design needs to be, and how fast you need it. Once we talk through those, I can give you a real number, not a guess.",
      "As a rough guide: a clean, content-focused website (like a portfolio, restaurant, or small business site) sits at the lower end. An e-commerce store with payments, inventory and an admin dashboard costs more because there's real backend engineering involved. A custom mobile app or a fintech product with live data, authentication and real-time features sits at the top, because the stakes and the complexity are both higher.",
      "I always price in stages where possible — a clear scope, a fixed quote, and milestone payments — so there are no surprises for either of us. And I'm upfront if something you're asking for will genuinely cost more than you expect, rather than quietly cutting corners to hit a number.",
      "Below is a general starting-point guide. Every project gets a proper custom quote after we talk — this is just so you can walk in with realistic expectations.",
    ],
    pricingTiers: [
      {
        name: "Starter Website",
        price: "$250 – $600",
        bestFor: "Portfolios, small business & landing pages",
        features: [
          "Up to 5 pages",
          "Mobile-responsive design",
          "Contact form",
          "Basic SEO setup",
          "1-2 weeks turnaround",
        ],
      },
      {
        name: "Business / E-commerce",
        price: "$700 – $2,500",
        bestFor: "Online stores, booking sites, multi-page platforms",
        features: [
          "Everything in Starter",
          "Product catalogue & checkout",
          "Admin dashboard",
          "Payment gateway integration",
          "2-5 weeks turnaround",
        ],
        highlighted: true,
      },
      {
        name: "Custom App / Fintech",
        price: "$2,500+",
        bestFor: "Mobile apps, banking features, marketplaces",
        features: [
          "Everything in Business",
          "Custom backend & database design",
          "Authentication & real-time data",
          "Ongoing support available",
          "Timeline scoped per project",
        ],
      },
    ],
  },
  {
    slug: "why-i-build-real-products-not-just-templates",
    title: "Why I Build Real Products, Not Just Templates",
    excerpt:
      "Anyone can drag-and-drop a template together. Here's why I design and build every project — from a banking app to a car marketplace — like it's going into production on day one.",
    date: "2026-06-18",
    readTime: "5 min read",
    tag: "Process",
    cover: "https://picsum.photos/seed/blog-templates/1200/700",
    content: [
      "When a client comes to me, they're rarely just asking for 'a website.' They're asking for a system that has to actually work — a fintech app that moves real money, a marketplace that has to earn buyer trust, a store that has to survive a flash sale without falling over.",
      "That's the mindset I bring to every project, whether it's DebitHub (a digital banking app with live cards and transfers), BIB (a full e-commerce platform with affiliates and payments), or DriveWise (a marketplace where every listing has to be verified before a buyer ever sees it).",
      "Templates are a starting point, not a finish line. The real work is in the details: how a balance updates the instant a transfer completes, how a locked VIN number builds trust on a car listing, how an admin dashboard turns raw data into decisions a business owner can actually act on.",
      "If you're evaluating developers for your next project, don't just ask what they can build — ask how they think about the thing breaking, scaling, and being used by real people under real pressure. That's where the good ones separate from the rest.",
    ],
  },
  {
    slug: "designing-trust-into-a-fintech-app",
    title: "Designing Trust Into a Fintech App",
    excerpt:
      "Money apps live or die on trust. Some notes from building DebitHub — a full digital banking experience — on how small design decisions add up to a product people feel safe using.",
    date: "2026-06-05",
    readTime: "6 min read",
    tag: "Fintech & UX",
    cover: "https://picsum.photos/seed/blog-fintech/1200/700",
    content: [
      "Nobody trusts a banking app because of a nice gradient. They trust it because every number is exactly right, every action gives instant feedback, and nothing ever feels ambiguous.",
      "When I built DebitHub, the goal wasn't just 'make a debit card screen.' It was: make a user believe, at a glance, that their money is safe and their balance is accurate right now. That meant real-time balance updates, clear confirmation states after every transfer or bill payment, and a notification system that keeps users in the loop instead of leaving them guessing.",
      "On the business side, an admin panel isn't a nice-to-have for a fintech product — it's the control room. Being able to see every user, review activity, and respond to feedback quickly is what turns a good app into a trustworthy business.",
      "The lesson that carries into every project I build: good fintech UX is 90% clarity and 10% polish. Get the clarity right first.",
    ],
  },
  {
    slug: "what-makes-a-marketplace-actually-work",
    title: "What Makes a Marketplace Actually Work",
    excerpt:
      "Two-sided marketplaces are one of the hardest things to design well. Here's what I learned building DriveWise, a verified car marketplace, about earning trust on both sides of a transaction.",
    date: "2026-05-22",
    readTime: "7 min read",
    tag: "Marketplaces",
    cover: "https://picsum.photos/seed/blog-marketplace/1200/700",
    content: [
      "A marketplace has two customers, not one: the buyer and the seller. Design only for one side, and the whole thing collapses.",
      "With DriveWise, buyers needed to feel like every car had already been vetted before they saw it — hence a clear BUY / NEGOTIATE / AVOID verdict, a locked VIN that's only unlocked with real intent, and full photo documentation on every listing. Sellers and dealers, meanwhile, needed a showroom experience that made their verified inventory look premium, not like just another listing in an endless feed.",
      "The unlock mechanics (contact info hidden until unlocked, VIN locked until verification is requested) aren't just a gimmick — they change the incentive structure of the whole platform. They protect sellers from spam, and they signal to buyers that verification actually matters here.",
      "If you're building a marketplace, spend as much time designing for the supply side as you do for the demand side. A beautiful buyer experience on top of an empty or low-trust inventory is still a dead marketplace.",
    ],
  },
  {
    slug: "ecommerce-checkout-mistakes-costing-you-sales",
    title: "5 E-commerce Checkout Mistakes That Are Costing You Sales",
    excerpt:
      "After building multiple online stores — including a full affiliate-driven fashion platform — these are the checkout mistakes I see over and over, and how to fix them.",
    date: "2026-05-08",
    readTime: "4 min read",
    tag: "E-commerce",
    cover: "https://picsum.photos/seed/blog-checkout/1200/700",
    content: [
      "1. Making people create an account before they can buy anything. Let them check out as a guest — you can always ask them to save details afterward.",
      "2. Hiding delivery costs until the very last step. Show shipping estimates early, ideally on the product page.",
      "3. A payment flow with too many redirects. Every extra screen between 'Buy Now' and 'Payment Confirmed' is a chance for someone to abandon the cart. When I integrated Pesapal into BIB, the whole point was to keep that flow as tight as possible.",
      "4. No visible order tracking. People want to know where their order is without emailing support — that's why BIB has a Track Order button sitting right in the navbar.",
      "5. Treating mobile as an afterthought. In markets like Kenya and Tanzania, most shoppers are on their phones first. If your checkout isn't fast and thumb-friendly on mobile, you're losing sales before they even reach payment.",
    ],
  },
  {
    slug: "why-your-business-website-needs-more-than-a-homepage",
    title: "Why Your Business Website Needs More Than a Homepage",
    excerpt:
      "Whether it's a construction company, a lift installation business, or a travel agency, a strong homepage alone won't convert visitors. Here's what actually closes the deal.",
    date: "2026-04-20",
    readTime: "5 min read",
    tag: "Corporate Websites",
    cover: "https://picsum.photos/seed/blog-corporate/1200/700",
    content: [
      "A gorgeous homepage gets someone's attention for about eight seconds. What happens next is what actually wins the client.",
      "For service and industrial businesses — think a construction company or an elevator installation firm like EuroLift — the pages that actually close deals are the ones with proof: real project photos, clear service breakdowns, and a fast, frictionless way to request a quote.",
      "For travel and booking businesses, it's about removing uncertainty: clear pricing, honest itineraries, and a booking flow that doesn't make someone second-guess whether their money actually went through.",
      "My approach with every corporate site I build is the same: lead with credibility, make the next step obvious, and never make someone hunt for a phone number or a contact form. A beautiful design that doesn't convert is just expensive decoration.",
    ],
  },
  {
    slug: "how-i-approach-a-new-client-project",
    title: "How I Approach a New Client Project, Start to Finish",
    excerpt:
      "A behind-the-scenes look at my process — from the first conversation to the final deployed product — and why I think process is what separates a good freelancer from a great one.",
    date: "2026-04-02",
    readTime: "6 min read",
    tag: "Behind the Scenes",
    cover: "https://picsum.photos/seed/blog-process/1200/700",
    content: [
      "Every project starts with questions, not code: Who is this actually for? What does success look like in 3 months? What's the one thing this product absolutely cannot get wrong?",
      "From there I map out the core flows before touching design — for an app like DebitHub that's signup → verification → first transaction. For a marketplace like DriveWise, it's listing → verification → unlock → contact. Get the flow right, and the UI design gets dramatically easier.",
      "I build in stages the client can actually see — not a black box that appears three months later. Regular check-ins mean fewer surprises and a product that fits the real business, not just my assumptions about it.",
      "And finally: I don't consider a project done at 'it works.' I consider it done at 'it works, it looks professional, and the client can confidently show it to their own customers.' That last bar is the one that matters.",
    ],
  },
];

export default blogs;
