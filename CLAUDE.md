# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **AI 時代先修班・前端推廣課程** — a 3-hour intro-to-AI course targeting non-technical, middle-aged adults. The goal of the page is to drive visitors to register and pay.

- Course dates: 2026/05/23（六）、05/30（六）
- Venue: 草屯鎮中正路 864 號 4F（合作金庫大樓）
- Price: NT$1,000 per session; 3 colleagues = 1 free

## Tech Stack

Pure HTML + CSS + Vanilla JS. No build step, no framework, no bundler.

- Open `index.html` directly in a browser to preview.
- Mobile First — base width 390px, desktop max-width 960px centered.
- Responsive breakpoint: `768px`.

## Page Architecture

10 sections in order, each with an `id` for anchor navigation:

| # | id | Purpose |
|---|-----|---------|
| 01 | `#section-hero` | Hero with background image overlay |
| 02 | *(no anchor)* | 6-cell quick-info grid |
| 03 | *(no anchor)* | Pain-point empathy cards + image |
| 04 | *(no anchor)* | 4 outcome cards |
| 05 | `#section-cta` | Mid-page CTA (orange full-width) |
| 06 | `#section-outline` | Course outline accordion |
| 07 | *(no anchor)* | Suitable / not suitable audience (two-column) |
| 08 | `#section-register` | Registration & payment (most important CTA) |
| 09 | *(no anchor)* | FAQ accordion |
| 10 | *(floating)* | Sticky bottom CTA button (mobile only) |

## Key External URLs

| Purpose | URL |
|---------|-----|
| Registration form | https://www.surveycake.com/s/l78MP |
| Payment (綠界金流) | https://p.ecpay.com.tw/3D39EF8 |

All external links: `target="_blank" rel="noopener"`.

## Design Tokens

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| Primary deep blue | `#1F4E79` | Hero bg, headings, nav, footer |
| Brand blue | `#2E75B6` | Sub-headings, links, borders |
| Light blue bg | `#EBF3FA` | Info section bg, table rows |
| Orange CTA | `#C55A11` | All primary buttons, highlight text |
| Orange bg | `#FCE4D6` | Fee section, payment button area |
| Green | `#375623` | Suitable-audience title, positive text |
| Green bg | `#E2EFDA` | Suitable-audience block, outcome cards |
| Warning red | `#C00000` | Not-suitable-audience title |
| Light gray | `#F2F2F2` | Secondary info cells |
| White | `#FFFFFF` | Main content background |

### Typography
| Level | Mobile | Desktop | Weight |
|-------|--------|---------|--------|
| Hero H1 | 36px | 48px | 800, line-height 1.2 |
| Hero subtitle | 20px | 24px | 400, italic |
| Section H1 | 28px | 34px | 700 |
| Section H2 | 20px | 24px | 600 |
| Unit title | 18px | 20px | — (includes emoji prefix) |
| Body | 16px | 18px | 400, line-height 1.7 |
| Button | 18px | 20px | 700, full-width on mobile |
| Caption | 13px | 14px | color `#595959` |

## Interactive Features

### Accordion (Sections 06 & 09)
- Use `<details>`/`<summary>` (pure CSS) or JS `classList.toggle`.
- Only one item open at a time; clicking an open item closes it.
- Expand transition: `0.3s ease`.
- Both course outline and FAQ share the same component pattern.

### Anchor Scroll
```css
html { scroll-behavior: smooth; }
```

### Floating CTA Button (Section 10)
- `position: fixed; bottom: 0; z-index: 999;` full-width, mobile only (`max-width: 768px`).
- Auto-hide when Section 08 (`#section-register`) enters the viewport:
```js
const observer = new IntersectionObserver(([entry]) => {
  floatingBtn.style.display = entry.isIntersecting ? 'none' : 'block';
});
observer.observe(document.querySelector('#section-register'));
```

## Image Placeholders

Four images are referenced in the design. Use free stock photos from Unsplash/Pexels:

| Slot | Suggested content | Size | Treatment |
|------|------------------|------|-----------|
| ① Hero bg | Middle-aged adult smiling with phone | 1200×800px | 30–40% deep-blue overlay |
| ② Pain-point | Person looking confused at computer | 600×400px | Rounded corners |
| ③ Outline | Real classroom scene, phone in hand | 800×500px | — |
| ④ Register | Happy student showing phone results | 600×400px | Rounded corners |

## SEO / Meta

```html
<title>AI 時代先修班｜3小時從零學會 AI，草屯 2026/05/23 開課</title>
<meta name="description" content="不需技術背景，手機就能學。3 小時克服電腦恐懼，帶走 AI 實作成果。草屯 05/23、05/30 開課，每場 NT$1,000，三人報名一人免費。">
```
