import { Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProductCreate from "./Pages/ProductCreate.js";
import Register from "./Pages/Register.js";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/create" element={<ProductCreate />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/list" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
}

export default App;