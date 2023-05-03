import Main from "../Components/Main";
import "./ImageMockup.css";

function ImageMockup() {
  return (
    <div>
      <Main className="image-mockup-container">
        <h1 className="product-image title">Product Image</h1>
        <div className="product-image buttons">
          <button className="btn original-pdf">Original PDF</button>
          <button className="btn light-pdf">For Light</button>
          <button className="btn dark-pdf">For Dark</button>
          <button className="btn sticker-pdf">Stickers PDF</button>
          <button className="btn sticker-png">Stickers PNG</button>
          <button className="btn create">Create</button>
        </div>
        <div className="product-image S&Scontainer">
          <div className="product-image shirts">
            <h3>Shirts</h3>
            <div className="shirt-logo-container">
              <div className="shirt-light-logo">
                <title className="shirt-light-logo-title">Adult Tees</title>
                <div className="shirt"></div>
              </div>
              <div className="shirt-dark-logo"></div>
            </div>
          </div>
          <div className="product-image stickers">
            <h3>Stickers</h3>
          </div>
        </div>
        <div className="product-image mugs">
          <h3>Mugs</h3>
        </div>
      </Main>
    </div>
  );
}

export default ImageMockup;
