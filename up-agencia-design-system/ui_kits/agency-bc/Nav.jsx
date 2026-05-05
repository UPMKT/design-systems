/* global React */
function BCNav() {
  return (
    <nav style={{
      position:'sticky', top:0, zIndex:20,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'18px 20px',
      backdropFilter:'blur(10px) saturate(160%)',
      WebkitBackdropFilter:'blur(10px) saturate(160%)',
      background:'rgba(0,0,0,0.35)',
    }}>
      <img src="../../assets/logo-allwhite.png" style={{ height:28 }}/>

      <div style={{
        display:'flex', alignItems:'center', gap:6,
        padding:'6px 10px',
        background:'rgba(255,255,255,0.04)',
        border:'1px solid rgba(255,255,255,0.08)',
        borderRadius:40,
      }}>
        {['Trabalhos','Estúdio','Método','Diário'].map((l,i)=>(
          <a key={l} href="#" style={{
            padding:'6px 14px', borderRadius:999,
            fontFamily:'Inter,sans-serif', fontWeight:400, fontSize:15,
            color: i===0 ? '#fff' : 'rgba(255,255,255,0.78)',
            textDecoration:'none', border:0,
            background: i===0 ? 'rgba(49,60,240,0.18)' : 'transparent',
          }}>{l}</a>
        ))}
      </div>

      <a href="#" style={{ border:0, textDecoration:'none' }}>
        <button style={{
          background:'#0C0D17', color:'#fff', border:0,
          padding:'14px 28px', borderRadius:100,
          fontFamily:'Inter,sans-serif', fontWeight:500, fontSize:15,
          cursor:'pointer', letterSpacing:'-0.01em',
        }}>Contato</button>
      </a>
    </nav>
  );
}
window.BCNav = BCNav;
