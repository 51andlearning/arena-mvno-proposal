export const executiveSummary = {
  eyebrow: "Executive Summary",
  title: "A content-led MVNO",
  titleHighlight: "unlike anything in Africa.",
  subtitle:
    "Arena Holdings controls news, music, broadcasting, events, and film — the only media group that can turn every content touchpoint into a telecoms monetisation layer.",
  stats: [
    { value: "$505M", label: "SA MVNO market value (2025)" },
    { value: "$750M", label: "Projected market value by 2030" },
    { value: "4.3M", label: "Active MVNO SIMs in SA (+51% YoY)" },
    { value: "15M+", label: "Monthly digital users across Arena" },
  ],
  touchpoints: {
    title: "Every Arena touchpoint becomes a subscriber funnel",
    body: "Monetise existing audiences across print, digital, broadcast, and live events — no new channels required.",
    items: [
      "Sunday Times",
      "TimesLIVE",
      "Sowetan",
      "Business Day",
      "Financial Mail",
      "Business Day TV",
      "Gallo Music",
      "Vuma FM",
      "Rise FM",
      "Arena Events",
      "Ignition",
      "The Home Channel",
    ],
  },
};

export const contentArsenal = {
  eyebrow: "Content Arsenal",
  title: "What no competitor can replicate",
  subtitle:
    "Arena Holdings controls an extraordinary breadth of content under one roof. This is the moat that makes the MVNO defensible.",
  divisions: [
    {
      title: "News & Publishing",
      body: "Sunday Times, Business Day, Financial Mail, Sowetan, Daily Dispatch, The Herald — South Africa's most trusted titles across multiple demographics.",
      stat: "~5.5M+ print readers",
    },
    {
      title: "Digital Platforms",
      body: "TimesLIVE, SowetanLIVE, BusinessLIVE, HeraldLIVE, DispatchLIVE — serving over 15 million monthly digital users.",
      stat: "15M+ monthly users",
    },
    {
      title: "Music — Gallo",
      body: "Africa's largest and oldest independent record label (est. 1926). 90+ year catalogue: Ladysmith Black Mambazo, Lucky Dube, Mango Groove, and hundreds more.",
      stat: "90+ year catalogue",
    },
    {
      title: "Broadcasting",
      body: "Business Day TV (DStv 412), Ignition (DStv 189), The Home Channel (DStv 176), Vuma FM, Rise FM — live content streamed direct to subscribers.",
      stat: "7.5M homes reached",
    },
    {
      title: "Film — Empire Entertainment",
      body: "Exclusive African distribution for Warner Bros, 20th Century Fox, MGM, Lionsgate — local and international content on screens across the continent.",
      stat: "6 major studios",
    },
    {
      title: "CRBT — Content Connect Africa",
      body: "Gallo holds a 45% stake in CCA, the CRBT pioneer in Africa. Over 300 million subscribers exposed to ringback tone content monthly.",
      stat: "300M+ monthly reach",
    },
  ],
};

export const productTiers = {
  eyebrow: "Mobile-Led Bundles",
  title: "Three mobile bundles. Free content on every tier.",
  subtitle:
    "Every Arena mobile bundle includes voice, data, SMS AND a free reverse-billed content suite — TimesLIVE, SowetanLIVE, HeraldLIVE, and DispatchLIVE zero-rated by default. Mid and Premium tiers add premium titles. No unlimited. 50%+ gross profit at every tier.",
  pricingNote:
    "Wholesale unit costs: R0.38/min voice, R19.67/GB data (R12.55/GB at 5GB+), R0.16/SMS, R6.50/mo SIM. Free content suite = TimesLIVE free tier + SowetanLIVE + HeraldLIVE + DispatchLIVE, reverse-billed on every bundle. Content license treated as R0 internal transfer. All bundles maintain ≥50% GP.",
  tiers: [
    {
      name: "Arena Connect",
      tier: "Entry — Mass Market",
      price: "R149/mo",
      description: "Entry-level mobile with free access to all Arena free news sites.",
      targetContent: "Free content suite (500 MB reverse-billed)",
      features: [
        "30 voice minutes",
        "1 GB mobile data",
        "25 SMS",
        "WhatsApp zero-rated",
        "FREE TimesLIVE + SowetanLIVE + HeraldLIVE + DispatchLIVE",
        "1 free Gallo CRBT on activation",
      ],
      margin: "60.3% GP",
      highlight: false,
    },
    {
      name: "Arena Plus",
      tier: "Mid — General / Family",
      price: "R249/mo",
      description: "Everyday mobile plus TimesLIVE Premium added on top of the free content suite.",
      targetContent: "Free suite + TimesLIVE Premium (1 GB reverse-billed)",
      features: [
        "60 voice minutes",
        "2 GB mobile data",
        "75 SMS",
        "FREE content suite (Times / Sowetan / Herald / Dispatch)",
        "PLUS TimesLIVE Premium + Sunday Times digital",
        "Gallo music streaming + monthly CRBT drops",
      ],
      margin: "53.7% GP",
      highlight: true,
    },
    {
      name: "Arena Black",
      tier: "Premium — Executive",
      price: "R499/mo",
      description: "Premium mobile plus the full Business Premium Plus content suite.",
      targetContent: "Free suite + Business Premium Plus (1.5 GB reverse-billed)",
      features: [
        "150 voice minutes",
        "7 GB mobile data (bulk rate)",
        "150 SMS",
        "FREE content suite (Times / Sowetan / Herald / Dispatch)",
        "PLUS Business Premium Plus: TimesLIVE Premium + Sunday Times + Financial Mail + BusinessLIVE",
        "Exclusive Gallo pre-release drops + Travel eSIM roaming",
      ],
      margin: "52.8% GP",
      highlight: false,
    },
  ],
};

export const contentBundles = {
  eyebrow: "Content-Led Bundles",
  title: "Content-first bundles priced at retail subscription.",
  subtitle:
    "For readers and viewers first — each bundle is anchored to the retail digital subscription price (TimesLIVE Premium R72, BusinessLIVE R116.10) and includes a lean mobile allowance plus the full free content suite. Zero-rated reading and streaming; you don't burn your data.",
  pricingNote:
    "Retail anchors: TimesLIVE Premium R72, BusinessLIVE R116.10, BusinessLIVE Premium Plus R332.10 (ref). SowetanLIVE / HeraldLIVE / DispatchLIVE are free ad-supported titles; bundle price covers mobile + reverse-billed data only. All 8 bundles maintain ≥50% gross profit.",
  bundles: [
    {
      name: "The Times",
      price: "R129/mo",
      vsRetail: "Anchored on R72 TimesLIVE Premium + 1 GB mobile",
      reverseBilled: "1 GB content zero-rated",
      mobile: "15 min · 1 GB · 15 SMS",
      description:
        "TimesLIVE Premium + Sunday Times digital, 1 GB mobile data, and the full free content suite.",
      margin: "51.9% GP",
      includes: [
        "TimesLIVE Premium (all sections)",
        "Sunday Times digital edition",
        "TshisaLIVE entertainment",
        "Plus free SowetanLIVE / HeraldLIVE / DispatchLIVE",
      ],
    },
    {
      name: "The Business",
      price: "R149/mo",
      vsRetail: "Anchored on R116.10 BusinessLIVE + 1 GB mobile",
      reverseBilled: "1 GB content zero-rated",
      mobile: "25 min · 1 GB · 25 SMS",
      description:
        "BusinessLIVE (Business Day Premium), 1 GB mobile data, plus the full free content suite.",
      margin: "54.2% GP",
      includes: [
        "BusinessLIVE full site",
        "Business Day daily edition",
        "Business Times premium",
        "Plus free TimesLIVE / SowetanLIVE / HeraldLIVE / DispatchLIVE",
      ],
    },
    {
      name: "The Sowetan",
      price: "R99/mo",
      vsRetail: "Mass-market mobile + free content",
      reverseBilled: "500 MB content zero-rated",
      mobile: "10 min · 1 GB · 10 SMS",
      description:
        "SowetanLIVE is free — this bundle provides 1 GB mobile data with zero-rated reading of all Arena free titles.",
      margin: "51.9% GP",
      includes: [
        "SowetanLIVE full site",
        "Sowetan e-edition",
        "S Mag lifestyle content",
        "Plus free TimesLIVE / HeraldLIVE / DispatchLIVE",
      ],
    },
    {
      name: "The Herald",
      price: "R79/mo",
      vsRetail: "Regional mobile + free content",
      reverseBilled: "250 MB content zero-rated",
      mobile: "5 min · 1 GB · 5 SMS",
      description:
        "HeraldLIVE + DispatchLIVE are free — minimal regional mobile with 1 GB data and zero-rated local news.",
      margin: "50.8% GP",
      includes: [
        "HeraldLIVE (Nelson Mandela Bay)",
        "DispatchLIVE (East London)",
        "Sunday Dispatch digital",
        "Plus free TimesLIVE / SowetanLIVE",
      ],
    },
    {
      name: "Business TV",
      price: "R349/mo",
      vsRetail: "Streaming-led premium bundle",
      reverseBilled: "5 GB streaming zero-rated",
      mobile: "60 min · 2 GB · 50 SMS",
      description:
        "Business Day TV live streaming (DStv 412) delivered to mobile, plus a mobile bundle sized for the executive viewer.",
      margin: "54.1% GP",
      includes: [
        "Business Day TV live stream",
        "Market opens/closes daily",
        "Key interviews on-demand",
        "Plus full free content suite",
      ],
    },
  ],
};

export const topUps = {
  eyebrow: "Top-Up Bundles",
  title: "Standalone top-ups for when you need more.",
  subtitle:
    "When customers exceed their bundle allowances, top-up packs keep them connected without moving tier. All top-ups priced at 50%+ gross profit.",
  data: [
    { size: "250 MB", price: "R12", margin: "52.9% GP" },
    { size: "500 MB", price: "R25", margin: "54.8% GP" },
    { size: "1 GB", price: "R49", margin: "53.8% GP" },
    { size: "2 GB", price: "R99", margin: "54.3% GP" },
    { size: "5 GB", price: "R149", margin: "51.6% GP" },
    { size: "10 GB", price: "R299", margin: "51.7% GP" },
  ],
  voice: [
    { size: "10 min", price: "R9", margin: "51.4% GP" },
    { size: "30 min", price: "R29", margin: "54.8% GP" },
    { size: "60 min", price: "R55", margin: "52.3% GP" },
    { size: "100 min", price: "R89", margin: "50.9% GP" },
  ],
  sms: [
    { size: "20 SMS", price: "R9", margin: "59.1% GP" },
    { size: "50 SMS", price: "R19", margin: "51.6% GP" },
    { size: "100 SMS", price: "R39", margin: "52.8% GP" },
    { size: "200 SMS", price: "R79", margin: "53.4% GP" },
  ],
};

export const galloMusic = {
  eyebrow: "Gallo Music & CRBT",
  title: "90 years of African music heritage — exclusive to your subscribers",
  subtitle:
    "No competitor can offer Gallo's catalogue. CRBTs remain one of the highest-engagement mobile features in Africa — and Gallo already owns the infrastructure.",
  cards: [
    {
      label: "The Catalogue",
      body: "Africa's largest independent catalogue spanning 90+ years: Ladysmith Black Mambazo, Lucky Dube, Miriam Makeba, Mahlathini & The Mahotella Queens, Mango Groove, Sipho Hotstix Mabuse, Stimela, and hundreds more. Heritage that cannot be replicated.",
    },
    {
      label: "The CRBT Advantage",
      body: "Gallo's 45% stake in Content Connect Africa — the company that pioneered CRBTs on the continent — means the licensing, infrastructure, and revenue model are already in place. Every subscriber gets a free Gallo CRBT on activation. New drops become marketing moments.",
    },
  ],
  features: [
    {
      title: "Exclusive Ringtones & CRBTs",
      body: "Gallo ringtones and CRBTs available only to Arena MVNO subscribers — first access to new releases and classic catalogue.",
    },
    {
      title: "Curated Streaming Channel",
      body: "A zero-rated Gallo-catalogue music stream — a South African heritage radio experience available only to subscribers.",
    },
    {
      title: "New Artist Exclusives",
      body: "Emerging Gallo artists release singles first on the Arena MVNO app before any other platform.",
    },
    {
      title: "B2B CRBT Product",
      body: "Brands advertising in Arena publications extend their identity into telecoms through branded CRBTs — a new revenue stream.",
    },
  ],
};

export const propertyMap = {
  eyebrow: "Property Strategy Map",
  title: "Every property. A telecom product.",
  subtitle:
    "Each Arena media property becomes a customer acquisition funnel and engagement engine. The MVNO is the monetisation layer.",
  segments: [
    {
      property: "Sunday Times + TimesLIVE",
      segment: "Mass Market",
      product: "Everyday Value MVNO",
      arpu: "R60 – R90",
      role: "Subscriber scale engine (60–70% of base)",
      features: [
        "Affordable data + voice + WhatsApp bundles",
        "Zero-rated TimesLIVE",
        "Family sharing plans",
        "Ad-funded sponsored data bundles",
      ],
    },
    {
      property: "Business Day + BusinessLIVE + Financial Mail",
      segment: "Premium Business",
      product: "Executive MVNO",
      arpu: "R250 – R500+",
      role: "Profit engine (disproportionate EBITDA)",
      features: [
        "Unlimited voice + high data",
        "BusinessLIVE subscription included",
        "Africa + global roaming bundles",
        "Cybersecurity + business tools",
      ],
    },
    {
      property: "Sowetan + SowetanLIVE",
      segment: "Youth / Urban",
      product: "Social & Lifestyle MVNO",
      arpu: "R40 – R80",
      role: "Engagement + brand relevance engine",
      features: [
        "Social bundles (TikTok, WhatsApp, Facebook)",
        "Gamified rewards: read articles = earn data",
        "Influencer-driven offers",
        "Daily/weekly micro-bundles",
      ],
    },
    {
      property: "The Herald + Daily Dispatch",
      segment: "Regional / Eastern Cape",
      product: "Community MVNO",
      arpu: "R50 – R100",
      role: "Defensive moat + regional monetisation",
      features: [
        "Zero-rated local news",
        "Location-based local business deals",
        "Community bundles (school, church, org)",
        "SME advertising marketplace",
      ],
    },
    {
      property: "Business Day TV + Ignition + Home Channel",
      segment: "Broadcast / Video",
      product: "Content-Driven Data Bundles",
      arpu: "ARPU expansion",
      role: "Data consumption driver",
      features: [
        "Zero-rated BDTV streaming",
        "Video streaming bundles",
        "Premium video content packages",
        "High data consumption = higher ARPU",
      ],
    },
  ],
};

export const revenueModel = {
  eyebrow: "Revenue Model",
  title: "Five revenue layers. One platform.",
  subtitle:
    "The MVNO creates a layered revenue stack that transforms Arena from a high-reach, low-ARPU media business into a full digital consumer platform.",
  layers: [
    {
      name: "Connectivity",
      description: "Data, voice, and messaging — the core subscriber revenue",
      icon: "signal",
    },
    {
      name: "Media Subscriptions",
      description: "BusinessLIVE, Financial Mail, premium content bundles",
      icon: "newspaper",
    },
    {
      name: "Advertising",
      description: "Sponsored data bundles, in-app advertising, branded CRBTs",
      icon: "megaphone",
    },
    {
      name: "Commerce",
      description: "Marketplace offers, loyalty rewards, Arena Events tickets",
      icon: "shopping",
    },
    {
      name: "VAS",
      description: "Travel eSIM, cybersecurity, insurance, cloud storage",
      icon: "shield",
    },
  ],
  flywheel: [
    "Content drives engagement",
    "Engagement earns rewards (data/airtime)",
    "Rewards drive SIM usage",
    "Usage generates telecom revenue",
    "Data improves targeting",
  ],
  bottomLine: {
    title: "The strategic advantage",
    points: [
      "15M+ monthly digital users with weak monetisation — MVNO solves this immediately",
      "Direct billing relationships replace ad-driven revenue with recurring subscriber income",
      "Content exclusivity creates a moat no MNO or MVNO can replicate",
      "Segmented go-to-market across mass, premium, youth, and regional audiences",
    ],
  },
};

export const vasServices = {
  eyebrow: "Value-Added Services",
  title: "Beyond connectivity — stacked revenue opportunities",
  subtitle:
    "Layer VAS on top of the core MVNO to increase ARPU, reduce churn, and create new revenue streams unique to the Arena ecosystem.",
  items: [
    {
      icon: "✈️",
      title: "eSIM & Travel Roaming",
      body: "Branded travel eSIM for Arena subscribers heading abroad — earn on roaming without MNO dependency.",
      badges: ["New Revenue", "Differentiation"],
    },
    {
      icon: "🎁",
      title: "Loyalty & Cashback",
      body: "Loyalty points earned on spend, redeemable against Arena Events tickets, Gallo merchandise, and partner offers.",
      badges: ["Retention", "Stickiness"],
    },
    {
      icon: "🎵",
      title: "Gallo Music Streaming",
      body: "Zero-rated Gallo catalogue streaming — a curated African heritage music experience exclusive to subscribers.",
      badges: ["Differentiation", "Stickiness"],
    },
    {
      icon: "📰",
      title: "Premium News Bundles",
      body: "BusinessLIVE and Financial Mail digital subscriptions bundled at a discount for Arena Plus and Arena Black tiers.",
      badges: ["New Revenue", "Higher Margins"],
    },
    {
      icon: "🛡️",
      title: "Cybersecurity & Parental Protection",
      body: "Bitdefender mobile security, identity protection, and parental controls bundled with connectivity.",
      badges: ["New Revenue", "Stickiness"],
    },
    {
      icon: "🔐",
      title: "Cyber Insurance",
      body: "Micro-insurance products protecting subscribers against identity theft and online fraud.",
      badges: ["New Revenue", "Higher Margins"],
    },
    {
      icon: "📺",
      title: "Entertainment Bundles",
      body: "Business Day TV, Ignition, and The Home Channel streaming packages — zero-rated for premium subscribers.",
      badges: ["Retention", "Differentiation"],
    },
    {
      icon: "💼",
      title: "SME Tools",
      body: "Cloud storage, email security, and business productivity tools for Business Day segment subscribers.",
      badges: ["New Revenue", "Higher Margins"],
    },
  ],
};

export const dsgEcosystem = {
  eyebrow: "The DSG Difference",
  title: "A full ecosystem behind the MVNO",
  subtitle:
    "Arena doesn't build this alone. The DSG group provides end-to-end capabilities across telecoms enablement, customer experience, marketing, and digital resilience.",
  capabilities: [
    {
      name: "MVNE",
      description: "End-to-end MVNO enablement — SIM provisioning, network integration, billing, customer management, and VAS platform.",
      badges: ["Telecoms", "Core Platform"],
    },
    {
      name: "CXG",
      description: "Digital experience and contact centre support integrated into Arena's existing CX stack — onboarding, support, retention.",
      badges: ["Customer Experience"],
    },
    {
      name: "Broadbrand",
      description: "Customer value management, retention, upsell, churn defence, and data-driven marketing across the subscriber base.",
      badges: ["Marketing", "Retention"],
    },
    {
      name: "Digital Resilience",
      description: "Cybersecurity, identity protection, and digital safety products — bundled as VAS or sold standalone.",
      badges: ["Security", "VAS"],
    },
    {
      name: "eInsurer",
      description: "Micro-insurance and embedded insurance products distributed through the mobile platform.",
      badges: ["Insurance", "VAS"],
    },
    {
      name: "PersAIc",
      description: "AI-powered segmentation and personalisation — targeted offers, content recommendations, and engagement triggers.",
      badges: ["AI", "Personalisation"],
    },
  ],
  partners: [
    {
      name: "MTN",
      description: "Mobile network operator — host network for MVNO connectivity and infrastructure.",
    },
    {
      name: "NetEngage",
      description: "BSS/OSS platform — billing, provisioning, and subscriber management.",
    },
    {
      name: "Globetom",
      description: "API gateway and digital enablement — connecting VAS partners to the MVNO platform.",
    },
    {
      name: "Flolive",
      description: "Global eSIM and IoT connectivity — powering travel eSIM and roaming solutions.",
    },
    {
      name: "Lumine Group",
      description: "Vertical market software — telecoms-specific solutions and integrations.",
    },
    {
      name: "Pharos Avantgard",
      description: "Revenue assurance and fraud management — protecting subscriber revenue streams.",
    },
  ],
};

export const cta = {
  eyebrow: "Next Steps",
  title: "Ready to build Africa's first content-led MVNO?",
  subtitle:
    "Next steps: formalise content licensing, structure zero-rating with the MNO host, define product architecture, design the app experience, and build the go-to-market by audience segment.",
  primary: {
    label: "Request a working session",
    href: "mailto:edwardw@mvne.co.za",
  },
  secondary: {
    label: "Download the deck",
    href: "/downloads/Arena-MVNO-Deck.pdf",
  },
  workstreams: [
    "Content licensing agreement (Gallo/Arena ↔ MVNO entity)",
    "Zero-rating commercial arrangement with MNO host",
    "Tiered product architecture definition",
    "App and customer experience design",
    "Go-to-market by segment (mass via Sowetan, professional via Business Day, youth via Gallo)",
  ],
};

export const footer = {
  confidentiality:
    "This document is confidential. It may not be presented to another party without consent from MVNE. Disclosing, copying, distributing or taking any action in relation to the contents of this information is strictly prohibited.",
};
