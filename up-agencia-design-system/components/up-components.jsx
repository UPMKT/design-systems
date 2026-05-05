/* UP Components Library v1
   Single-file consumable library. Loads after React+Babel.
   Exposes: window.UP = { Button, IconButton, Input, Textarea, Select, Card, Badge, Tag, Stack, Logo, Arrow }
   All components are theme-aware (read from tokens.css custom props) and a11y-ready.
*/

const UP = (() => {
  const { useState, useRef, useId, forwardRef } = React;

  // ---------- Logo / Arrow (SVG, recolorable) ----------
  const Logo = ({ variant = 'primary', size = 56, className = '', style = {}, ...rest }) => {
    // primary = black UP + blue arrow. mono-dark = all currentColor. mono-light = all currentColor.
    const isPrimary = variant === 'primary';
    return (
      <span className={`up-logo ${className}`} style={{ display:'inline-flex', height:size, ...style }} {...rest}>
        <img
          src={`assets/logo-up.svg`}
          alt="UP Agência"
          style={{ height:'100%', width:'auto',
                   filter: variant === 'mono-dark' ? 'brightness(0) invert(1)' :
                           variant === 'mono-light' ? 'brightness(0)' : 'none' }}
        />
      </span>
    );
  };

  const Arrow = ({ size = 24, color = 'currentColor', rotate = 0, style = {}, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 184 139"
      style={{ transform:`rotate(${rotate}deg)`, color, ...style }}
      fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M0 0h130l-26 47h-29v92H45L75 67H0V0zm130 0h54l38 139h-46l-26-92-20 14V0z"/>
    </svg>
  );

  // ---------- Button ----------
  const Button = forwardRef(({
    variant = 'primary',     // primary | secondary | ghost | outline
    size = 'md',             // sm | md | lg
    icon,                    // optional ReactNode (icon left)
    iconRight,               // optional ReactNode (icon right)
    pill = false,
    fullWidth = false,
    disabled = false,
    loading = false,
    children,
    style = {},
    ...rest
  }, ref) => {
    const sizes = {
      sm: { h: 36, px: 16, fz: 14 },
      md: { h: 48, px: 22, fz: 15 },
      lg: { h: 56, px: 28, fz: 16 },
    };
    const s = sizes[size];

    const variants = {
      primary: { bg: 'var(--brand)', color: 'var(--text-on-brand,#fff)', border:'1px solid transparent',
                 hoverBg:'var(--brand-hover)' },
      secondary:{ bg: 'var(--surface)', color: 'var(--text-strong)', border:'1px solid var(--border-1)',
                 hoverBg:'var(--surface-hover, var(--surface))' },
      ghost:    { bg: 'transparent', color: 'var(--text-strong)', border:'1px solid transparent',
                 hoverBg:'var(--surface)' },
      outline:  { bg: 'transparent', color: 'var(--brand)', border:'1px solid var(--brand)',
                 hoverBg:'rgba(49,60,240,0.08)' },
    };
    const v = variants[variant];
    const [hover, setHover] = useState(false);

    return (
      <button ref={ref} disabled={disabled || loading}
        onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
        style={{
          display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10,
          height:s.h, padding:`0 ${s.px}px`, fontSize:s.fz, fontWeight:600,
          fontFamily:'var(--font-heading)', letterSpacing:'-0.01em',
          background: hover && !disabled ? v.hoverBg : v.bg,
          color: v.color, border: v.border,
          borderRadius: pill ? 'var(--r-full,100px)' : 'var(--r-md,8px)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1, width: fullWidth ? '100%' : 'auto',
          transition: 'background 160ms cubic-bezier(0.2,0.8,0.2,1), transform 160ms',
          transform: hover && !disabled ? 'translateY(-1px)' : 'translateY(0)',
          ...style,
        }} {...rest}>
        {loading ? <Spinner size={s.fz} /> : icon}
        {children}
        {!loading && iconRight}
      </button>
    );
  });

  const IconButton = ({ icon, label, size = 'md', variant = 'ghost', ...rest }) => {
    const sizes = { sm: 36, md: 44, lg: 52 };
    return <Button variant={variant} aria-label={label} pill
      style={{ width: sizes[size], height: sizes[size], padding: 0 }} {...rest}>{icon}</Button>;
  };

  const Spinner = ({ size = 16 }) => (
    <span style={{ width:size, height:size, border:'2px solid currentColor', borderTopColor:'transparent',
      borderRadius:'50%', animation:'up-spin 600ms linear infinite' }} />
  );

  // ---------- Input ----------
  const Input = forwardRef(({ label, hint, error, leftIcon, rightIcon, id, style = {}, ...rest }, ref) => {
    const autoId = useId();
    const fid = id || autoId;
    return (
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {label && <label htmlFor={fid} style={{ fontFamily:'var(--font-caption)', fontSize:13, fontWeight:600,
          color: error ? 'var(--danger)' : 'var(--text-muted)', letterSpacing:'0.04em', textTransform:'uppercase' }}>{label}</label>}
        <div style={{ position:'relative' }}>
          {leftIcon && <span style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)',
            color:'var(--text-muted)', display:'inline-flex' }}>{leftIcon}</span>}
          <input ref={ref} id={fid}
            style={{
              width:'100%', height:48, padding: leftIcon ? '0 16px 0 44px' : '0 16px',
              background:'var(--surface)', color:'var(--text-strong)',
              border:`1px solid ${error ? 'var(--danger)' : 'var(--border-1)'}`,
              borderRadius:'var(--r-md, 8px)', fontFamily:'var(--font-body)', fontSize:15,
              outline:'none', transition:'border-color 160ms, box-shadow 160ms',
              ...style,
            }}
            onFocus={e => { e.target.style.borderColor='var(--brand)'; e.target.style.boxShadow='0 0 0 3px rgba(49,60,240,0.18)'; }}
            onBlur={e => { e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border-1)'; e.target.style.boxShadow='none'; }}
            {...rest} />
          {rightIcon && <span style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)',
            color:'var(--text-muted)' }}>{rightIcon}</span>}
        </div>
        {(hint || error) && <span style={{ fontSize:13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}</span>}
      </div>
    );
  });

  const Textarea = forwardRef(({ label, hint, error, rows=4, id, style={}, ...rest }, ref) => {
    const autoId = useId();
    const fid = id || autoId;
    return (
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {label && <label htmlFor={fid} style={{ fontFamily:'var(--font-caption)', fontSize:13, fontWeight:600,
          color: error ? 'var(--danger)' : 'var(--text-muted)', letterSpacing:'0.04em', textTransform:'uppercase' }}>{label}</label>}
        <textarea ref={ref} id={fid} rows={rows}
          style={{ padding:14, background:'var(--surface)', color:'var(--text-strong)',
            border:`1px solid ${error ? 'var(--danger)' : 'var(--border-1)'}`, borderRadius:'var(--r-md,8px)',
            fontFamily:'var(--font-body)', fontSize:15, outline:'none', resize:'vertical', ...style }}
          onFocus={e => { e.target.style.borderColor='var(--brand)'; e.target.style.boxShadow='0 0 0 3px rgba(49,60,240,0.18)'; }}
          onBlur={e => { e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border-1)'; e.target.style.boxShadow='none'; }}
          {...rest} />
        {(hint || error) && <span style={{ fontSize:13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
      </div>
    );
  });

  // ---------- Card ----------
  const Card = ({ variant='default', padding=24, children, style={}, ...rest }) => {
    const variants = {
      default: { bg:'var(--surface)', border:'1px solid var(--border-1)' },
      glass:   { bg:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)',
                 backdropFilter:'blur(24px) saturate(180%)', WebkitBackdropFilter:'blur(24px) saturate(180%)' },
      brand:   { bg:'var(--brand)', color:'#fff', border:'1px solid transparent' },
      outline: { bg:'transparent', border:'1px solid var(--border-1)' },
    };
    const v = variants[variant];
    return <div style={{ ...v, padding, borderRadius:'var(--r-lg, 12px)', ...style }} {...rest}>{children}</div>;
  };

  // ---------- Badge / Tag ----------
  const Badge = ({ tone='neutral', children, style={}, ...rest }) => {
    const tones = {
      neutral: { bg:'var(--surface)',  fg:'var(--text-strong)', bd:'var(--border-1)' },
      brand:   { bg:'var(--brand)',    fg:'#fff', bd:'transparent' },
      success: { bg:'rgba(34,197,94,0.16)',  fg:'#22C55E', bd:'rgba(34,197,94,0.30)' },
      warning: { bg:'rgba(245,158,11,0.16)', fg:'#F59E0B', bd:'rgba(245,158,11,0.30)' },
      danger:  { bg:'rgba(239,68,68,0.16)',  fg:'#EF4444', bd:'rgba(239,68,68,0.30)' },
    };
    const t = tones[tone];
    return <span style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding:'4px 10px', background:t.bg, color:t.fg,
      border:`1px solid ${t.bd}`, borderRadius:'var(--r-full,100px)',
      fontFamily:'var(--font-caption)', fontSize:12, fontWeight:600,
      letterSpacing:'0.04em', textTransform:'uppercase', ...style
    }} {...rest}>{children}</span>;
  };

  const Tag = ({ children, onRemove, style={}, ...rest }) => (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:8,
      padding:'6px 14px', background:'var(--surface)', color:'var(--text-strong)',
      border:'1px solid var(--border-1)', borderRadius:'var(--r-full,100px)',
      fontFamily:'var(--font-body)', fontSize:13, fontWeight:500, ...style
    }} {...rest}>
      {children}
      {onRemove && <button onClick={onRemove} aria-label="remove" style={{
        all:'unset', cursor:'pointer', width:16, height:16, display:'inline-flex',
        alignItems:'center', justifyContent:'center', borderRadius:'50%',
        background:'rgba(255,255,255,0.1)', fontSize:12, lineHeight:1
      }}>×</button>}
    </span>
  );

  // ---------- Stack helper ----------
  const Stack = ({ direction='column', gap=12, align, justify, wrap, children, style={}, ...rest }) => (
    <div style={{ display:'flex', flexDirection:direction, gap, alignItems:align, justifyContent:justify,
      flexWrap: wrap ? 'wrap' : 'nowrap', ...style }} {...rest}>{children}</div>
  );

  // Inject keyframes once
  if (typeof document !== 'undefined' && !document.getElementById('up-anim')) {
    const s = document.createElement('style');
    s.id = 'up-anim';
    s.textContent = `@keyframes up-spin { to { transform: rotate(360deg); } }`;
    document.head.appendChild(s);
  }

  return { Button, IconButton, Input, Textarea, Card, Badge, Tag, Stack, Logo, Arrow, Spinner };
})();

window.UP = UP;
