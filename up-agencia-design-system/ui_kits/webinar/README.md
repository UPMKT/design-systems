# UP Agência — Webinar / Funnel UI Kit

Um funil de webinar (página única) usando a **variante Dark / Neon** do design system.
Pensado para eventos ao vivo, lançamentos e páginas de captura em que o objetivo é
**uma única ação**: se inscrever.

## Seções

1. **Nav** — sticky, fundo com `backdrop-filter`, CTA pill gradient.
2. **Hero** — split (headline + benefícios à esquerda, formulário de inscrição à direita).
   Headline em Barlow Condensed 900 UPPERCASE. Formulário em card glass com glow azul.
3. **Benefits bar** — 4 itens curtos com ícone de seta circular.
4. **About** — foto (placeholder) + bio + credenciais em chips.
5. **Method** — método em 4 etapas (E.I.X.O.), cards glass com badge gradient.
6. **Numbers** — 4 números grandes com gradient text (off-white → azul).
7. **Final CTA** — headline grande com glow radial central + CTA pill gradient.
8. **Footer** — links legais (LGPD).

## Regras visuais

- Paleta = mesma do sistema (`#313CF0` brand, `#F0F0F8` off-white), mas aplicada no
  modo dark com os tokens `--dark-bg`, `--dark-fg-*`, `--glow-*`.
- Tipografia de impacto: `Barlow Condensed 900` UPPERCASE pra headlines.
  Corpo continua em Inter.
- Todos os headlines têm a última palavra em gradient ou azul puro — "âncora visual".
- Glow radial azul aparece em 3 seções (hero, about, final CTA). Use com moderação.
- Cards glass com `backdrop-filter: blur(28px) saturate(180%)` + borda `rgba(49,60,240,0.28)`.
- Botões primários: gradient `#5A82FF → #313CF0`, pill, UPPERCASE, com halo azul externo.

## Gaps conhecidos

- Foto do palestrante é placeholder — substituir.
- Link de inscrição real (webinar platform) ainda não existe — o form é local.
- Data/horário estão hardcoded no hero; mover pra prop ou CMS quando houver backend.
