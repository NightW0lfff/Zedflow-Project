import "./Main.css";

function Main() {
  return (
    <div className="container">
      <nav className="nav-top">
        <div className="nav-top-account">
          {/* <i></i> */}
          <span className="nav-top-account-title">Profile</span>
        </div>
      </nav>
      <div className="nav-top-header">
        <h2>Title</h2>
      </div>

      <div className="main-container">
        <div className="main-box"></div>
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
  );
}

export default Main;
