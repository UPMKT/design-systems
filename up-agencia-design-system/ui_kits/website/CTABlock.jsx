/* global React */
function CTABlock({ onClick }) {
  return (
    <section style={{ padding:'80px 48px' }}>
      <div style={{
        background:'var(--up-blue)', color:'#fff', borderRadius:16,
        padding:'72px 56px', position:'relative', overflow:'hidden',
        display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:48, alignItems:'center',
      }}>
        <img src="../../assets/arrow-outline-white.png"
             style={{ position:'absolute', right:-60, top:-40, height:340, opacity:0.25 }}/>
        <div style={{ position:'relative' }}>
          <h2 style={{ margin:0, color:'#fff' }}>Bora fazer juntos?</h2>
          <p style={{ marginTop:16, fontSize:18, lineHeight:1.5, opacity:0.9, maxWidth:440 }}>
            Conta pra gente o que você tem em mente. A gente volta em até 2 dias úteis.
          </p>
        </div>
        <div style={{ position:'relative', display:'flex', justifyContent:'flex-end' }}>
          <button onClick={onClick} style={{
            background:'#fff', color:'var(--up-blue)', border:0,
            padding:'18px 30px', borderRadius:10, fontFamily:'var(--font-body)',
            fontWeight:700, fontSize:17, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:10,
          }}>
            Começar um projeto
            <img src="../../assets/arrow-blue.png" style={{ height:14 }}/>
          </button>
        </div>
      </div>
    </section>
  );
}
window.CTABlock = CTABlock;
