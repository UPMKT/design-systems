# UP Agência — Design System

A brand and UI design system for **UP Agência**, a Brazilian creative/digital agency.
The system is built around one electric ultramarine blue, bold geometric typography, and
the distinctive "UP↗" arrow-mark as a repeating visual motif.

---

## Context

**Brand name:** UP Agência (the folder provided was `🏢 Agência`, a Portuguese agency;
the logo reads **UP↗**).
**Tagline / full product copy:** not provided — copy in this system is written in
Brazilian Portuguese by default, echoing agency-industry conventions (see CONTENT FUNDAMENTALS).
**Language:** Portuguese (pt-BR) primary, English acceptable for international work.

### Products represented

Based on the assets provided (logo + 10 arrow-mark variants), UP Agência appears to be a
**creative/digital agency** whose public surfaces would include:

1. **Marketing website** — homepage, services, portfolio/cases, about, contact
2. **Pitch deck template** — for proposals, case studies, all-hands
3. **Social / communication templates** — not built in v1 (flag for later)

Only the **marketing website** UI kit ships in this initial system; the deck template is
out-of-scope until real reference slides are provided.

### Sources used

| Source | Access | Status |
|---|---|---|
| Uploaded brand assets | `uploads/*.png` | ✅ Used — 11 files: 1 primary logo + 10 arrow/wordmark variants |
| Codebase `🏢 Agência` | File System Access mount | ❌ **Inaccessible** — Unicode normalization mismatch on the folder name. See CAVEATS. |
| Figma | Not provided | — |
| Sample decks | Not provided | — |

### Assets inventory

Copied into `assets/`:

- `logo-up-blue.png` — Primary: black "UP" + blue arrow (the hero lockup)
- `logo-up-black.png` — All-black version
- `logo-up-black-wide.png` — All-black, wider crop
- `logo-up-white.png` — All-white (for dark backgrounds)
- `arrow-blue.png` / `arrow-blue-alt.png` — Solid blue arrow glyph
- `arrow-black.png` / `arrow-white.png` — Solid mono variants
- `arrow-outline-black.png` / `-blue.png` / `-white.png` — Outline variants for framing/graphic use

The arrow glyph is the brand's universal iconographic unit — use it as bullet marker, link
indicator, section divider, cover-art motif, avatar shape, and more.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | You are here. Brand context, fundamentals, manifest. |
| `colors_and_type.css` | Core CSS variables. Import this first in every design. |
| `SKILL.md` | Agent Skill manifest — makes this system invocable by Claude Code. |
| `assets/` | Logos, arrows, brand marks (PNG). |
| `fonts/` | *(empty — see CAVEATS; we fall back to Google Fonts)* |
| `preview/` | HTML cards rendered in the Design System tab. |
| `ui_kits/website/` | Marketing-site UI kit: JSX components + `index.html`. |
| `slides/` | *(not built — no source decks provided)* |

---

## CONTENT FUNDAMENTALS

> No production copy was provided. The guidelines below are the **default house voice**
> inferred from Brazilian creative-agency conventions and the brand's visual confidence.
> Review and adjust with the brand team.

### Tone

- **Direct, confident, a little swaggering.** UP is an agency — they sell their craft.
  Copy should feel *chosen* and *sure*, not tentative.
- **Warm, not corporate.** Brazilian agencies lean human and conversational, even in B2B.
  Use "a gente" alongside "nós" where natural; "você" over "o senhor/a senhora".
- **Energetic but never cutesy.** The arrow points up and forward. Copy moves.

### Voice formulas

- **Headlines:** short, punchy, often a noun phrase or an imperative.
  *"Marcas que sobem."* / *"Criatividade que entrega."* / *"Feito pra crescer."*
- **Subheads:** one sentence, clarifies the headline, ≤ 140 chars.
- **Body:** 2–3 sentence paragraphs max. Break up with bold pull-phrases.
- **CTAs:** action verb + object.
  *"Conversar com a gente"*, *"Ver nossos cases"*, *"Começar um projeto"*.
  Avoid generic "Saiba mais" / "Enviar".

### Casing

- **Sentence case** for most UI (buttons, nav, form labels).
- **ALL CAPS** reserved for **eyebrows** / section kickers only, with wide tracking (`--tracking-cap`).
  e.g. `SERVIÇOS` above an h2.
- **Title Case** only in English contexts.
- Never in-sentence capitals for emphasis — use **bold** or color.

### Person

- **"Nós" / "a gente"** for the agency talking about itself.
- **"Você"** addressing the reader — always singular, informal, never "o cliente".
- Avoid third-person descriptions of the agency ("A UP é uma agência…"). First-person sells better.

### Emoji

- **Never in product UI or marketing copy.** The arrow-mark is our one ornament.
- Acceptable only in internal messaging templates (Slack, email sign-offs) — but
  prefer the arrow glyph (↗) or a typographic dash (—) over emoji.

### Punctuation

- **Em-dash (—)** freely, the way an agency talks.
- **Exclamation points** only in confirmations ("Recebemos seu contato!"). Never in pitches.
- **Ampersands** sparingly, brand-shopping style: "Estratégia & Conteúdo".

### Examples

| ✅ on-brand | ❌ off-brand |
|---|---|
| "Marcas que sobem." | "Soluções completas em marketing digital 360°." |
| "Ver nossos cases" | "Saiba mais sobre nossos serviços" |
| "A gente cuida do seu lançamento." | "A UP possui expertise em go-to-market." |
| "Começar um projeto →" | "Fale conosco! 🚀" |

---

## VISUAL FOUNDATIONS

### Colors

- **Anchor:** one electric ultramarine blue, **`#313CF0`** — pulled directly from the logo.
  This is *the* brand color. Use it deliberately: CTAs, active states, brand lockups,
  hero accents. Never decorative.
- **Neutrals:** near-black ink (`#0A0A0F`) and pure white, with a tight 4-step gray scale
  (`--slate`, `--steel`, `--mute`, `--line`, `--paper`). No warm neutrals, no cool-tinted grays.
- **No gradients.** The brand is flat. The one exception is a **protection gradient**
  beneath legibility-critical overlays on imagery — dark-ink to transparent, 60% stop.
- **No semantic color beyond state.** Red/green/amber exist for success/error/warning only.
  Never decorative, never as accents.
- **Avoid:** secondary brand colors, pastel palettes, color-coded categories.

### Typography

- **Display:** `Space Grotesk` (400–700). Bold geometric sans that matches the logo's
  wide-aperture, slightly-rounded feel. Used for **all** headlines, numbers, nav labels.
  *See CAVEATS — authentic logo typeface was not provided.*
- **Body:** `Inter` (400–800). Neutral and highly-legible.
- **Mono:** `JetBrains Mono` for any tabular/code/raw-data moments.
- **Scale:** aggressive — display sizes go up to 128px on large viewports. Small type
  never below 11px.
- **Tracking:** tight negative tracking on display (`-0.03em`), normal on body, wide
  (+0.14em) on SMALL-CAPS eyebrows.
- **Headlines are `balance`-wrapped; paragraphs are `pretty`-wrapped.** Always.

### Layout

- **12-column grid** on desktop, 4-column on mobile. Gutter = 24px (`--s-6`).
- **Max content width** 1280px; long-form text 680px.
- **Generous vertical rhythm** — sections separated by `--s-24` (96px) or more.
- **Left-aligned everything.** Centered text reserved for one-liner hero statements.
- **Fixed elements:** a single top nav (transparent over hero, solid white on scroll).
  No sticky CTAs, no floating chat bubbles unless the client insists.

### Backgrounds

- **Primary:** white or near-white (`--bg-1`, `--bg-2`).
- **Dark sections:** true `#0A0A0F` ink — used for hero or case-study takeovers.
- **Brand sections:** solid `--up-blue` as full-bleed color blocks; use rarely but boldly.
- **Imagery:** high-contrast color photography, *warm-neutral* grading preferred (but we
  don't over-direct — agency work is varied). Treat imagery with a **1px ink border** to
  contain it against the neutral page.
- **Patterns / textures:** the **arrow-mark** as oversized, cropped-off graphic element,
  rotated 0° / 90° / 180° / 270° only — never arbitrary angles. Use at 20–80% opacity
  when behind content; full opacity as foreground element.

### Borders & shadows

- **Borders:** 1px `--line` (`#E4E4E9`) for cards and dividers. 2px `--ink` for emphatic
  "framed" treatments — posters, pull-quotes, hero-block outlines.
- **Shadows:** used *sparingly*. The brand is flat-first.
  - `--shadow-1` — subtle elevation on hover only
  - `--shadow-2` — menus, popovers
  - `--shadow-3` — modals
  - `--shadow-brand` — glowing blue halo under the primary CTA on hover, for confidence

### Radii

- **Modest.** `--r-3` (8px) is the default card/button radius.
- **Never pill-shaped** buttons — they fight the wordmark's square geometry.
- `--r-pill` reserved for avatars and tags only.

### Transparency & blur

- **Transparency** for overlays on imagery only (text protection gradients).
- **Backdrop-blur** reserved for the sticky nav when scrolled over content.
- Never blur decoratively. Never "frosted glass" cards — too iOS, not UP.

### Hover states

- **Links:** opacity to `0.7`, 200ms.
- **Buttons (primary):** background `--up-blue` → `--up-blue-hover` (`#2730D0`), plus
  `--shadow-brand` appears.
- **Buttons (ghost):** background transparent → `--bg-3`.
- **Cards:** translate-y `-2px`, shadow `--shadow-2`.
- **Arrow glyph in link:** translates `+4px` on hover (brand motif — the arrow moves).

### Press states

- **Color shift** down one step (`--up-blue-press`). **No scale changes** on desktop
  (feels amateur). Mobile-tap: scale(0.98) is acceptable.

### Animation

- **Easing:** `--ease-out` (0.2, 0.8, 0.2, 1) for enter/reveal. `--ease-inout` for state
  changes. No bounces, no springs. The brand is *confident*, not *bubbly*.
- **Durations:** 120ms (micro), 200ms (default), 320ms (page reveal), 480ms (hero).
- **Signature motion:** the arrow-mark *advances* — any hover on a brand element causes
  arrows to translate slightly right-and-up. Reinforces the "UP↗" identity.
- **Reduce-motion:** always respected. All translates become opacity.

### Cards

- 1px `--line` border, `--r-3` radius, white background, no shadow at rest.
- On hover: translate(-2px) + `--shadow-2`. 200ms ease-out.
- Dense cards may use `--bg-2` (bone) instead of white for tonal depth without borders.

### Iconography & imagery grading

- See **ICONOGRAPHY** below.

---

## ICONOGRAPHY

### Brand's own iconic unit

The **arrow-mark** (the "↗" from UP↗) is the brand's universal icon. It is provided in
three fill treatments × three color variants:

| | Black | Blue | White |
|---|---|---|---|
| **Solid** | `arrow-black.png` | `arrow-blue.png` (also `-alt`) | `arrow-white.png` |
| **Outline** | `arrow-outline-black.png` | `arrow-outline-blue.png` | `arrow-outline-white.png` |

Use this as: link indicators (next to CTAs), bullet markers, section dividers, avatar
backgrounds, oversized cropped graphics, cover-art frames. It is the one brand-owned
glyph — use it generously.

### UI icons

- **No brand-proprietary UI icon library was provided.** For general-purpose UI icons
  (menu, close, chevron, search, external-link, etc.) we standardize on **Lucide**
  (https://lucide.dev), loaded from CDN.
  - *Flag:* this is a substitution. If the real agency site uses Heroicons, Phosphor,
    or a custom set, swap `lucide` for that in `ui_kits/website/icons.js`.
- **Style rule:** stroke icons only, `1.5px` stroke weight, `currentColor`, `20×20` in
  UI and `24×24` in nav/CTA contexts. No filled UI icons — they fight the thin body type.

### Emoji & unicode

- **Never used in product.** The arrow glyph replaces any "✨/🚀/👉" temptation.
- Acceptable ASCII arrows: `→` in copy (em-width), `↗` as the brand-echo in running text.

### Illustration

- **No illustration system provided.** Use **real photography** instead. Keep the
  system honest: if you need a spot-illustration slot, fall back to an oversized
  arrow-mark or a typographic treatment.

---

## CAVEATS (things I was unable to do)

1. **Codebase was inaccessible.** The attached folder `🏢 Agência` failed path matching
   — almost certainly a macOS NFD vs NFC Unicode normalization issue on the `ç` and/or
   emoji in the folder name. **Please re-attach the codebase with a plain-ASCII folder
   name** (e.g. `agencia`, `up-site`) so I can pull real components, colors, and copy.
2. **Fonts are substituted.** The authentic UP wordmark typeface was not shipped as a
   file. I've matched it to **Space Grotesk** on Google Fonts, which captures the
   geometric-but-warm character. Please provide the real file if there is one.
3. **No source copy.** All tone/voice rules are inferred from agency-industry defaults
   and the brand's visual confidence. **Please paste 2–3 real paragraphs from the site**
   (home hero, an about section, a case-study intro) so I can calibrate.
4. **No Figma link.** If a Figma file exists, share it — I can pull exact components and
   variables.
5. **No deck template** — slides/ is empty. Share a reference deck if one exists.
6. **Secondary products unknown.** I assumed the website is the primary product. If
   there's an app, docs site, client portal, or intranet, tell me.

See `preview/` for rendered design-token cards in the Design System tab.
