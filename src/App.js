import "./style.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
// import Test from "./Test.js";

function App() {
  return (
    <div className="App">
      <container>
        <Sidebar />
        <Main />
      </container>
    </div>
  );
}

export default App;
