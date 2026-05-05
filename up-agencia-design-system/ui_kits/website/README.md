# UP Agência — Website UI Kit

A high-fidelity recreation of the UP Agência marketing website, built as modular JSX
components. Open `index.html` to explore the clickable prototype.

## What's here

- `index.html` — demo shell; loads React + Babel and mounts `App.jsx`.
- `App.jsx` — lightweight router; switches between Home / Cases / Serviços / Estúdio / Contato.
- `Nav.jsx` — sticky glass top nav with the UP lockup and primary CTA.
- `Hero.jsx` — big-type home hero with oversized cropped arrow-mark motif.
- `Services.jsx` — 2×2 services grid with blue arrow bullets.
- `CaseGrid.jsx` — 2-column case cards; alternates ink and blue tinted blocks.
- `CTABlock.jsx` — full-bleed blue CTA with "Bora fazer juntos?".
- `ContactForm.jsx` — focused input pattern, live success state.
- `Footer.jsx` — dark ink footer with logo + column links.

## Visual rules followed

- One color: `#313CF0`. Neutrals only otherwise.
- Display type in Space Grotesk, body in Inter (loaded via `colors_and_type.css`).
- The arrow glyph appears: inside the primary CTA, as a services-grid bullet, as an
  oversized cropped backdrop in the hero and CTA block, and inside case cards.
- No gradients. Flat-first. Shadow used only on the primary CTA hover halo.
- Radii: 8–16px. Never pill on buttons.

## Known gaps / not included

- Real copy — all body text is inferred; swap in real client copy when available.
- Case study inner pages — stubbed out.
- Blog / journal — not built (no reference).
- i18n — Portuguese only. Add EN when needed.
