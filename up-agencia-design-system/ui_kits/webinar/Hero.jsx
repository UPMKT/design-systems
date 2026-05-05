/* global React */
const { useState } = React;

function WebHero() {
  const [form, setForm] = useState({ name:'', email:'', whats:'' });
  const [sent, setSent] = useState(false);
  return (
    <section style={{ position:'relative', padding:'80px 48px 100px', overflow:'hidden' }}>
      {/* Radial glow background */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        background:`radial-gradient(circle at 22% 35%, rgba(49,60,240,0.35) 0%, transparent 40%),
                   radial-gradient(circle at 85% 85%, rgba(49,60,240,0.2) 0%, transparent 45%)` }}/>
      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1.15fr 1fr',
                    gap:64, alignItems:'center' }}>
        {/* LEFT */}
        <div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10,
                        padding:'6px 14px', borderRadius:999,
                        border:'1px solid rgba(49,60,240,.4)',
                        background:'rgba(49,60,240,.12)',
                        fontSize:12, fontWeight:600, color:'#5A82FF',
                        textTransform:'uppercase', letterSpacing:'0.12em' }}>
            <span style={{ width:6, height:6, borderRadius:999, background:'#5A82FF',
                           boxShadow:'0 0 12px #5A82FF' }}/>
            Webinar ao vivo · 28/Abr · 20h
          </div>
          <h1 style={{ fontFamily:'var(--font-condensed)', fontWeight:900,
                       fontSize:'clamp(56px, 7vw, 104px)', lineHeight:0.92,
                       letterSpacing:'0.005em', textTransform:'uppercase',
                       color:'#F0F0F8', margin:'28px 0 20px' }}>
            Estruture<br/>seu <span style={{ color:'transparent',
              backgroundImage:'linear-gradient(90deg,#5A82FF,#313CF0)',
              WebkitBackgroundClip:'text', backgroundClip:'text' }}>comercial</span><br/>em 60 dias.
          </h1>
          <p style={{ fontSize:18, lineHeight:1.55, color:'rgba(240,240,248,.7)',
                      maxWidth:500 }}>
            Um workshop ao vivo de 90 minutos pra donos de negócio que querem parar
            de vender na sorte e construir uma máquina de aquisição previsível.
          </p>
          <div style={{ display:'flex', gap:20, marginTop:36, flexWrap:'wrap' }}>
            {[['+2.400','alunos formados'],['60 dias','de método'],['4,9/5','avaliação média']].map(([n,l])=>(
              <div key={l}>
                <div style={{ fontFamily:'var(--font-condensed)', fontWeight:900, fontSize:36,
                              color:'#5A82FF', lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:12, color:'rgba(240,240,248,.5)',
                              textTransform:'uppercase', letterSpacing:'0.1em', marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT — Form card */}
        <div id="inscricao" style={{
          padding:28, borderRadius:20,
          background:'rgba(8,8,24,0.55)',
          backdropFilter:'blur(28px) saturate(180%)',
          WebkitBackdropFilter:'blur(28px) saturate(180%)',
          border:'1px solid rgba(49,60,240,0.35)',
          boxShadow:'0 0 40px rgba(49,60,240,0.25), 0 24px 60px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.06)',
        }}>
          <div style={{ fontFamily:'var(--font-condensed)', fontWeight:900, fontSize:28,
                        textTransform:'uppercase', color:'#F0F0F8', lineHeight:1, letterSpacing:'0.01em' }}>
            Garanta sua vaga
          </div>
          <div style={{ fontSize:13, color:'rgba(240,240,248,.6)', marginTop:6 }}>
            Gratuito. Vagas limitadas. Presença sorteia um diagnóstico comercial.
          </div>
          {sent ? (
            <div style={{ marginTop:20, padding:'20px 16px',
                          border:'1px solid rgba(49,60,240,.4)', borderRadius:12,
                          color:'#F0F0F8', textAlign:'center' }}>
              <img src="../../assets/arrow-blue.png" style={{ height:28, marginBottom:8 }}/>
              <div style={{ fontWeight:600 }}>Inscrição confirmada.</div>
              <div style={{ fontSize:13, color:'rgba(240,240,248,.6)', marginTop:4 }}>
                Enviamos o link pro seu WhatsApp.
              </div>
            </div>
          ) : (
            <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}}
                  style={{ marginTop:20, display:'flex', flexDirection:'column', gap:12 }}>
              <DarkInput placeholder="Seu nome" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
              <DarkInput placeholder="Seu melhor e-mail" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
              <DarkInput placeholder="WhatsApp (DDD + número)" value={form.whats} onChange={e=>setForm({...form, whats:e.target.value})}/>
              <button type="submit" style={{
                marginTop:6, background:'linear-gradient(90deg,#5A82FF,#313CF0)', color:'#fff', border:0,
                padding:'14px 20px', borderRadius:12, fontFamily:'var(--font-body)',
                fontWeight:700, fontSize:15, cursor:'pointer', letterSpacing:'0.02em',
                textTransform:'uppercase',
                boxShadow:'0 0 32px rgba(49,60,240,.45), inset 0 1px 0 rgba(255,255,255,.25)',
              }}>Quero participar →</button>
              <div style={{ fontSize:11, color:'rgba(240,240,248,.4)', textAlign:'center' }}>
                Seus dados estão protegidos pela LGPD. Sem spam.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function DarkInput({ ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input {...props}
      onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
      style={{
        padding:'14px 16px',
        background:'rgba(240,240,248,0.04)',
        border: focused ? '1px solid #5A82FF' : '1px solid rgba(240,240,248,0.12)',
        borderRadius:10, fontFamily:'var(--font-body)', fontSize:15,
        color:'#F0F0F8', outline:'none',
        boxShadow: focused ? '0 0 0 4px rgba(49,60,240,.18)' : 'none',
      }}/>
  );
}

window.WebHero = WebHero;
