/* global React */
const { useEffect, useRef } = React;

function BCHero() {
  const ref = useRef(null);
  useEffect(() => {
    const words = ref.current?.querySelectorAll('.word') || [];
    words.forEach((w,i) => {
      w.style.opacity = '0';
      w.style.transform = 'translateY(0.4em)';
      requestAnimationFrame(() => {
        w.style.transition = `opacity 0.55s cubic-bezier(0.2,0.7,0.2,1) ${i*0.08}s, transform 0.55s cubic-bezier(0.2,0.7,0.2,1) ${i*0.08}s`;
        w.style.opacity = '1';
        w.style.transform = 'translateY(0)';
      });
    });
  }, []);
  const headline = 'Marca em movimento. Negócio em alta.'.split(' ');
  return (
    <section style={{
      position:'relative', padding:'140px 20px 100px',
      background:'#020202', overflow:'hidden',
    }}>
      {/* Subtle blue radial */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse at 50% 0%, rgba(49,60,240,0.18), transparent 55%)' }}/>
      <div style={{ position:'relative', maxWidth:1140, margin:'0 auto' }}>
        <div ref={ref} style={{
          fontFamily:'Inter, sans-serif', fontWeight:400,
          fontSize:'clamp(48px, 7vw, 75.2px)', lineHeight:1,
          letterSpacing:'-0.022em', color:'#fff',
          maxWidth:900,
        }}>
          {headline.map((w,i)=>(
            <span key={i} className="word" style={{ display:'inline-block', marginRight:'0.25em' }}>{w}</span>
          ))}
        </div>
        <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:18, color:'#DDDDDD',
                    lineHeight:1.5, letterSpacing:'-0.01em', maxWidth:560, marginTop:32 }}>
          Somos UP — uma agência criativa que tira marca do papel e coloca em movimento. Branding, digital e campanhas pra negócios que querem subir de patamar.
        </p>
        <div style={{ display:'flex', gap:14, marginTop:40 }}>
          <button style={{
            background:'rgb(209,209,209)', color:'#000', border:0,
            padding:'16px 30px', borderRadius:0,
            fontFamily:'DM Sans, sans-serif', fontWeight:400, fontSize:15,
            cursor:'pointer', letterSpacing:'-0.01em',
          }}>Iniciar projeto</button>
          <button style={{
            background:'transparent', color:'#fff', border:'1px solid rgba(255,255,255,0.18)',
            padding:'16px 30px', borderRadius:100,
            fontFamily:'Inter, sans-serif', fontWeight:500, fontSize:15,
            cursor:'pointer',
          }}>Ver trabalhos →</button>
        </div>
      </div>

      {/* Scroll indicator — round spinning text */}
      <div style={{ position:'absolute', bottom:30, right:30, width:96, height:96 }}>
        <svg viewBox="0 0 96 96" style={{ width:'100%', height:'100%',
                                          animation:'spinSlow 14s linear infinite' }}>
          <defs><path id="bcCirc" d="M48,48 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs>
          <text fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" letterSpacing="2.5" fill="#fff" style={{textTransform:'uppercase'}}>
            <textPath href="#bcCirc">SCROLL · DOWN · SCROLL · DOWN · </textPath>
          </text>
        </svg>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width:8, height:8, borderRadius:999, background:'#313CF0',
                        boxShadow:'0 0 16px #313CF0' }}/>
        </div>
      </div>
    </section>
  );
}
window.BCHero = BCHero;
