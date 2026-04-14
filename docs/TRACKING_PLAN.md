# Tracking Plan

## Google Analytics (Placeholder)

- **Status:** Not yet implemented
- **Implementation:** Add GA4 measurement ID via `next/script` in root layout
- **Environment variable:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Setup:** Create GA4 property, add data stream for the production domain

## Event Tracking (Placeholder)

| Event Name | Trigger | Parameters |
|---|---|---|
| `page_view` | Page load | `page_title`, `page_location` |
| `section_view` | Section enters viewport | `section_name` |
| `tier_click` | User clicks a product tier | `tier_name` |
| `cta_click` | User clicks a CTA button | `cta_label`, `cta_location` |
| `accordion_open` | User expands an accordion item | `item_label` |
| `scroll_depth` | User scrolls to 25/50/75/100% | `percent` |

## Form Submission Tracking (Placeholder)

- **Contact form:** If added, track `form_submit` event with `form_name: "contact"`
- **Email capture:** If added, track `lead_capture` event
- **Implementation:** Custom events via `gtag()` or `sendGAEvent()`

## Vercel Analytics (Optional)

- **Vercel Web Analytics:** Can be enabled in Vercel dashboard at no cost for Hobby tier
- **Vercel Speed Insights:** Available for Core Web Vitals monitoring
- **Implementation:** `pnpm add @vercel/analytics @vercel/speed-insights` and add providers to root layout

## Conversion Goals (Placeholder)

| Goal | Description | Metric |
|---|---|---|
| Engagement | Visitor scrolls past 50% of page | Scroll depth event |
| Interest | Visitor views 3+ sections | Section view count |
| Intent | Visitor clicks CTA / contact | CTA click event |
| Share | Visitor copies URL or shares | Share event (if implemented) |
