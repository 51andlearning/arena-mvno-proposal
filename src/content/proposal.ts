export const executiveSummary = {
  eyebrow: "Executive Summary",
  title: "Two clear value lines.",
  titleHighlight: "Content. Telco. Sold separately, packaged together.",
  subtitle:
    "Arena's reworked CVP splits content from connectivity. Readers buy content subscriptions priced at retail anchors. Telco customers buy voice, data and SMS bundles priced for ≥50% gross profit. Combo offers stack the two — and every combo shows the customer exactly what they are paying for content vs. what they are paying for telco.",
  stats: [
    { value: "$505M", label: "SA MVNO market value (2025)" },
    { value: "$750M", label: "Projected market value by 2030" },
    { value: "4.3M", label: "Active MVNO SIMs in SA (+51% YoY)" },
    { value: "15M+", label: "Monthly digital users across Arena" },
  ],
  touchpoints: {
    title: "Six product lines. Three cadences. Total transparency.",
    body: "Content Bundles, Combo + Content, Combo Offers, Voice, Data and SMS — each available as a Daily, Weekly or Monthly subscription. On every Combo + Content offer, the content subscription line and the telco subscription line are itemised separately so customers always see the split.",
    items: [
      "Content Bundles",
      "Combo + Content",
      "Combo Offers",
      "Voice",
      "Data",
      "SMS",
      "Daily",
      "Weekly",
      "Monthly",
      "Itemised split",
      "≥50% telco GP",
      "Retail-anchored content",
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

// ---------------------------------------------------------------------------
// Reworked CVP — content bundles are split from telco bundles. Six product
// lines, each available as Daily / Weekly / Monthly. Combo + Content offers
// always itemise content vs. telco so the customer sees the split.
// ---------------------------------------------------------------------------

export type Cadence = "Daily" | "Weekly" | "Monthly";

export const cvpOverview = {
  eyebrow: "Reworked CVP",
  title: "Content separated from telco. Always.",
  subtitle:
    "Arena's portfolio is rebuilt as six product lines — Content Bundles, Combo + Content, Combo Offers, Voice, Data and SMS — each available Daily, Weekly and Monthly. Content is anchored on Arena's published retail price (BL Premium R129, Sunday Times Premium ~R99, HeraldLIVE/DispatchLIVE Basic R45, Plus R95). Telco is anchored on wholesale cost at ≥50% GP. Combo + Content offers stack the two and show the split on the line item.",
  principles: [
    {
      label: "Anchored on retail",
      body: "Monthly content prices match the public arena.africa / businessday.co.za / timeslive.co.za rate cards. Daily and Weekly cadences derive from the same anchor.",
    },
    {
      label: "Itemised split",
      body: "Every Combo + Content offer prints two lines: a content subscription line and a telco subscription line. The customer always sees what they pay for each.",
    },
    {
      label: "Standalone telco",
      body: "Voice, Data, SMS and Combo Offers are pure telco — priced for ≥50% gross profit on wholesale unit costs (R0.38/min, R19.67/GB, R0.16/SMS).",
    },
    {
      label: "Three cadences",
      body: "Every line offers Daily (24h), Weekly (7-day) and Monthly (30-day) variants. Customers buy at the rhythm they read or use.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 1. Content Bundles Only — digital-only subscriptions from Arena Holdings
// ---------------------------------------------------------------------------

export const contentBundlesOnly = {
  eyebrow: "1 · Content Bundles",
  title: "Content only. No telco. Read or watch — no SIM required.",
  subtitle:
    "Pure digital subscriptions to Arena's paid titles. Buy by the day, the week or the month. Sold through the MVNO app and arena.africa, billed via any SA payment method. Monthly anchors mirror the public rate card.",
  pricingNote:
    "Monthly anchors: BL Premium R129, Sunday Times Premium ~R99, HeraldLIVE/DispatchLIVE Basic R45 and Plus R95 (source: arena.africa / businessday.co.za / timeslive.co.za, May 2026). SowetanLIVE remains free ad-supported. Daily and Weekly cadences derive from the monthly anchor with a small convenience premium.",
  bundles: [
    {
      name: "Sunday Times Digital",
      anchor: "Anchored on R99/m Sunday Times Premium",
      audience: "Weekend general readers",
      includes: [
        "Sunday Times website (premium)",
        "Sunday Times Daily curated digital edition",
        "Sunday Times e-edition (digital replica)",
        "TimesLIVE app — iOS / Android / Huawei",
      ],
      plans: [
        { cadence: "Daily", duration: "24 hours", price: "R15", note: "Matches market Day Pass" },
        { cadence: "Weekly", duration: "7 days", price: "R45" },
        { cadence: "Monthly", duration: "30 days", price: "R99" },
      ],
    },
    {
      name: "BusinessLIVE Premium",
      anchor: "Anchored on R129/m BL Premium",
      audience: "Executives, investors, finance professionals",
      includes: [
        "Business Day & Financial Mail premium articles",
        "Business Day e-edition",
        "Business Times (Sunday Times business section)",
        "ProfileData tools, JSE SENS feed, 3-device ad-free",
      ],
      plans: [
        { cadence: "Daily", duration: "24 hours", price: "R25" },
        { cadence: "Weekly", duration: "7 days", price: "R69" },
        { cadence: "Monthly", duration: "30 days", price: "R129" },
      ],
    },
    {
      name: "HeraldLIVE / DispatchLIVE Basic",
      anchor: "Anchored on R45/m Basic tier",
      audience: "Eastern Cape digital readers — budget",
      includes: [
        "HeraldLIVE & DispatchLIVE premium articles",
        "Basic e-edition access",
        "Regional newsletters",
        "Hyperlocal community network (GO! Express, The Rep)",
      ],
      plans: [
        { cadence: "Daily", duration: "24 hours", price: "R8" },
        { cadence: "Weekly", duration: "7 days", price: "R20" },
        { cadence: "Monthly", duration: "30 days", price: "R45" },
      ],
    },
    {
      name: "HeraldLIVE / DispatchLIVE Plus",
      anchor: "Anchored on R95/m Plus tier",
      audience: "Loyal regional digital readers, EC professionals",
      includes: [
        "All Basic features",
        "Full daily e-edition (digital replica)",
        "Extended premium archive",
        "Sunday Dispatch digital",
      ],
      plans: [
        { cadence: "Daily", duration: "24 hours", price: "R15" },
        { cadence: "Weekly", duration: "7 days", price: "R39" },
        { cadence: "Monthly", duration: "30 days", price: "R95" },
      ],
    },
    {
      name: "Arena Total Digital",
      anchor: "Sunday Times + BL Premium + EC Plus, bundled",
      audience: "Power readers — one price, everything digital",
      includes: [
        "Everything in Sunday Times Digital",
        "Everything in BusinessLIVE Premium",
        "Everything in HeraldLIVE / DispatchLIVE Plus",
        "Wantedonline.co.za + TshisaLIVE",
      ],
      plans: [
        { cadence: "Daily", duration: "24 hours", price: "R39" },
        { cadence: "Weekly", duration: "7 days", price: "R109" },
        { cadence: "Monthly", duration: "30 days", price: "R249" },
      ],
    },
    {
      name: "SowetanLIVE",
      anchor: "Free — ad-supported",
      audience: "Mass-market urban readers",
      includes: [
        "SowetanLIVE website (free)",
        "S Mag lifestyle content",
        "Newsletter signup",
        "Funded by advertising — no subscription required",
      ],
      plans: [
        { cadence: "Daily", duration: "24 hours", price: "Free" },
        { cadence: "Weekly", duration: "7 days", price: "Free" },
        { cadence: "Monthly", duration: "30 days", price: "Free" },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 2. Combo + Content — telco + content, with the two lines shown separately
// ---------------------------------------------------------------------------

export const combosWithContent = {
  eyebrow: "2 · Combo + Content",
  title: "Telco + Content. Two line items. Total transparency.",
  subtitle:
    "When a customer wants both, the offer stacks a Combo telco bundle and a Content subscription into a single basket — but the receipt, the app, and the bill all show the split. Customers know exactly what they pay for connectivity and exactly what they pay for journalism.",
  pricingNote:
    "Pricing = retail content anchor + telco wholesale-plus-margin. Total is the sum of the two lines (no further discount). Customers can drop either line at any time without losing the other. All telco lines maintain ≥50% gross profit; all content lines flow at retail to Arena.",
  combos: [
    // --- DAILY ---
    {
      name: "Daily News + Talk",
      cadence: "Daily",
      duration: "24 hours",
      audience: "Commuter — quick news + light usage",
      content: {
        title: "Sunday Times Day Pass",
        price: "R15",
        details: [
          "24h Sunday Times premium",
          "Sunday Times Daily curated edition",
        ],
      },
      telco: {
        title: "Daily Lite Combo",
        price: "R9",
        details: [
          "5 voice minutes",
          "100 MB mobile data",
          "5 SMS",
        ],
        margin: "62.6% GP",
      },
      total: "R24",
    },
    {
      name: "Daily Business Briefing",
      cadence: "Daily",
      duration: "24 hours",
      audience: "Trader / executive on the move",
      content: {
        title: "BusinessLIVE Day Pass",
        price: "R25",
        details: [
          "24h Business Day + Financial Mail premium",
          "ProfileData & JSE SENS for the day",
        ],
      },
      telco: {
        title: "Daily Plus Combo",
        price: "R29",
        details: [
          "15 voice minutes",
          "500 MB mobile data",
          "15 SMS",
        ],
        margin: "55.8% GP",
      },
      total: "R54",
    },
    // --- WEEKLY ---
    {
      name: "Times Weekly Combo",
      cadence: "Weekly",
      duration: "7 days",
      audience: "Weekend reader + regular comms",
      content: {
        title: "Sunday Times Week Pass",
        price: "R45",
        details: [
          "7-day Sunday Times Premium",
          "Sunday Times Daily for the week",
        ],
      },
      telco: {
        title: "Weekly Lite Combo",
        price: "R65",
        details: [
          "30 voice minutes",
          "1 GB mobile data",
          "25 SMS",
        ],
        margin: "55.6% GP",
      },
      total: "R110",
    },
    {
      name: "Business Weekly Combo",
      cadence: "Weekly",
      duration: "7 days",
      audience: "Working professional / SME",
      content: {
        title: "BusinessLIVE Week Pass",
        price: "R69",
        details: [
          "7-day BL Premium (BD + FM)",
          "Markets & SENS feed for the week",
        ],
      },
      telco: {
        title: "Weekly Plus Combo",
        price: "R129",
        details: [
          "60 voice minutes",
          "2 GB mobile data",
          "50 SMS",
        ],
        margin: "53.0% GP",
      },
      total: "R198",
    },
    // --- MONTHLY ---
    {
      name: "The Times",
      cadence: "Monthly",
      duration: "30 days",
      audience: "Mass-market general news reader",
      content: {
        title: "Sunday Times Premium (Monthly)",
        price: "R99",
        details: [
          "Full Sunday Times website",
          "Sunday Times Daily curated edition",
          "Sunday Times e-edition replica",
        ],
      },
      telco: {
        title: "Monthly Connect Combo",
        price: "R149",
        details: [
          "60 voice minutes",
          "2 GB mobile data",
          "50 SMS",
        ],
        margin: "53.0% GP",
      },
      total: "R248",
    },
    {
      name: "The Business",
      cadence: "Monthly",
      duration: "30 days",
      audience: "Working business professional",
      content: {
        title: "BusinessLIVE Premium (Monthly)",
        price: "R129",
        details: [
          "Business Day + Financial Mail premium",
          "BD e-edition + Business Times",
          "ProfileData + JSE SENS, 3-device ad-free",
        ],
      },
      telco: {
        title: "Monthly Essentials Combo",
        price: "R249",
        details: [
          "100 voice minutes",
          "5 GB mobile data",
          "100 SMS",
        ],
        margin: "53.2% GP",
      },
      total: "R378",
    },
    {
      name: "The Regional",
      cadence: "Monthly",
      duration: "30 days",
      audience: "Eastern Cape — local news + everyday mobile",
      content: {
        title: "HeraldLIVE / DispatchLIVE Plus (Monthly)",
        price: "R95",
        details: [
          "HeraldLIVE + DispatchLIVE premium",
          "Full daily e-edition replica",
          "Sunday Dispatch digital",
        ],
      },
      telco: {
        title: "Monthly Connect Combo",
        price: "R149",
        details: [
          "60 voice minutes",
          "2 GB mobile data",
          "50 SMS",
        ],
        margin: "53.0% GP",
      },
      total: "R244",
    },
    {
      name: "The Executive",
      cadence: "Monthly",
      duration: "30 days",
      audience: "C-suite — full Arena digital + heavy mobile",
      content: {
        title: "BusinessLIVE Premium + Sunday Times Digital",
        price: "R228",
        details: [
          "BL Premium R129/m",
          "Sunday Times Premium R99/m",
          "Itemised on bill as two content lines",
        ],
      },
      telco: {
        title: "Monthly Power Combo",
        price: "R449",
        details: [
          "250 voice minutes",
          "10 GB mobile data (bulk rate)",
          "200 SMS",
        ],
        margin: "51.4% GP",
      },
      total: "R677",
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Combo Offers — telco only (Voice + Data + SMS bundled)
// ---------------------------------------------------------------------------

export const comboOffers = {
  eyebrow: "3 · Combo Offers",
  title: "Telco only. Voice, Data and SMS in one bundle.",
  subtitle:
    "For customers who want connectivity without a content subscription. Combo Offers bundle voice, data and SMS allowances into a single price across Daily, Weekly and Monthly cadences — all priced for ≥50% gross profit on wholesale unit costs.",
  pricingNote:
    "Wholesale unit costs: voice R0.38/min, data R19.67/GB (R12.55/GB at 5 GB+), SMS R0.16/SMS. SIM lifecycle R6.50/month. All combos maintain ≥50% gross profit before SIM and platform fees.",
  combos: [
    {
      cadence: "Daily",
      tiers: [
        {
          name: "Daily Lite",
          price: "R9",
          duration: "24 hours",
          allowance: { voice: "5 min", data: "100 MB", sms: "5 SMS" },
          description: "Quick top-up for a single day of essentials.",
          margin: "62.6% GP",
        },
        {
          name: "Daily Plus",
          price: "R29",
          duration: "24 hours",
          allowance: { voice: "15 min", data: "500 MB", sms: "15 SMS" },
          description: "A working day's worth of voice + data + SMS.",
          margin: "55.8% GP",
        },
      ],
    },
    {
      cadence: "Weekly",
      tiers: [
        {
          name: "Weekly Lite",
          price: "R65",
          duration: "7 days",
          allowance: { voice: "30 min", data: "1 GB", sms: "25 SMS" },
          description: "One week of moderate mobile use.",
          margin: "55.6% GP",
        },
        {
          name: "Weekly Plus",
          price: "R129",
          duration: "7 days",
          allowance: { voice: "60 min", data: "2 GB", sms: "50 SMS" },
          description: "Heavier weekly bundle for active users.",
          margin: "53.0% GP",
        },
      ],
    },
    {
      cadence: "Monthly",
      tiers: [
        {
          name: "Monthly Connect",
          price: "R149",
          duration: "30 days",
          allowance: { voice: "60 min", data: "2 GB", sms: "50 SMS" },
          description: "Entry monthly bundle — mass-market connectivity.",
          margin: "53.0% GP",
        },
        {
          name: "Monthly Essentials",
          price: "R249",
          duration: "30 days",
          allowance: { voice: "100 min", data: "5 GB", sms: "100 SMS" },
          description: "Everyday monthly bundle for working professionals.",
          margin: "53.2% GP",
        },
        {
          name: "Monthly Power",
          price: "R449",
          duration: "30 days",
          allowance: { voice: "250 min", data: "10 GB", sms: "200 SMS" },
          description: "Premium monthly bundle — bulk data rate, exec-grade.",
          margin: "51.4% GP",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Voice / 5. Data / 6. SMS — standalone single-service bundles
// ---------------------------------------------------------------------------

export const voiceBundles = {
  eyebrow: "4 · Voice",
  title: "Voice bundles. Pay-per-cadence minutes.",
  subtitle:
    "Voice-only allowance bundles. Buy by the day, week or month. Priced for ≥50% gross profit on R0.38/min wholesale.",
  tiers: [
    {
      cadence: "Daily",
      duration: "24 hours",
      options: [
        { size: "5 min", price: "R5", margin: "62.0% GP" },
        { size: "15 min", price: "R12", margin: "52.5% GP" },
      ],
    },
    {
      cadence: "Weekly",
      duration: "7 days",
      options: [
        { size: "30 min", price: "R29", margin: "60.7% GP" },
        { size: "60 min", price: "R55", margin: "58.5% GP" },
      ],
    },
    {
      cadence: "Monthly",
      duration: "30 days",
      options: [
        { size: "100 min", price: "R89", margin: "57.3% GP" },
        { size: "250 min", price: "R199", margin: "52.3% GP" },
        { size: "500 min", price: "R379", margin: "49.9% GP" },
      ],
    },
  ],
};

export const dataBundles = {
  eyebrow: "5 · Data",
  title: "Data bundles. Pay-per-cadence megabytes.",
  subtitle:
    "Data-only allowance bundles for any device or SIM. Sized for the cadence — daily snacking, weekly utility, or full-month commitment. Priced for ≥50% gross profit on R19.67/GB wholesale (R12.55/GB at 5 GB+ bulk).",
  tiers: [
    {
      cadence: "Daily",
      duration: "24 hours",
      options: [
        { size: "100 MB", price: "R5", margin: "60.6% GP" },
        { size: "500 MB", price: "R15", margin: "34.4% GP*", note: "*Boosted MB to drive sampling." },
        { size: "1 GB", price: "R29", margin: "32.4% GP*" },
      ],
    },
    {
      cadence: "Weekly",
      duration: "7 days",
      options: [
        { size: "1 GB", price: "R49", margin: "59.9% GP" },
        { size: "2 GB", price: "R89", margin: "55.8% GP" },
      ],
    },
    {
      cadence: "Monthly",
      duration: "30 days",
      options: [
        { size: "5 GB", price: "R149", margin: "57.9% GP" },
        { size: "10 GB", price: "R249", margin: "49.6% GP" },
        { size: "20 GB", price: "R449", margin: "44.1% GP" },
      ],
    },
  ],
  footnote:
    "Asterisked entry-tier daily prices intentionally trade a few margin points for sampling and conversion to weekly/monthly bundles. Weekly and Monthly options sustain ≥50% gross profit at standard wholesale rates.",
};

export const smsBundles = {
  eyebrow: "6 · SMS",
  title: "SMS bundles. Pay-per-cadence messages.",
  subtitle:
    "SMS-only allowance bundles. Priced for ≥50% gross profit on R0.16/SMS wholesale. Heavy users (alerts, OTP services, community comms) buy at scale.",
  tiers: [
    {
      cadence: "Daily",
      duration: "24 hours",
      options: [
        { size: "10 SMS", price: "R5", margin: "68.0% GP" },
        { size: "25 SMS", price: "R12", margin: "66.7% GP" },
      ],
    },
    {
      cadence: "Weekly",
      duration: "7 days",
      options: [
        { size: "50 SMS", price: "R19", margin: "57.9% GP" },
        { size: "100 SMS", price: "R35", margin: "54.3% GP" },
      ],
    },
    {
      cadence: "Monthly",
      duration: "30 days",
      options: [
        { size: "200 SMS", price: "R69", margin: "53.6% GP" },
        { size: "500 SMS", price: "R159", margin: "49.7% GP" },
        { size: "1000 SMS", price: "R299", margin: "46.5% GP" },
      ],
    },
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
  title: "Every property. Mapped to the new CVP.",
  subtitle:
    "Each Arena media property funnels into the right product line. Content lines drive readership monetisation; telco lines drive ARPU. Combo + Content stacks the two with full pricing transparency.",
  segments: [
    {
      property: "Sunday Times + TimesLIVE",
      segment: "Mass Market",
      product: "Sunday Times Digital · The Times Combo",
      arpu: "R15 day → R248/mo",
      role: "Scale engine — daily/weekly trial converts to monthly",
      features: [
        "Sunday Times Digital — Daily R15 · Weekly R45 · Monthly R99",
        "The Times Combo — R99 content + R149 telco = R248/mo",
        "Daily News + Talk Combo at R24 entry point",
        "Targets weekend readers, commuters, families",
      ],
    },
    {
      property: "Business Day + BusinessLIVE + Financial Mail",
      segment: "Premium Business",
      product: "BusinessLIVE Premium · The Business · The Executive",
      arpu: "R25 day → R677/mo",
      role: "Profit engine — disproportionate EBITDA",
      features: [
        "BusinessLIVE Premium — Daily R25 · Weekly R69 · Monthly R129",
        "The Business Combo — R129 content + R249 telco = R378/mo",
        "The Executive Combo — R228 content + R449 telco = R677/mo",
        "Itemised billing visible on every Combo line",
      ],
    },
    {
      property: "Sowetan + SowetanLIVE",
      segment: "Youth / Urban",
      product: "SowetanLIVE (free) · Combo Offers",
      arpu: "R9 day → R249/mo",
      role: "Engagement & brand relevance — free content funnels to telco",
      features: [
        "SowetanLIVE free, ad-supported (no subscription)",
        "Daily Lite Combo R9, Weekly Lite R65, Monthly Essentials R249",
        "Free content remains a top-of-funnel sampling layer",
        "Low-commitment, high-engagement offer",
      ],
    },
    {
      property: "The Herald + Daily Dispatch",
      segment: "Regional / Eastern Cape",
      product: "HeraldLIVE / DispatchLIVE Basic & Plus · The Regional",
      arpu: "R8 day → R244/mo",
      role: "Defensive regional moat + Eastern Cape monetisation",
      features: [
        "HeraldLIVE/DispatchLIVE Basic — Daily R8 · Monthly R45",
        "HeraldLIVE/DispatchLIVE Plus — Daily R15 · Monthly R95",
        "The Regional Combo — R95 content + R149 telco = R244/mo",
        "Hyperlocal network (GO! Express, The Rep) included",
      ],
    },
    {
      property: "Arena Total Digital (all premium titles)",
      segment: "Broadcast / Video",
      product: "Arena Total Digital · The Executive Combo",
      arpu: "R39 day → R677/mo",
      role: "Maximum ARPU — power readers + heavy mobile",
      features: [
        "Arena Total Digital — Daily R39 · Weekly R109 · Monthly R249",
        "Stacks Sunday Times + BusinessLIVE + EC Plus content",
        "The Executive Combo at R677/mo — top-of-stack",
        "Drives device-paired streaming and reading",
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

export const operatingModel = {
  eyebrow: "Operating Model",
  title: "A collaborative three-party model.",
  subtitle:
    "Arena focuses on brand, audience, and content. Digital Mobile builds and runs the MVNO. The MNO host provides the network. Each party does what they do best — no capex, no disruption to the existing Arena business.",
  roles: [
    {
      party: "Arena",
      scope: "Brand, content, audience",
      icon: "brand",
      responsibilities: [
        "Brand ownership and positioning",
        "Content licensing (news, music, TV)",
        "Marketing and audience activation",
        "Customer relationship at the brand level",
        "Loyalty integration with Arena Events",
      ],
    },
    {
      party: "Digital Mobile (DSG)",
      scope: "MVNO platform, operations, VAS",
      icon: "platform",
      responsibilities: [
        "MVNE platform (BSS/OSS/OCS)",
        "SIM lifecycle, billing, CRM, support",
        "VAS integration (eSIM, insurance, security)",
        "Regulatory compliance (RICA/POPIA/ICASA)",
        "Day-to-day MNO relationship management",
      ],
    },
    {
      party: "MNO Host",
      scope: "Network infrastructure",
      icon: "network",
      responsibilities: [
        "Radio access and core network",
        "Wholesale voice / data / SMS capacity",
        "National coverage and quality of service",
        "Roaming and interconnect agreements",
        "Regulatory relationship with ICASA",
      ],
    },
  ],
};

export const trackRecord = {
  eyebrow: "Track Record",
  title: "13 years MVNO development experience.",
  subtitle:
    "Digital Mobile / DSG has enabled MVNOs and managed services for some of South Africa's most recognisable brands. The platform, partnerships, and playbook are proven.",
  stats: [
    { value: "13+", label: "Years in MVNO enablement" },
    { value: "Pan African", label: "Services delivered across the continent" },
    { value: "25+", label: "Years DSG group heritage" },
  ],
  mvnoLaunches: [
    {
      name: "DStv Internet",
      type: "Full MVNO (36+ months live)",
      description: "MultiChoice-backed MVNO, launched and managed end-to-end on the Digital Mobile platform.",
    },
    {
      name: "AFGRI Connect",
      type: "Agri-sector MVNO",
      description: "Enterprise connectivity MVNO serving the agricultural community, with custom PWA enhancements.",
    },
    {
      name: "Digital Mobile",
      type: "DSG's own MVNO (MVNO Light)",
      description: "The reference platform Arena would deploy against — already live, already proven.",
    },
  ],
  credentials: [
    {
      title: "CEM Awards 2025",
      description: "Best CX Team in South Africa (CXG with Nando's) · Best Support Service Provider 2025",
    },
    {
      title: "MTN Partner of the Year",
      description: "Thrive Award 2016 — MTN Group Innovation Partner of the Year, first MVNO integration into EBU",
    },
    {
      title: "Level 2 BBBEE",
      description: "Contributor status, with proven Enterprise Development via Maharishi Institute partnership",
    },
    {
      title: "Industry Memberships",
      description: "IAB (Interactive Advertising Bureau), MMA (Mobile Marketing Association), MVNO Nation Africa",
    },
  ],
};

export const deliveryJourney = {
  eyebrow: "Delivery Journey",
  title: "The proven MVNO lifecycle — end to end.",
  subtitle:
    "Digital Mobile provides the full MVNO value chain under one roof: from initial opportunity assessment through commercial launch. Every stage has been delivered live.",
  stages: [
    {
      step: "01",
      title: "MVNO Opportunity",
      description: "Strategy, market sizing, customer value proposition design, and audience segmentation.",
    },
    {
      step: "02",
      title: "Commercial Viability",
      description: "Full financial modelling, ARPU and churn forecasting, commercial structure, and risk allocation.",
    },
    {
      step: "03",
      title: "Design & Scoping",
      description: "Technical architecture, product catalogue, customer journeys, integration design, and SLAs.",
    },
    {
      step: "04",
      title: "Build, SIT & UAT",
      description: "Platform configuration, API integration, system integration testing, and user acceptance testing.",
    },
    {
      step: "05",
      title: "Soft Launch",
      description: "Pilot rollout with controlled subscriber base, performance monitoring, and iteration.",
    },
    {
      step: "06",
      title: "Commercial Launch",
      description: "Full market launch across all Arena channels with 24/7 operations and continuous CVM optimisation.",
    },
  ],
  footprint: {
    title: "Pan-African delivery footprint",
    subtitle: "MVNE has delivered projects in 8 African territories, supporting Financial Services Providers, Broadcasters, ISPs, and Retailers.",
    stats: [
      { value: "8", label: "African territories delivered" },
      { value: "4", label: "Sectors served" },
      { value: "#1", label: "Listed group client in Mauritius" },
      { value: "100%", label: "MVNO launch success" },
    ],
    sectors: [
      {
        name: "Broadcasters",
        examples: "DStv Internet (MultiChoice), major broadcaster projects",
      },
      {
        name: "Financial Services",
        examples: "Multiple FSP projects across SA and the continent",
      },
      {
        name: "ISPs",
        examples: "Connectivity resellers and tier-2 ISPs",
      },
      {
        name: "Retailers & Agri",
        examples: "AFGRI Connect, retail-led MVNOs, loyalty ecosystems",
      },
    ],
  },
};

export const gtmEnablement = {
  eyebrow: "Go-to-Market Enablement",
  title: "A proven sales & marketing enablement program.",
  subtitle:
    "From brand kick-off through market launch and quarterly review. DSG's Broadbrand unit runs this program end-to-end — Arena keeps brand control, Digital Mobile ensures execution discipline.",
  phases: [
    {
      phase: "Kick-off",
      focus: "Background, KPIs & Resources",
      activities: [
        "Business objectives & market context download",
        "Agreement on KPIs and required resources",
        "Staffing and agency requirements",
        "Core audience definition and segmentation",
        "Geographic focus and trade visit",
      ],
    },
    {
      phase: "Strategy Development",
      focus: "Positioning, Narrative & Marketing Strategy",
      activities: [
        "Brand positioning, proposition, and purpose",
        "Consumer-facing comms idea",
        "Defined purchase pathway and channel selection",
        "Marketing objectives across the 4 Ps",
        "Tasks by audience across pathway and time",
      ],
    },
    {
      phase: "Activation Development",
      focus: "Brand, Trade, Performance & CRM",
      activities: [
        "Brand activation plan and creative delivery",
        "Trade marketing and retailer comms strategy",
        "SEO/SEM, affiliate, and display setup",
        "CRM tech stack, resourcing, and governance",
        "Agency selection and decisioning framework",
      ],
    },
    {
      phase: "Execute & Learn",
      focus: "Measurement & Iteration",
      activities: [
        "Holistic measurement framework",
        "Recommendation on required data streams",
        "Final plan development and executional briefs",
        "Output feedback to the data model",
        "Quarterly brand reviews and iteration",
      ],
    },
  ],
  supportingServices: [
    {
      icon: "📦",
      title: "Supply Chain & 4PL (Ufreight)",
      description: "Since 1998, DSG has run 4PL supply chain for major SA brands. Device sourcing, bonded warehousing, last-mile delivery, and full RICA closed-loop compliance.",
    },
    {
      icon: "🔐",
      title: "Identity Management (Optional.me)",
      description: "Partnership with TransUnion and Contactable (the RICA platform MTN uses). Rapid digital onboarding, consent management, and POPIA-compliant permission marketing.",
    },
    {
      icon: "🛒",
      title: "Omni-Channel Commerce (DigitalMall)",
      description: "Full Omni-Channel commerce solution integrated with the MVNO platform — device financing, airtime top-up, VAS upsell, and loyalty redemption in one storefront.",
    },
    {
      icon: "🤖",
      title: "AI Marketing (PersAIc + Xanite)",
      description: "AI-powered persona targeting, dynamic creative optimisation, and full CVM engine — campaigns, journeys, segmentation, and personalisation at scale.",
    },
  ],
};

export const implementationRoadmap = {
  eyebrow: "Implementation Roadmap",
  title: "From signature to service launch in 8 weeks.",
  subtitle:
    "A proven, phased delivery plan — one week per stage. Agile sprint governance, weekly stakeholder reviews, and a dedicated cross-functional team from Digital Mobile's MVNE unit.",
  phases: [
    {
      phase: "Phase 1",
      duration: "Week 1",
      title: "Project Kick-off",
      activities: [
        "Contract finalisation and governance setup",
        "Stakeholder alignment across Arena + Digital Mobile + MNO",
        "Project team mobilisation",
      ],
    },
    {
      phase: "Phase 2",
      duration: "Week 2",
      title: "Requirements & Design",
      activities: [
        "Business requirements specification",
        "Solution architecture and integration design",
        "Customer journey mapping",
        "DARE model development (Data, App, Revenue, Experience)",
      ],
    },
    {
      phase: "Phase 3",
      duration: "Week 3",
      title: "Platform Configuration",
      activities: [
        "MVNE platform build on Digital Mobile infrastructure",
        "Product catalogue setup (Arena Connect / Plus / Black + content bundles)",
        "API integration with Arena content systems",
        "MNO service configuration and SIM ordering",
      ],
    },
    {
      phase: "Phase 4",
      duration: "Week 4",
      title: "Testing & UAT",
      activities: [
        "System integration testing (SIT)",
        "User acceptance testing (UAT) with Arena teams",
        "Regulatory compliance validation (RICA, POPIA, ICASA)",
        "Performance and load testing",
      ],
    },
    {
      phase: "Phase 5",
      duration: "Week 5",
      title: "Training & Onboarding",
      activities: [
        "Arena marketing, CX, and ops team training",
        "Documentation handover (runbooks, API docs, user guides)",
        "Agent and distribution channel enablement",
      ],
    },
    {
      phase: "Phase 6",
      duration: "Week 6",
      title: "Go-Live Preparation",
      activities: [
        "Final data migration",
        "Operational readiness review",
        "Go-live rehearsals and war-room setup",
        "Soft launch with pilot subscribers",
      ],
    },
    {
      phase: "Phase 7",
      duration: "Week 7",
      title: "Service Launch",
      activities: [
        "Commercial launch across Arena channels",
        "Full-scale subscriber acquisition kicked off",
        "24/7 operations and support by Digital Mobile",
        "Real-time performance monitoring",
      ],
    },
    {
      phase: "Phase 8",
      duration: "Week 8",
      title: "Operate & Optimise",
      activities: [
        "Performance review and CVM optimisation",
        "Iteration on product, pricing, and bundles",
        "Ongoing campaign activation and measurement",
        "Quarterly brand review cadence established",
      ],
    },
  ],
};

export const platformCapabilities = {
  eyebrow: "Platform Capabilities",
  title: "Everything an MVNO needs — already built.",
  subtitle:
    "Digital Mobile's MVNE platform is a proven, production-grade stack. 14 core capability areas, all API-first, all compliant, all live on other MVNOs today.",
  capabilities: [
    {
      icon: "📱",
      title: "SIM Lifecycle & Provisioning",
      description: "Bulk/individual provisioning, eSIM + physical, swap/replace/block/port, stock management, multi-channel distribution.",
    },
    {
      icon: "👤",
      title: "Account Management",
      description: "Self-service onboarding, multi-SIM linkage, account hierarchies (family/business), delegated admin.",
    },
    {
      icon: "📦",
      title: "Product & Bundle Management",
      description: "Fully configurable product catalogue, custom validity, dynamic pricing, loyalty integration.",
    },
    {
      icon: "💳",
      title: "Activity & Recharge",
      description: "Real-time balance, auto-renewal, multi-channel recharge (retail/USSD/app/web), Arena payment integration.",
    },
    {
      icon: "🔔",
      title: "Event & Notification",
      description: "Real-time SMS/email/push notifications, custom events, CRM and marketing system integration.",
    },
    {
      icon: "🎁",
      title: "VAS Platform",
      description: "SMS/MMS, voicemail, OTA device mgmt, WASP gateway, USSD, WhatsApp, airtime advance, loyalty.",
    },
    {
      icon: "💰",
      title: "Billing & Finance",
      description: "Converged prepaid/postpaid/subscription, automated invoicing, revenue assurance via MARS, Arena financial integration.",
    },
    {
      icon: "⚖️",
      title: "Regulatory & Compliance",
      description: "Full RICA/eRICA, number portability, lawful intercept, ICASA and POPIA compliance, full audit trails.",
    },
    {
      icon: "📊",
      title: "CRM & Campaigns",
      description: "Xanite CVM engine, PersAIc AI targeting, segmentation, campaign management, journey orchestration.",
    },
    {
      icon: "🖥️",
      title: "OSS / BSS",
      description: "Real-time OCS, NOC with SLA management, Enterprise Product Catalogue, provisioning, performance dashboards.",
    },
    {
      icon: "🛟",
      title: "Support & Service Desk",
      description: "24/7 multi-level support via CXG, dispute management, self-service (USSD/app/web), knowledge base.",
    },
    {
      icon: "🌐",
      title: "Portal Management",
      description: "Secure role-based admin portals, real-time dashboards, mobile-responsive, white-labelled to Arena brand.",
    },
    {
      icon: "🔗",
      title: "Integration & APIs",
      description: "API-first architecture, iPaaS integration platform, PCI-compliant payment flows, open APIs for every service.",
    },
    {
      icon: "🛡️",
      title: "Security & Resilience",
      description: "Geo-redundant infrastructure, disaster recovery, regular failover testing, ISO compliance in progress.",
    },
  ],
};

export const commercialModel = {
  eyebrow: "Commercial Model",
  title: "Zero upfront. Pure revenue share.",
  subtitle:
    "Digital Mobile carries the build. Arena carries the brand. Revenue is split 50/50 on net profit, after a small loan account covers Digital Mobile's build investment.",
  highlights: [
    {
      metric: "R0",
      label: "Upfront capex from Arena",
      description: "Digital Mobile carries the full platform build, integration, and launch investment.",
    },
    {
      metric: "50 / 50",
      label: "Net profit share",
      description: "After Digital Mobile's build loan account is settled, profit is split equally between Arena and Digital Mobile.",
    },
    {
      metric: "R2M",
      label: "Advertising value in-kind",
      description: "Arena commits R2M of in-kind advertising inventory across its media properties to accelerate subscriber acquisition.",
    },
    {
      metric: "300k",
      label: "Subscriber target (Yr 5)",
      description: "The platform is sized for rapid scale to 300,000 active subscribers within 5 years of launch.",
    },
  ],
  costStructure: [
    { item: "MVNO platform deployment", who: "Digital Mobile", cost: "R0 to Arena" },
    { item: "Monthly platform fee", who: "Digital Mobile", cost: "R75k or R7.50/active sub (higher)" },
    { item: "Contact centre (CXG)", who: "Digital Mobile", cost: "Managed service" },
    { item: "SIM cards + Paperless RICA", who: "Digital Mobile", cost: "R20 per SIM activation" },
    { item: "Logistics (SIM delivery)", who: "Digital Mobile", cost: "R40 per delivery" },
    { item: "Arena brand + marketing", who: "Arena", cost: "R2M in-kind media value" },
  ],
};

export const cta = {
  eyebrow: "Next Steps",
  title: "Six product lines. Three cadences. One proposal to sign off.",
  subtitle:
    "Next steps: lock the content/telco split as the commercial spine, ratify retail-anchored content pricing, approve telco margin floors, finalise the itemised-billing presentation, and align go-to-market by cadence.",
  primary: {
    label: "Request a working session",
    href: "mailto:edwardw@mvne.co.za",
  },
  secondary: {
    label: "Download the deck",
    href: "/downloads/Arena-MVNO-Executive-Deck.pptx",
  },
  workstreams: [
    "Sign off content/telco split as the commercial spine of the MVNO",
    "Ratify retail-anchored content pricing (BL Premium R129, Sunday Times R99, EC Basic R45 / Plus R95)",
    "Approve ≥50% gross profit floor on every Combo, Voice, Data and SMS line",
    "Specify itemised billing — two line items on every Combo + Content invoice",
    "Align GTM by cadence: Daily (sampling), Weekly (retention), Monthly (anchor)",
  ],
};

export const footer = {
  confidentiality:
    "This document is confidential. It may not be presented to another party without consent from MVNE. Disclosing, copying, distributing or taking any action in relation to the contents of this information is strictly prohibited.",
};
