import "../TabList.css";
import VariantFeatures from "./VariantFeatures";

function VariantList(props) {
  return (
    <ul className="list-item variant-list">
      <li>Tshirt</li>
      <li>Mugs</li>
      <li>Tote Bags</li>
      <li>Cushion Cover</li>
      <li>Hoodies</li>
      <li>Kids</li>
      <li>
        <ul className="nav-item variant-features">
          <span>Features</span>
          <VariantFeatures />
        </ul>
      </li>
    </ul>
  );
}

export default VariantList;
