/* global React */
function FinalCTA() {
  return (
    <section style={{ position:'relative', padding:'120px 48px', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        background:`radial-gradient(circle at 50% 60%, rgba(49,60,240,0.4) 0%, transparent 50%)` }}/>
      <div style={{ position:'relative', maxWidth:780, margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontFamily:'var(--font-condensed)', fontWeight:900,
                     fontSize:'clamp(56px,7vw,104px)', lineHeight:0.92,
                     textTransform:'uppercase', color:'#F0F0F8', margin:0,
                     letterSpacing:'0.005em' }}>
          Sua vaga<br/>tá <span style={{ color:'#5A82FF',
            textShadow:'0 0 30px rgba(49,60,240,.6)' }}>esperando</span>.
        </h2>
        <p style={{ fontSize:18, lineHeight:1.55, color:'rgba(240,240,248,.7)',
                    marginTop:24, maxWidth:520, marginInline:'auto' }}>
          Inscreva-se agora. Vai direto pro seu WhatsApp o link da sala no dia do evento.
        </p>
        <a href="#inscricao" style={{ border:0, textDecoration:'none',
                                       display:'inline-flex', marginTop:36 }}>
          <button style={{
            background:'linear-gradient(90deg,#5A82FF,#313CF0)', color:'#fff', border:0,
            padding:'18px 18px 18px 32px', borderRadius:999, fontFamily:'var(--font-body)',
            fontWeight:700, fontSize:17, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:16,
            textTransform:'uppercase', letterSpacing:'0.03em',
            boxShadow:'0 0 60px rgba(49,60,240,.55)',
          }}>
            Garantir minha vaga
            <span style={{ width:44, height:44, borderRadius:999, background:'#fff',
                           display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
              <img src="../../assets/arrow-blue.png" style={{ height:14 }}/>
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
