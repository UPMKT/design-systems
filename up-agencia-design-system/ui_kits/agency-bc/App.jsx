/* global React, Cursor, BCNav, BCHero, Ticker, Services, Blog, BCFooter */
function App() {
  return (
    <div style={{ background:'#000', minHeight:'100vh' }}>
      <Cursor/>
      <BCNav/>
      <BCHero/>
      <Ticker/>
      <Services/>
      <Ticker/>
      <Blog/>
      <BCFooter/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
