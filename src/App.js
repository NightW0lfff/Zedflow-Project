
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Reset from "./Pages/Reset.js";
import ProductCreate from "./Pages/ProductCreate.js";
import Register from "./Pages/Register.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/create" element={<ProductCreate />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;