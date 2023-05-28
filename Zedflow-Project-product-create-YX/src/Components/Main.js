import Sidebar from "../Components/Sidebar";
import "./Main.css";

function Main(props) {
  return (
    <container>
      <Sidebar />
      <div className="content-container">
        <nav className="nav-top">
          <div className="nav-top-account">
            {/* <i></i> */}
            <span className="nav-top-account-title">Profile</span>
          </div>
        </nav>
        <div className="nav-top-header">
          <h2>This is a title</h2>
        </div>

        <div className="main-container">
          <div className="main-box">
            <h1>This is a content</h1>
            {props.children}
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <span className="copyright">© 2023</span>
            <a href="/home" className="brand-name">
              Umbrella Ink
            </a>
          </div>
        </footer>
      </div>
    </container>
  );
}

export default Main;
