/* global React */
function About() {
  return (
    <section id="sobre" style={{ position:'relative', padding:'100px 48px' }}>
      <div style={{ position:'absolute', right:'-5%', top:40,
                    width:420, height:420, borderRadius:999,
                    background:'radial-gradient(circle, rgba(49,60,240,.4), transparent 65%)',
                    filter:'blur(40px)', pointerEvents:'none' }}/>
      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1.3fr',
                    gap:64, alignItems:'center' }}>
        {/* Photo placeholder */}
        <div style={{ aspectRatio:'4/5', borderRadius:16,
                      background:`linear-gradient(180deg, #0C0C22 0%, #080818 100%)`,
                      border:'1px solid rgba(49,60,240,0.35)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      color:'rgba(240,240,248,.35)', fontSize:12, fontWeight:600,
                      letterSpacing:'0.12em', textTransform:'uppercase',
                      boxShadow:'0 0 60px rgba(49,60,240,.25)' }}>
          [Foto do palestrante]
        </div>
        <div>
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.18em',
                        textTransform:'uppercase', color:'rgba(240,240,248,.5)',
                        marginBottom:16 }}>Sobre quem vai te ensinar</div>
          <h2 style={{ fontFamily:'var(--font-condensed)', fontWeight:900,
                       fontSize:'clamp(40px,4.5vw,64px)', lineHeight:0.95,
                       textTransform:'uppercase', color:'#F0F0F8',
                       margin:0, letterSpacing:'0.005em' }}>
            15 anos estruturando <span style={{ color:'#5A82FF' }}>comerciais</span> de verdade.
          </h2>
          <p style={{ fontSize:17, lineHeight:1.65, color:'rgba(240,240,248,.75)',
                      marginTop:24, maxWidth:540 }}>
            Ajudei mais de 200 empresas a sair da venda por indicação e construir
            operações previsíveis. Hoje compartilho o método E.I.X.O. — o mesmo
            framework que usamos nos projetos da UP.
          </p>
          <div style={{ display:'flex', gap:12, marginTop:28, flexWrap:'wrap' }}>
            {['UP Agência','Ex-Endeavor','Sebrae'].map(t=>(
              <span key={t} style={{
                padding:'6px 14px', borderRadius:999,
                background:'rgba(49,60,240,.1)',
                border:'1px solid rgba(49,60,240,.3)',
                fontSize:12, fontWeight:600, color:'#F0F0F8',
                letterSpacing:'0.02em' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
