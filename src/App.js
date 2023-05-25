import { Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ImageMockup from "./Pages/ImageMockup";
import Register from "./Pages/Register.js";
import ProductList from "./Pages/ProductList/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/create" element={<ImageMockup />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;