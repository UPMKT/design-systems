/* global React */
function Hero({ onCTA }) {
  return (
    <section style={{ padding: '88px 48px 64px', position:'relative', overflow:'hidden' }}>
      {/* Oversized arrow motif, cropped */}
      <img src="../../assets/arrow-outline-blue.png"
        style={{ position:'absolute', right:-80, top:40, height:520, opacity:0.12,
                 transform:'rotate(0deg)', pointerEvents:'none' }}/>
      <div style={{ position:'relative', maxWidth:1100 }}>
        <div className="eyebrow" style={{ marginBottom:20 }}>Agência · São Paulo</div>
        <h1 className="display" style={{ margin:0 }}>
          Marcas que<br/>sobem<span style={{color:'var(--up-blue)'}}>.</span>
        </h1>
        <p style={{ fontSize:20, lineHeight:1.5, color:'var(--fg-2)', maxWidth:560, marginTop:28 }}>
          A gente combina estratégia, design e tecnologia em times pequenos e
          enxutos. Cada projeto começa com uma pergunta — e termina com algo que se move.
        </p>
        <div style={{ marginTop:36, display:'flex', gap:14, flexWrap:'wrap' }}>
          <button onClick={onCTA} style={{
            background:'var(--up-blue)', color:'#fff', border:0,
            padding:'16px 28px', borderRadius:10, fontFamily:'var(--font-body)',
            fontWeight:600, fontSize:16, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:10,
            boxShadow:'0 12px 32px rgba(49,60,240,.24)',
          }}>
            Começar um projeto
            <img src="../../assets/arrow-white.png" style={{ height:13 }}/>
          </button>
          <button style={{
            background:'transparent', color:'var(--ink)', border:'2px solid var(--ink)',
            padding:'14px 26px', borderRadius:10, fontFamily:'var(--font-body)',
            fontWeight:600, fontSize:16, cursor:'pointer',
          }}>Ver nossos cases</button>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
