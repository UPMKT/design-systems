/* global React */
const { useState } = React;

function ContactForm({ onSent }) {
  const [form, setForm] = useState({ name:'', email:'', project:'' });
  const [sent, setSent] = useState(false);
  const update = k => e => setForm({...form, [k]: e.target.value});
  const submit = (e) => { e.preventDefault(); setSent(true); onSent && onSent(form); };

  if (sent) return (
    <section style={{ padding:'120px 48px', textAlign:'center' }}>
      <img src="../../assets/arrow-blue.png" style={{ height:56, marginBottom:20 }}/>
      <h2 style={{ margin:0 }}>Recebemos seu contato!</h2>
      <p style={{ fontSize:18, color:'var(--fg-2)', marginTop:12 }}>
        A gente volta pra você em até 2 dias úteis, {form.name || 'beleza'}?
      </p>
    </section>
  );

  return (
    <section style={{ padding:'80px 48px', background:'var(--bone)' }}>
      <div style={{ maxWidth:720, margin:'0 auto' }}>
        <div className="eyebrow" style={{ marginBottom:12 }}>Contato</div>
        <h2 style={{ margin:0 }}>Conta pra gente.</h2>
        <form onSubmit={submit} style={{ marginTop:40, display:'flex', flexDirection:'column', gap:18 }}>
          <Field label="Nome" value={form.name} onChange={update('name')} placeholder="Como podemos te chamar?"/>
          <Field label="E-mail" value={form.email} onChange={update('email')} placeholder="seu@email.com" type="email"/>
          <Field label="Projeto" value={form.project} onChange={update('project')}
                 placeholder="Conta o que você tem em mente." textarea/>
          <button type="submit" style={{
            alignSelf:'flex-start', background:'var(--up-blue)', color:'#fff', border:0,
            padding:'14px 26px', borderRadius:10, fontFamily:'var(--font-body)',
            fontWeight:600, fontSize:16, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:10,
            boxShadow:'0 12px 32px rgba(49,60,240,.24)',
          }}>
            Enviar
            <img src="../../assets/arrow-white.png" style={{ height:12 }}/>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, textarea, type }) {
  const [focused, setFocused] = useState(false);
  const baseStyle = {
    padding:'14px 16px',
    border: focused ? '2px solid var(--up-blue)' : '1px solid var(--line)',
    borderRadius:8, fontFamily:'var(--font-body)', fontSize:16,
    background:'#fff', color:'var(--ink)', outline:'none',
    boxShadow: focused ? '0 0 0 4px rgba(49,60,240,.12)' : 'none',
    resize: textarea ? 'vertical' : undefined,
  };
  return (
    <label style={{ display:'flex', flexDirection:'column', gap:8 }}>
      <span style={{ fontSize:13, fontWeight:600 }}>{label}</span>
      {textarea
        ? <textarea rows={3} value={value} onChange={onChange} placeholder={placeholder}
                    onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} style={baseStyle}/>
        : <input type={type||'text'} value={value} onChange={onChange} placeholder={placeholder}
                 onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} style={baseStyle}/>}
    </label>
  );
}

window.ContactForm = ContactForm;
