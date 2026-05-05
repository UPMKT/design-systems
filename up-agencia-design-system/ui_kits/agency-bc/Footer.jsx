/* global React */
function BCFooter() {
  return (
    <footer style={{ background:'#141414', padding:'60px 20px 28px' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40,
                      paddingBottom:48, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <img src="../../assets/logo-allwhite.png" style={{ height:30, marginBottom:18 }}/>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:14,
                        lineHeight:1.6, color:'#7A7A7A', maxWidth:320, margin:0 }}>
              Agência criativa para marcas que querem sair do papel. Branding, digital e campanhas com método.
            </p>
          </div>
          {[['Empresa',['Sobre','Método','Time','Carreira']],
            ['Trabalhos',['Branding','Digital','Campanha','Performance']],
            ['Contato',['contato@up.ag','+55 11 0000-0000','LinkedIn','Instagram']]].map(([t,items]) => (
            <div key={t}>
              <div style={{ fontFamily:'Inter, sans-serif', fontWeight:600, fontSize:11,
                            letterSpacing:'0.14em', textTransform:'uppercase',
                            color:'rgba(255,255,255,0.5)', marginBottom:14 }}>{t}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {items.map(l=>(
                  <a key={l} href="#" style={{
                    fontFamily:'DM Sans, sans-serif', fontSize:14,
                    color:'#DDDDDD', border:0, textDecoration:'none' }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'space-between',
                      paddingTop:24, fontFamily:'DM Sans, sans-serif', fontSize:12,
                      color:'#7A7A7A', letterSpacing:'-0.01em' }}>
          <span>© 2026 UP Agência · CNPJ 00.000.000/0001-00</span>
          <span>LGPD · Termos · Privacidade</span>
        </div>
      </div>
    </footer>
  );
}
window.BCFooter = BCFooter;
