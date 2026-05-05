/* global React */
function WebNav() {
  return (
    <nav style={{
      position:'sticky', top:0, zIndex:20,
      display:'flex', alignItems:'center', gap:14,
      padding:'18px 48px',
      background:'rgba(5,5,15,0.72)',
      backdropFilter:'blur(20px) saturate(180%)',
      borderBottom:'1px solid rgba(49,60,240,0.22)',
    }}>
      <img src="../../assets/logo-up-white.png" style={{ height:24 }}/>
      <div style={{ display:'flex', gap:24, marginLeft:36, fontSize:13, fontWeight:500,
                    color:'rgba(240,240,248,.7)' }}>
        <a href="#sobre" style={{ color:'inherit', border:0 }}>Sobre</a>
        <a href="#metodo" style={{ color:'inherit', border:0 }}>Método</a>
        <a href="#numeros" style={{ color:'inherit', border:0 }}>Números</a>
        <a href="#inscricao" style={{ color:'inherit', border:0 }}>Inscrição</a>
      </div>
      <div style={{ marginLeft:'auto' }}>
        <a href="#inscricao" style={{ border:0, textDecoration:'none' }}>
          <button style={{
            background:'linear-gradient(90deg,#5A82FF,#313CF0)', color:'#fff', border:0,
            padding:'8px 8px 8px 18px', borderRadius:999, fontFamily:'var(--font-body)',
            fontWeight:600, fontSize:13, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:10,
            boxShadow:'0 8px 24px rgba(49,60,240,.35)',
          }}>
            Garantir vaga
            <span style={{ width:24, height:24, borderRadius:999, background:'#fff',
                           display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
              <img src="../../assets/arrow-blue.png" style={{ height:9 }}/>
            </span>
          </button>
        </a>
      </div>
    </nav>
  );
}
window.WebNav = WebNav;
