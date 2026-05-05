/* global React */
function Ticker() {
  const items = ['Branding','Digital','Campanha','Performance','Conteúdo','Estratégia'];
  const row = items.concat(items).concat(items);
  return (
    <section style={{ background:'#313CF0', overflow:'hidden', padding:'18px 0' }}>
      <div style={{
        display:'inline-flex', gap:48, whiteSpace:'nowrap',
        animation:'tickerScroll 24s linear infinite',
        fontFamily:'Inter, sans-serif', fontWeight:600, fontSize:18,
        letterSpacing:'0.04em', textTransform:'uppercase', color:'#fff',
      }}>
        {row.map((t,i)=>(
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:48 }}>
            {t}
            <span style={{ width:6, height:6, borderRadius:999, background:'rgba(255,255,255,0.5)' }}/>
          </span>
        ))}
      </div>
    </section>
  );
}
window.Ticker = Ticker;
