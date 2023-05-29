import { Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Reset from "./Pages/Reset.js";
import Register from "./Pages/Register.js";
import ProductList from "./Pages/ProductList/index"
import ImageMockup from "./Pages/ImageMockup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset" element={<Reset />} />
        <Route path="/products/list" element={<ProductList  />}></Route>
        <Route path="/products/create" element={<ImageMockup />} />
      </Routes>
    </div>
  );
}

export default App;