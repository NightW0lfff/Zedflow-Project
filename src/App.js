import "./style.css";

function App() {
  const style = {
    display: "none",
  };

  return (
    <nav className="nav">
      <a href="/" className="site-tile">
        <h1>Zedflow Project</h1>
        <ul>
          <li>
            <a href="/" id="product-dropdown">
              Product
            </a>
            <div id="product-list" style={style}>
              <ul>
                <li>Product 1 - $10.00</li>
                <li>Product 2 - $15.00</li>
                <li>Product 3 - $20.00</li>
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
      </a>
    </nav>
  );
}

export default App;
