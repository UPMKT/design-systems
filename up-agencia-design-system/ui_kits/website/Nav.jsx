/* global React */
const { useState } = React;

function Nav({ onNav }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '20px 48px', borderBottom: '1px solid var(--line)',
      background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <a href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav('home');}}
         style={{ border: 0, display: 'flex', alignItems: 'center' }}>
        <img src="../../assets/logo-up-blue.png" alt="UP" style={{ height: 26 }}/>
      </a>
      <div style={{ display:'flex', gap:28, marginLeft:32, fontSize:14, fontWeight:500 }}>
        {['Cases','Serviços','Estúdio','Contato'].map((l,i)=>(
          <a key={l} href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav(l.toLowerCase());}}
             style={{ color:'var(--fg-1)', border:0 }}>{l}</a>
        ))}
      </div>
      <div style={{ marginLeft:'auto', display:'flex', gap:10, alignItems:'center' }}>
        <button onClick={()=>onNav && onNav('contato')} style={{
          background:'var(--ink)', color:'#fff', border:0,
          padding:'10px 18px', borderRadius:8, fontFamily:'var(--font-body)',
          fontWeight:600, fontSize:14, cursor:'pointer',
          display:'inline-flex', alignItems:'center', gap:8,
        }}>
          Começar projeto
          <img src="../../assets/arrow-white.png" style={{ height: 11 }}/>
        </button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
