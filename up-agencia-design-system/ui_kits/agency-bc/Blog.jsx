/* global React */
function Blog() {
  const posts = [
    { c:'Estratégia', t:'Por que branding é a primeira alavanca de receita', d:'O que separa uma marca esquecida de uma marca lembrada — e quanto isso vale em CAC.', i:'linear-gradient(135deg,#1a1a2e,#0C0D17)' },
    { c:'Digital', t:'Sites que vendem têm uma coisa em comum', d:'Não é design bonito. É arquitetura de informação que respeita o tempo do usuário.', i:'linear-gradient(135deg,#0a0a1f,#313CF0 130%)' },
    { c:'Performance', t:'Como medir mídia paga sem se enganar', d:'Vanity metrics te custam dinheiro. Receita atribuída te dá direção.', i:'linear-gradient(135deg,#1f1f1f,#000)' },
  ];
  return (
    <section style={{ background:'#0D0D0D', padding:'80px 20px' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
                      flexWrap:'wrap', marginBottom:40 }}>
          <h2 style={{ fontFamily:'Inter, sans-serif', fontWeight:400,
                       fontSize:'clamp(40px,5vw,60px)', lineHeight:1,
                       letterSpacing:'-0.02em', color:'#fff', margin:0 }}>Diário UP.</h2>
          <a href="#" style={{ fontFamily:'Inter, sans-serif', fontWeight:500, fontSize:15,
                               color:'#fff', border:0, padding:'12px 24px',
                               borderRadius:100, border2:'1px solid rgba(255,255,255,0.18)',
                               textDecoration:'none' }}>Todos os posts →</a>
        </div>

        <div style={{ display:'grid',
                      gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))',
                      gap:20 }}>
          {posts.map((p,i)=>(
            <article key={i} style={{
              background:'#222222', borderRadius:5, padding:16,
              display:'flex', flexDirection:'column', gap:14,
              cursor:'pointer', transition:'transform 0.4s ease',
            }}>
              {/* Image area with overlay */}
              <div style={{
                position:'relative', height:200, borderRadius:5, overflow:'hidden',
                background: p.i,
              }}>
                <div style={{ position:'absolute', inset:0,
                              background:'linear-gradient(173deg, rgba(0,0,0,0.51) 0%, #000 71%)' }}/>
                <span style={{
                  position:'absolute', top:12, left:12,
                  background:'#313CF0', color:'#fff',
                  padding:'5px 10px', borderRadius:1,
                  fontFamily:'Inter, sans-serif', fontWeight:400, fontSize:14,
                  letterSpacing:'-0.02em',
                }}>{p.c}</span>
              </div>
              <h3 style={{ fontFamily:'Inter, sans-serif', fontWeight:400,
                           fontSize:22, lineHeight:1.15, letterSpacing:'-0.02em',
                           color:'#C7C7C7', margin:0,
                           transition:'color 0.5s ease' }}
                  onMouseEnter={e=>e.target.style.color='#5A82FF'}
                  onMouseLeave={e=>e.target.style.color='#C7C7C7'}>
                {p.t}
              </h3>
              <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:14,
                          lineHeight:1.5, letterSpacing:'-0.01em',
                          color:'#7A7A7A', margin:0 }}>{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Blog = Blog;
