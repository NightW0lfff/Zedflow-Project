import "./TabList.css";
import ProductList from "./Product/ProductList";
import StockList from "./Stock/StockList";
import SaleList from "./Sale/SaleList";
import VariantList from "./Variant/VariantList";
import TrademarkList from "./TradeMark/TrademarkList";

function TabList(props) {
  return (
    <nav className="navbar">
      <a href="/" className="site-tile">
        <img src="zedflow-logo.png" alt="Zedflow Logo" className="logo" />
      </a>
      <ul>
        <li className="nav-item">
          <div className=" product-dropdown">Product</div>
          <ProductList />
        </li>
        <li className="nav-item">
          <div className="stock-dropdown">Stock</div>
          <StockList />
        </li>
        <li className="nav-item">
          <div className="sale-dropdown">Sale</div>
          <SaleList />
        </li>
        <li className="nav-item">
          <div className="Variant-dropdown">Variant</div>
          <VariantList />
        </li>
        <li className="nav-item">
          <div className="trademark-dropdown">Trademark</div>
          <TrademarkList />
        </li>
        <li className="nav-item">Keyword</li>
        <li className="nav-item">Artist</li>
        <li className="nav-item">Category</li>
        <li className="nav-item">Performance</li>
        <li className="nav-item">Setting</li>
      </ul>
    </nav>
  );
}

export default TabList;
