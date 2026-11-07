---
name: Vorcove
description: The revenue ledger. Ruled paper, sea-ink type, and beacon orange reserved for money.
colors:
  ink: "#0A171E"
  navy: "#0F222B"
  navy-3: "#1C3843"
  line-dark: "#284752"
  beacon: "#FF8A3D"
  pen: "#B4500F"
  peach: "#FFE9DA"
  paper: "#FFFFFF"
  sand: "#F4F2EE"
  text: "#0C1B22"
  muted: "#52616A"
  soft: "#63727A"
  rule: "#DFE3E3"
  rule-sand: "#D6DBDB"
  rule-faint: "#EEF1F1"
  on-dark: "#B7C6CC"
  on-dark-2: "#8EA3AB"
  error: "#B42318"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(44px, 4.8vw, 68px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(38px, 4.6vw, 64px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.2
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 90"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 118"
  wordmark:
    fontFamily: "Bricolage Grotesque, Archivo, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    letterSpacing: "-0.035em"
rounded:
  sm: "3px"
  md: "4px"
spacing:
  bar: "72px"
  gutter: "32px"
  gutter-mobile: "20px"
  section: "120px"
  section-mobile: "88px"
  row: "28px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-ink-hover:
    backgroundColor: "{colors.navy-3}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-paper-hover:
    backgroundColor: "{colors.peach}"
  field:
    textColor: "{colors.text}"
    rounded: "0px"
    padding: "12px 0 10px"
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    height: "72px"
---

# Design System: Vorcove

## Overview

**Creative North Star: "The Revenue Ledger"**

Every Vorcove surface reads like the ledger from a business review: ruled sheets, heavy ink rules that close an account, column heads, tabular figures and totals that settle the argument. The system is typographic. Imagery comes only from real product walkthroughs, framed and captioned as exhibits; there are no stock photos and no decorative illustration.

Density is a working document's: rows separated by hairlines, accounts opened and closed by 2px ink rules, generous section spacing between dense ledgers. Paper sheets alternate with sea-ink binding bands (header, product exhibits, the review request, footer), so the page reads as one bound ledger.

**Key Characteristics:**
- Condensed uppercase Archivo headlines, wide tracked Archivo column heads, Public Sans text.
- Tables, rows and rules instead of cards.
- Beacon orange appears only on money.
- Square, stamped-form corners (4px at most).
- One authored motion moment: ticking a fix in the sample ledger.

## Colors

Sea-ink and paper carry the page; beacon orange is the auditor's pen.

### Primary
- **Beacon Orange** (beacon): the auditor's pen. Rings around recovered amounts, double underlines under totals, leak markers in service rows, and the logo's beacon dot. Never used for text on light grounds (contrast) or for buttons.
- **Ledger Pen** (pen): the text form of beacon orange for money figures on paper, such as ticked amounts and recoverable totals.

### Neutral
- **Sea Ink** (ink): headline and body ink, account rules, primary buttons, and the binding bands' ground.
- **Deep Harbor** (navy) and **Harbor Rule** (navy-3, line-dark): button hover and dividers inside binding bands.
- **Ledger Paper** (paper): the main sheet ground.
- **Statement Sand** (sand): the second sheet ground, used for the statement of work.
- **Ruling** (rule, rule-sand, rule-faint): row hairlines on paper and sand, and the faint hero ruling.
- **Muted Ink** (muted): supporting text and column heads on paper or sand. Use it, not soft, for small text on sand.
- **Bound Text** (on-dark, on-dark-2): text and captions on binding bands.
- **Peach** (peach): hover for paper buttons and text selection.

### Named Rules
**The Palette Law.** Beacon orange (and its pen form) marks money and nothing else: recovered amounts, totals, leak markers. Buttons, links, tags and decoration never take it. The logo's beacon dot is the only exception.

**The Binding Rule.** Sea-ink full-width bands bind the ledger. Use them for the header, product exhibits, the review request and the footer, never as a card.

## Typography

**Display Font:** Archivo (variable width), with system-ui
**Body Font:** Public Sans, with system-ui
**Wordmark:** Bricolage Grotesque 700, inside the logo only

**Character:** Archivo's width axis does all the work: condensed for printed-form headlines, wide for column heads, and tabular for figures. Public Sans keeps the text plain and civic.

### Hierarchy
- **Display** (800, width 68%, uppercase): the hero headline only.
- **Headline** (700, width 72%, uppercase): section heads, product names (800, larger) and the form title.
- **Title** (700, 22px; account rows 30px at width 80%, uppercase): step titles, service names, FAQ questions (600, width 95%).
- **Figure** (600–800, tabular lining figures): every dollar amount and total. The recoverable total runs at 40–56px, width 80%, weight 800.
- **Body** (400, 17px, 1.6): text, max about 34–44em per column. Lead text is 18px in muted ink.
- **Label** (600, 11.5–12.5px, width 118%, uppercase, 0.07em): column heads, exhibit captions, form labels and step timings.

### Named Rules
**The Column Head Rule.** Small uppercase labels exist only as column heads, captions and field labels. They never sit alone above a section heading.

## Layout

The container is 1280px with 32px gutters (20px under 640px). Sections run 120px vertical (88px under 900px). Each section opens with an account head: headline left, lead right, closed by a 2px ink rule. The ledger rows below are separated by 1px hairlines with about 28px vertical padding. The hero is one ruled sheet split by a 2px vertical ink rule (5:7 columns), and the rule turns horizontal under 1000px. Multi-column ledgers collapse to stacked rows under 900px, with column heads hidden and inline labels shown. The header is a sticky 72px ink bar; under 900px the nav moves into a full-screen drawer while the review button stays visible.

## Elevation & Depth

Flat by design. There are no shadows. Depth comes from paper versus ink grounds and from rule weight: 2px ink rules open and close accounts, 1px hairlines separate rows.

### Named Rules
**The Rule-Weight Rule.** Hierarchy between groups comes from rule weight (2px ink versus 1px hairline), never from shadows or cards.

## Shapes

Square, stamped-form geometry: 4px corners on buttons, the form sheet and video frames, and 3px on ledger checkboxes. Fields are underlines, not boxes. The only curved strokes are the auditor's hand-drawn pen rings.

## Components

### Buttons
- **Shape:** stamped rectangle (4px).
- **Ink:** sea-ink ground, white Archivo 700 at 16px (width 105%). Used on paper; hover moves to navy-3.
- **Paper:** white ground with ink text. Used on binding bands; hover moves to peach.
- **Focus:** 2px currentColor outline, 3px offset.

### Inputs / Fields
- **Style:** underline only (1.5px), transparent ground, 17px text, uppercase wide label above.
- **Focus:** the underline thickens to a 3px ink line.
- **Error:** red underline and a red message below the field. A successful submit prints a dated "Entry posted" ledger line instead of a toast.

### Navigation
- Ink bar. Links in on-dark Public Sans 500 at 15px; on hover they turn white with a 1.5px underline. A paper "Book a review" button sits on the right. On mobile, a 44px menu button opens a full-screen ink drawer with condensed uppercase links.

### Sample Review Ledger (signature)
- A real table of leak, fix and monthly amount, with tickable rows. Ticking a row draws the check stroke, turns the amount pen-orange, draws a beacon ring around it, and tweens the double-underlined total to the new sum (520ms, exponential ease-out; instant under reduced motion). Its figures are always labeled illustrative.

### Exhibit Frame
- Product video in a 4px frame with a 1px harbor-rule border, a white progress line, and a caption row below: "Exhibit A · …" on the left, play/sound/full-screen buttons on the right.

## Do's and Don'ts

### Do:
- **Do** set every dollar figure in Archivo with tabular lining figures.
- **Do** open and close every account (section) with a 2px ink rule.
- **Do** label any demonstration figures as illustrative, right next to them.
- **Do** use real product walkthroughs as the only imagery, captioned as exhibits.

### Don't:
- **Don't** use beacon orange for buttons, links, tags or decoration (the Palette Law).
- **Don't** add shadows, cards or rounded corners above 4px.
- **Don't** place a small uppercase label alone above a heading.
- **Don't** add stock photography or decorative illustration.
- **Don't** change the logo or its Bricolage wordmark.
