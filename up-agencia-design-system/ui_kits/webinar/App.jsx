/* global React, WebNav, WebHero, Benefits, About, Method, Numbers, FinalCTA, WebFooter */
function App() {
  return (
    <div style={{ background:'#05050F', color:'#F0F0F8', minHeight:'100vh' }}>
      <WebNav/>
      <WebHero/>
      <Benefits/>
      <About/>
      <Method/>
      <Numbers/>
      <FinalCTA/>
      <WebFooter/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
