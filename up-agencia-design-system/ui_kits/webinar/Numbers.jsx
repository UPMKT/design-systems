/* global React */
function Numbers() {
  const stats = [
    { n:'+200', l:'empresas atendidas' },
    { n:'R$ 180M', l:'em receita nova gerada' },
    { n:'60 dias', l:'pra primeira virada' },
    { n:'4,9/5', l:'NPS dos alunos' },
  ];
  return (
    <section id="numeros" style={{
      padding:'80px 48px', background:'rgba(8,8,24,0.8)',
      borderTop:'1px solid rgba(49,60,240,0.22)',
      borderBottom:'1px solid rgba(49,60,240,0.22)',
    }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32,
                    textAlign:'center' }}>
        {stats.map((s,i)=>(
          <div key={s.l}>
            <div style={{ fontFamily:'var(--font-condensed)', fontWeight:900,
                          fontSize:'clamp(48px,5.5vw,80px)', lineHeight:0.95,
                          color:'transparent',
                          backgroundImage:'linear-gradient(180deg,#F0F0F8,#5A82FF)',
                          WebkitBackgroundClip:'text', backgroundClip:'text' }}>{s.n}</div>
            <div style={{ fontSize:12, fontWeight:600, color:'rgba(240,240,248,.55)',
                          textTransform:'uppercase', letterSpacing:'0.12em', marginTop:10 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Numbers = Numbers;
