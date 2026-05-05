/* global React */
function Footer() {
  return (
    <footer style={{ background:'var(--ink)', color:'#fff', padding:'64px 48px 36px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr', gap:40 }}>
        <div>
          <img src="../../assets/logo-up-white.png" style={{ height:36, marginBottom:20 }}/>
          <div style={{ fontSize:14, opacity:0.7, maxWidth:280, lineHeight:1.55 }}>
            Agência independente. Rua Harmonia, 1001 — Vila Madalena, São Paulo.
          </div>
        </div>
        <FooterCol title="Agência" links={['Sobre','Estúdio','Carreiras','Imprensa']}/>
        <FooterCol title="Trabalho" links={['Cases','Serviços','Parceiros']}/>
        <FooterCol title="Contato" links={['ola@up.ag','+55 11 0000-0000','Instagram','LinkedIn']}/>
      </div>
      <div style={{ marginTop:48, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.12)',
                    display:'flex', justifyContent:'space-between', fontSize:12,
                    color:'rgba(255,255,255,.5)' }}>
        <div>© 2026 UP Agência. Feito no Brasil.</div>
        <div style={{ display:'flex', gap:20 }}>
          <a href="#" style={{ color:'inherit', border:0 }}>Privacidade</a>
          <a href="#" style={{ color:'inherit', border:0 }}>Termos</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="eyebrow" style={{ color:'rgba(255,255,255,.6)', marginBottom:16 }}>{title}</div>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {links.map(l=><a key={l} href="#" style={{ color:'#fff', border:0, fontSize:14, opacity:0.85 }}>{l}</a>)}
      </div>
    </div>
  );
}
window.Footer = Footer;
