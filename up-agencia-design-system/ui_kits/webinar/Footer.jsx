/* global React */
function WebFooter() {
  return (
    <footer style={{ padding:'40px 48px 28px',
                     background:'#05050F',
                     borderTop:'1px solid rgba(49,60,240,0.22)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
                    gap:24, flexWrap:'wrap' }}>
        <img src="../../assets/logo-up-white.png" style={{ height:26, opacity:0.9 }}/>
        <div style={{ display:'flex', gap:22, fontSize:12,
                      color:'rgba(240,240,248,.5)' }}>
          <a href="#" style={{ color:'inherit', border:0 }}>Termos de uso</a>
          <a href="#" style={{ color:'inherit', border:0 }}>Política de privacidade</a>
          <a href="#" style={{ color:'inherit', border:0 }}>contato@up.ag</a>
        </div>
        <div style={{ fontSize:11, color:'rgba(240,240,248,.35)' }}>
          © 2026 UP Agência · LGPD
        </div>
      </div>
    </footer>
  );
}
window.WebFooter = WebFooter;
