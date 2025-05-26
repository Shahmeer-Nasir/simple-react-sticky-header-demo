import { StickyHeader } from "@shahmeernasir/simple-react-sticky-header";

function App() {
  return (
    <div style={{width: '100%'}}>
      <StickyHeader
        className="my-custom-header"
        onHeaderHeightChange={(h) => console.log('Header height:', h)}
      >
        <h1>Sticky Header Content</h1>
      </StickyHeader>

      <div style={{ height: '200vh', paddingTop: '2rem' }}>
        Scroll to test sticky behavior.
      </div>
    </div>
  );
}

export default App;
