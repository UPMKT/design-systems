/* global React, Nav, Hero, CaseGrid, Services, CTABlock, ContactForm, Footer */
const { useState } = React;

function App() {
  const [page, setPage] = useState('home');
  const goto = (p) => { setPage(p === 'home' ? 'home' : p); window.scrollTo({top:0, behavior:'instant'}); };
  return (
    <div style={{ background:'#fff', color:'var(--ink)', minHeight:'100vh' }}>
      <Nav onNav={goto}/>
      {page === 'home' && <>
        <Hero onCTA={()=>goto('contato')}/>
        <Services/>
        <CaseGrid/>
        <CTABlock onClick={()=>goto('contato')}/>
      </>}
      {page === 'contato' && <ContactForm onSent={()=>{}}/>}
      {page === 'cases' && <CaseGrid/>}
      {page === 'serviços' && <Services/>}
      {page === 'estúdio' && (
        <section style={{ padding:'120px 48px', maxWidth:880, margin:'0 auto' }}>
          <div className="eyebrow" style={{ marginBottom:16 }}>Estúdio</div>
          <h1 style={{ margin:0 }}>Somos 18. A gente trabalha juntos, na mesma sala.</h1>
          <p style={{ fontSize:20, lineHeight:1.5, color:'var(--fg-2)', marginTop:28, maxWidth:640 }}>
            UP começou em 2019 como um projeto paralelo. Hoje somos um estúdio independente
            em São Paulo, trabalhando com marcas brasileiras em todos os estágios — do pitch à escala.
          </p>
        </section>
      )}
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
