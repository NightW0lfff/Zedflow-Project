import Main from "../Components/Main";
import "./ProductCreate.css";

function PCthird() {
  return (
    <Main>
        <div class="product-image">
          <div class="hang">
            <div class="ppi">
              <h1 class="pi-text">Product Image</h1>
          </div>
          <div class="hang">
            <div class="pi-function">
              <div class="pi-btn">
                <button type="button" class="btn-pi" id="" name="original">Original PDF</button>
                <button type="button" class="btn-pi" id="" name="light">For Light</button>
                <button type="button" class="btn-pi" id="" name="dark">For Dark</button>
                <button type="button" class="btn-pi" id="" name="s-pdf">Stickers PDF</button>
                <button type="button" class="btn-pi" id="" name="s-png">Stickers PNG</button>
                <button type="button" class="btn-pi" id="" name="create">Create</button>
                <input id="stickers-pdf-file" accept=".pdf" hidden type="file" class="form-control-file"></input>
              </div>
            </div>
          </div>
          <div class="hang">
            <div class="pi-t">
              <div class="pi-card">
                <div>
                </div>
              </div>
            </div>
            <div class="pi-m">
              <div class="pi-card">
                <div>
                </div>
              </div>
            </div>
            <div class="pi-s">
              <div class="pi-card">
                <div class="pi-s-info">
                  <div class="s-l">
                    <div class="name-s">
                      <div>
                        <h4>Sticker</h4>
                      </div>
                    </div>
                    <div class="image-p">
                      <div class="image-pre">
                        <image class="image-preview"></image>
                      </div>
                    </div>
                    <div class="">
                      <input type="checkbox" class="form-check-input" ></input>
                      <small>Upload</small>
                    </div>
                  </div>
                  <div class="s-r">
                    <div class="s-image">
                      <image class="stker-image"></image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


    </Main>

  );
}

export default PCthird;