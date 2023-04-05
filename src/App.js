import "./style.css";

function App() {
  const style = {
    display: "block",
  };

  return (
    <nav className="nav">
      <a href="/" className="site-tile">
        <img src="zedflow-logo.png" alt="Zedflow Logo" className="logo" />
      </a>
      <ul>
        <li>
          <a href="/" id="nav-item product-dropdown">
            Product
          </a>
          <div id="nav-item product-list" style={style}>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </div>
        </li>
        <li>Stock</li>
        <li>Sale</li>
        <li>Variant</li>
        <li>Trademark</li>
        <li>Keyword</li>
        <li>Artist</li>
        <li>Category</li>
        <li>Performance</li>
        <li>Setting</li>
      </ul>
    </nav>
  );
}

export default App;
