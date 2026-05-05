/* global React */
const CASES = [
  { brand:'Skyline', tag:'Branding', desc:'Reposicionamento de marca para o lançamento de 2026.', tint:'#313CF0' },
  { brand:'Casa Verde', tag:'Digital', desc:'E-commerce e identidade visual do zero.', tint:'#0A0A0F' },
  { brand:'Onda', tag:'Campanha', desc:'Lançamento nacional com foco em canais digitais.', tint:'#1A1A22' },
  { brand:'Lúmen', tag:'Produto', desc:'App de bem-estar: estratégia, UX e UI.', tint:'#313CF0' },
];

function CaseGrid() {
  return (
    <section style={{ padding:'80px 48px', background:'var(--bone)' }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:40 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom:10 }}>Cases recentes</div>
          <h2 style={{ margin:0 }}>Trabalhos que a gente tem orgulho.</h2>
        </div>
        <a href="#" style={{ color:'var(--ink)', border:0, fontWeight:600, fontSize:15,
             display:'inline-flex', alignItems:'center', gap:8 }}>
          Ver todos <img src="../../assets/arrow-black.png" style={{ height:11 }}/>
        </a>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        {CASES.map((c,i)=>(
          <a key={c.brand} href="#" style={{ border:0, textDecoration:'none', display:'block' }}>
            <div style={{
              aspectRatio:'16/10', background:c.tint, borderRadius:12,
              padding:28, display:'flex', flexDirection:'column', justifyContent:'space-between',
              color:'#fff', position:'relative', overflow:'hidden',
            }}>
              <img src="../../assets/arrow-outline-white.png"
                style={{ position:'absolute', right:-30, bottom:-30, height:240, opacity:0.18 }}/>
              <div className="eyebrow" style={{ color:'rgba(255,255,255,.75)' }}>{c.tag}</div>
              <div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700,
                              fontSize:44, letterSpacing:'-0.02em', lineHeight:1 }}>{c.brand}</div>
                <div style={{ marginTop:10, fontSize:15, opacity:0.85, maxWidth:320 }}>{c.desc}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
window.CaseGrid = CaseGrid;
