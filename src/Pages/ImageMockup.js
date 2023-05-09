import Main from "../Components/Main";
import "./ImageMockup.css";

function ImageMockup() {
  return (
    <div>
      <Main className="image-mockup-container">
        <h1 className="product-image title">Product Image</h1>
        <div className="product-image buttons">
          <button>Original PDF</button>
          <button>For Light</button>
          <button>For Dark</button>
          <button>Stickers PDF</button>
          <button>Stickers PNG</button>
          <button>Create</button>
        </div>
        <div className="product-image-SScontainer">
          <div className="product-image shirts">
            <h3>Shirts</h3>
            <div className="shirt-card-container">
              <div className="shirt-logo-container">
                <div className="image-box" src="" alt="" />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="shirt-logo-container">
                <div className="image-box" src="" alt="" />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="product-image-box " src="" alt="" />
              <div className="product-image-box " src="" alt="" />
            </div>
            <span className="input-container">
              <input type="checkbox" />
              Upload
            </span>
          </div>
          <div className="product-image stickers">
            <h3>Stickers</h3>
            <div className="shirt-card-container">
              <div className="shirt-logo-container">
                <div className="image-box" src="" alt="" />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="product-image-box " src="" alt="" />
            </div>
            <span className="input-container">
              <input type="checkbox" />
              Upload
            </span>
          </div>
          <div className="product-image mugs">
            <h3>Mugs</h3>
            <div className="shirt-card-container">
              <div className="shirt-logo-container">
                <div className="image-box" src="" alt="" />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="shirt-logo-container">
                <div className="image-box" src="" alt="" />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="product-image-box " src="" alt="" />
              <div className="product-image-box " src="" alt="" />
            </div>
            <span className="input-container">
              <input type="checkbox" />
              Upload
            </span>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default ImageMockup;
