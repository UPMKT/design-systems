/* global React */
function Cursor() {
  const inner = React.useRef(null);
  const outer = React.useRef(null);
  React.useEffect(() => {
    let mx=0,my=0,ix=0,iy=0,ox=0,oy=0,raf;
    const move = (e) => { mx=e.clientX; my=e.clientY; };
    const tick = () => {
      ix += (mx-ix)*0.25; iy += (my-iy)*0.25;
      ox += (mx-ox)*0.15; oy += (my-oy)*0.15;
      if(inner.current) inner.current.style.transform = `translate(${ix-4}px,${iy-4}px)`;
      if(outer.current) outer.current.style.transform = `translate(${ox-20}px,${oy-20}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={inner} style={{ position:'fixed', top:0, left:0, width:8, height:8,
                                borderRadius:999, background:'#fff', pointerEvents:'none',
                                zIndex:9999, mixBlendMode:'difference' }}/>
      <div ref={outer} style={{ position:'fixed', top:0, left:0, width:40, height:40,
                                borderRadius:999, border:'2px solid #313CF0',
                                pointerEvents:'none', zIndex:9999 }}/>
    </>
  );
}
window.Cursor = Cursor;
