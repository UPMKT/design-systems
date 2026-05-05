/* global React */
function Benefits() {
  const items = [
    ['Diagnóstico', 'Um raio-x do seu funil atual'],
    ['Método E.I.X.O.', 'As 4 alavancas pra escalar'],
    ['Playbook', 'Scripts e templates prontos'],
    ['Comunidade', 'Grupo fechado de alunos'],
  ];
  return (
    <section style={{
      padding:'24px 48px', background:'rgba(8,8,24,0.5)',
      borderTop:'1px solid rgba(49,60,240,0.22)',
      borderBottom:'1px solid rgba(49,60,240,0.22)',
    }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32 }}>
        {items.map(([t,d],i)=>(
          <div key={t} style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ width:32, height:32, borderRadius:999,
                           background:'rgba(49,60,240,.15)',
                           border:'1px solid rgba(49,60,240,.4)',
                           display:'inline-flex', alignItems:'center', justifyContent:'center',
                           flex:'none' }}>
              <img src="../../assets/arrow-blue.png" style={{ height:11 }}/>
            </span>
            <div>
              <div style={{ fontWeight:700, fontSize:14, color:'#F0F0F8', letterSpacing:'-0.005em' }}>{t}</div>
              <div style={{ fontSize:12, color:'rgba(240,240,248,.55)', marginTop:2 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Benefits = Benefits;
