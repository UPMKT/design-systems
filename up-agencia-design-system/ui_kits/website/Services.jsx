/* global React */
const SERVICES = [
  { t:'Branding', d:'Identidade, naming, sistemas visuais e manifestos.' },
  { t:'Digital',  d:'Sites, e-commerce, produtos e interfaces.' },
  { t:'Campanha', d:'Conceito, direção de arte e produção audiovisual.' },
  { t:'Estratégia', d:'Posicionamento, arquitetura de marca e pesquisa.' },
];

function Services() {
  return (
    <section style={{ padding:'80px 48px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:48 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom:10 }}>Serviços</div>
          <h2 style={{ margin:0 }}>O que fazemos<br/>para marcas subirem.</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0,
                       borderTop:'1px solid var(--line)' }}>
          {SERVICES.map((s,i)=>(
            <div key={s.t} style={{
              padding:'24px 20px',
              borderBottom:'1px solid var(--line)',
              borderRight: i%2===0 ? '1px solid var(--line)' : 'none',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <img src="../../assets/arrow-blue.png" style={{ height:14 }}/>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:600,
                              fontSize:22, letterSpacing:'-0.01em' }}>{s.t}</div>
              </div>
              <div style={{ fontSize:14, color:'var(--fg-2)', lineHeight:1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
