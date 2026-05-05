/* global React */
const STEPS = [
  { k:'E', t:'Estrutura', d:'Mapeamos o funil atual, identificamos gargalos e desenhamos o novo fluxo comercial ponta a ponta.' },
  { k:'I', t:'Implantação', d:'Scripts, cadências, CRM, playbooks. Tudo operando em 30 dias.' },
  { k:'X', t:'eXperimentação', d:'Testes A/B em ofertas, canais e argumentos até achar a combinação que converte.' },
  { k:'O', t:'Otimização', d:'Métricas, ritual de revisão semanal e previsibilidade medida em receita.' },
];

function Method() {
  return (
    <section id="metodo" style={{ padding:'100px 48px', position:'relative' }}>
      <div style={{ textAlign:'center', marginBottom:56 }}>
        <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.18em',
                      textTransform:'uppercase', color:'#5A82FF' }}>Método E.I.X.O.</div>
        <h2 style={{ fontFamily:'var(--font-condensed)', fontWeight:900,
                     fontSize:'clamp(40px,4.5vw,64px)', lineHeight:0.95,
                     textTransform:'uppercase', color:'#F0F0F8',
                     margin:'12px 0 0' }}>
          Quatro etapas<br/>pra sair da venda por sorte.
        </h2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
        {STEPS.map((s,i)=>(
          <div key={s.k} style={{
            position:'relative', padding:'28px 22px 24px', borderRadius:16,
            background:'rgba(12,12,34,0.55)',
            backdropFilter:'blur(20px) saturate(180%)',
            border:'1px solid rgba(49,60,240,0.28)',
            boxShadow:'inset 0 1px 0 rgba(255,255,255,.04), 0 8px 32px rgba(0,0,0,.4)',
          }}>
            <div style={{ position:'absolute', top:-18, left:22,
                          width:44, height:44, borderRadius:12,
                          background:'linear-gradient(135deg,#5A82FF,#313CF0)',
                          display:'flex', alignItems:'center', justifyContent:'center',
                          fontFamily:'var(--font-condensed)', fontWeight:900, fontSize:24,
                          color:'#fff',
                          boxShadow:'0 0 24px rgba(49,60,240,.6)' }}>{s.k}</div>
            <div style={{ marginTop:16 }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20,
                            color:'#F0F0F8' }}>{s.t}</div>
              <div style={{ fontSize:13, color:'rgba(240,240,248,.65)', marginTop:8, lineHeight:1.55 }}>
                {s.d}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Method = Method;
