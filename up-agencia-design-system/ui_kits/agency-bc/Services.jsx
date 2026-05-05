/* global React */
function Services() {
  const items = [
    { t:'Branding', d:'Naming, identidade visual, manual de marca e ativação. Construímos marcas que fazem sentido pro mercado e pro time.' },
    { t:'Digital', d:'Sites, ecommerce e produtos digitais. Design e dev em time integrado, com performance e narrativa.' },
    { t:'Campanha', d:'Criação publicitária ponta-a-ponta — conceito, filme, mídia. Pra lançamento, sazonal ou awareness.' },
    { t:'Performance', d:'Mídia paga, automação e CRO. Medimos receita, não cliques.' },
    { t:'Conteúdo', d:'Estratégia editorial, social e vídeo. Voz própria, calendário previsível.' },
    { t:'Estratégia', d:'Consultoria pra estruturar marketing e comercial em empresas que cresceram rápido demais.' },
  ];
  return (
    <section style={{ background:'#000', padding:'80px 20px' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
                      flexWrap:'wrap', gap:20, marginBottom:48 }}>
          <h2 style={{ fontFamily:'Inter, sans-serif', fontWeight:400,
                       fontSize:'clamp(40px,5vw,60px)', lineHeight:1,
                       letterSpacing:'-0.02em', color:'#fff', margin:0, maxWidth:780 }}>
            O que entregamos.
          </h2>
          <div style={{ fontFamily:'DM Sans, sans-serif', fontSize:16, color:'#B9B9B9',
                        letterSpacing:'-0.01em', maxWidth:380, lineHeight:1.5 }}>
            Seis frentes integradas. Você contrata o que precisa — a gente conecta.
          </div>
        </div>

        <div style={{ display:'grid',
                      gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
                      gap:20 }}>
          {items.map((s,i)=>(
            <div key={s.t} style={{
              background:'#0C0D17', borderRadius:5,
              padding: i===0 ? '70px 30px 40px' : '40px 30px',
              display:'flex', flexDirection:'column', gap:14,
              minHeight:240,
            }}>
              <div style={{
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                width:36, height:36, borderRadius:1,
                background:'#313CF0',
              }}>
                <span style={{ fontFamily:'Inter, sans-serif', fontWeight:600,
                               fontSize:14, color:'#fff' }}>0{i+1}</span>
              </div>
              <h3 style={{ fontFamily:'Inter, sans-serif', fontWeight:400,
                           fontSize:28, lineHeight:1.05, letterSpacing:'-0.02em',
                           color:'#fff', margin:0 }}>{s.t}</h3>
              <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:16,
                          lineHeight:1.5, letterSpacing:'-0.01em',
                          color:'#DDDDDD', margin:0 }}>{s.d}</p>
              <div style={{ marginTop:'auto', paddingTop:14,
                            display:'inline-flex', alignItems:'center', gap:8,
                            fontFamily:'Inter, sans-serif', fontWeight:500, fontSize:13,
                            color:'#9B8DAD', textTransform:'uppercase', letterSpacing:'0.08em' }}>
                Saiba mais →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
