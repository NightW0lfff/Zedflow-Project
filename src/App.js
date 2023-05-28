import { Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProductCreate from "./Pages/ProductCreate";
import Tshirtvariant from "./Pages/Tshirtvariant";
import Mugvariant from "./Pages/Mugvariant";
import PCsecond from "./Pages/PCsecond";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/create" element={<ProductCreate />}></Route>
        <Route path="/variant/t-shirt" element={<Tshirtvariant />}></Route>
        <Route path="/variant/mug" element={<Mugvariant />}></Route>
        <Route path="/pcsecond" element={<PCsecond />}></Route>
      </Routes>
    </div>
  );
}

export default App;
