import Main from "../Components/Main";
import "./ProductCreate.css";

function ProductCreate() {
  return (
    <div>
      <Main>

        <form role="form" method="post" class>
          <div class="row">
            <div class="pc-pt-1">
              <h1>Product Title</h1>
              <div class="row">
                <div class="pc-ept">
                <input class="pc-formcontrol" name="product-title" placeholder="Enter Product Title" required type="text" maxLength={25}> 
                </input>
                </div>
                <div class="pc-pt">
                <button class="btn-check" type="submit">Check</button>
                <button class="btn-wd" type="button">Next</button>
                </div>
              </div>
            </div>
            <div class="pc-pt">
              <h1>Product Create Instructions</h1>
              <small class="pci-text" style="white-space: pre-wrap;">
              DO NOT PROCEED IF WORD SHOWS BANNED
              DO NOT PROCEED IF YOU SUSPECT THE WORD MAYBE TRADEMARKED EVEN IF NO ERROR
              YOU CANNOT USE A WORD, PHRASE, LYRICS OR QUOTE FROM MUSIC, MOVIES
              IF YOU SUSPECT ANY DESIGN OR WORD IS RELATED TO A COPYRIGHT OR TRADEMARK ITEM IN ANY WAY, DO NOT PROCEED.

              WHEN CHECKING THE NAME OF YOUR TITLE, REMEMBER TO LEAVE THE SPECIAL CHARACTER IN AT FIRST TO MAKE SURE IT IS NOT TRADEMARKED.
              IF IT IS NOT TRADEMARKED THEN DELETE THE SPECIAL CHARACTER FROM THE TITLE AND CHECK AGAIN, IF IT IS ALL CLEAR THEN PROCEED WITHOUT THE SPECIAL CHARACTER.

              SPECIAL CHARACTERS INCLUDE:
              APOSTROPHE ('), EXCLAMATION MARKS (!), COMMAS (,), FULL STOPS(.), DASHES (-), BACKSLASH (\) (/) AND SPECIAL CHARACTERS INCLUDING QUESTION MARKS (?).
              </small>
            </div>
          </div>
        </form>
        

        <form method="post" >
          <div class="row">
          <div class="pc-pc">
            
            <div class="row">
              <div class="pc-pt">
                <h1>Product Title</h1>
                <div class="form-group">
                <input class="pc-formcontrol" name="product_title" readonly placeholder="Enter Product Title" maxLength={25} value="">
                </input>
                <div class="pc-invalidfeedback"></div>
                </div>
              </div>
              <div class="pc-artist">
                <h1>Artist</h1>
                <div class="form-group">
                  <select name="artist" class="pc-formcontrol">
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="pc-source">
                <h1>Source</h1>
                <div class="form-group">
                  <textarea class="pc-formcontrol" name="" placeholder="Enter Source" required>
                  </textarea>
                  <div class="pc-invalidfeedback"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="pc-st">
                <h1>Shopify Tags</h1>
                <div class="form-group">
                  <input class="pc-formcontrol" placeholder="Enter Shopify Tags" required type="text" value>
                  </input>
                  <div class="pc-invalidfeedback"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="pc-at">
                <h1>Adult Tshirts</h1>
                <div class="row">
                <div class="at-price">
                  <div class="form-group">
                  <label class>Price</label>
                  <select required class="form-control" placeholder="Enter Price" name="tshirt_price">
                    <option value="65">28.95</option>
                    <option value="125">34.95</option>
                  </select>
                  </div>
                </div>
                <div class="at-weight">
                  <div class="form-group">
                  <label class>Weight</label>
                  <input class="form-control" name="tshirt_weight" required typpe="number" placeholder step="0.2" value="0.2"></input>
                  <div class="invalid-feedback"></div>
                  </div>
                </div>
                </div>

              </div>
              <div class="pc-pm">
                <h1>Print mode</h1>
                <label class>&nbsp;</label>
                <div class="form-group">
                  <select class="form-control" name="tshirt_print">
                    <option value="p">Print</option>
                    <option value="v">Vinyl</option>
                  </select>
                </div>
              </div>
              <div class="pc-pi">
                <h1>Product Image</h1>
                <label class>&nbsp;</label>
                <div class="form-group">
                <select class="form-control" name="tshirt_image">
                    <option value="set1">Set1</option>
                    <option value="set2">Set2</option>
                    <option value="set3">Set3</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="pc-Stickers">
                <h1>Stickers</h1>
                <div class="row">
                  <div class="s-wd">
                    <div class="form-group">
                      <label class>Width</label>
                      <input class="form-control" required type="number" placeholder="Enter Width" name="sticker-width"></input>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="s-ht">
                    <div class="form-group">
                      <label class>Height</label>
                      <input class="form-control" required type="number" placeholder="Enter Height" name="sticker-height"></input>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="s-tp">
                    <div class="form-group">
                      <label class>Type</label>
                      <select class="form-control" name="sticker_type">
                        <option value="wht">WHT</option>
                        <option value="cus">CUS</option>
                        <option value="acc">ACC</option>
                        <option value="vcc">VCC</option>
                        <option value="whx">WHX</option>
                      </select>
                    </div>
                  </div>
                  <div class="s-p">
                    <div class="form-group">
                      <label class>Price</label>
                      <select class="form-control" name="sticker_price">
                        <option value="122">5.99</option>
                        <option value="66">6.00</option>
                        <option value="67">7.00</option>
                      </select>
                    </div>
                  </div>
                  <div class="s-wt">
                    <div class="form-group">
                      <label class>Weight</label>
                      <input class="form-control" required type="number" placeholder="Enter Weight" name="sticker-weight"></input>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
              </div>


            <div class="row">
              <div class="pc-mugs">
                <h1>Mugs</h1>
                <div class="row">
                  <div class="mg-11p">
                    <div class="form-group">
                      <label class>11oz Price</label>
                      <select class="form-control" name="mg_11price">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div class="mg-15p">
                  <div class="form-group">
                      <label class>15oz Price</label>
                      <select class="form-control" name="mg_15price">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div class="mg-wt">
                    <div class="form-group">
                      <label class>Weight</label>
                      <input class="form-control" value="0.2" placeholder step="0.1" required type="number" name="mg_weight"></input>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="pc-tb">
               <h1>Tote Bags</h1>
               <div class="row">
                <div class="tb-p">
                  <div class="form-group">
                  <label class>Price</label>
                      <select class="form-control" name="tb_price">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                  </div>
                </div>
                <div class="tb-wt">
                  <div class="form-group">
                  <label class>Weight</label>
                      <input class="form-control" value="0.2" placeholder step="0.1" required type="number" name="tb_weight"></input>
                      <div class="invalid-feedback"></div>
                  </div>
                </div>
               </div>             
               </div>
             </div>


            <div class="row">
              <div class="pc-cc">
                <h1>Cushion Covers</h1>
                  <div class="row">
                    <div class="cc-p">
                      <div class="form-group">
                        <label>Price</label>
                        <select required class="form-control" name="cc_price">
                          <option value="">21.95</option>
                          <option value="">22.95</option>
                          <option value="">23.95</option>
                        </select>
                      </div>
                  </div>    
                  <div class="cc-w">
                    <div class="form-group">
                      <label class>Weight</label>
                        <input class="form-control" value="0.2" placeholder step="0.1" required type="number" name="cc_weight"></input>
                        <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="pc-hoodi">
                <h1>Hoodies</h1>
                <div class="row">
                  <div class="hdi-p">
                    <div class="form-group">
                    <label>Price</label>
                        <select required class="form-control" name="hdi_price">
                          <option value="">32.95</option>
                          <option value="">33.95</option>
                          <option value="">34.95</option>
                        </select>
                    </div>
                  </div>
                  <div class="hdi-w">
                    <div class="form-group">
                    <label class>Weight</label>
                        <input class="form-control" value="0.2" placeholder step="0.1" required type="number" name="hdi_weight"></input>
                        <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="pc-kids">
                <h1>Kids</h1>
                <div class="row">
                  <div class="kids-price">
                    <div class="form-group">
                      <label>Price</label>
                      <select required class="form-control" name="price_kids">
                        <option value="">21.95</option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="kids-weight">
                    <div class="form-group">
                      <label>Weight</label>
                      <input class="form-control" name="kids_weight" placeholder step="0.1" required type="number" value="0.2"></input>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="create-butten">
                <button class="pd-create-btn" type="submit">Create</button>
              </div>
            </div>


          </div>
          

          <div class="pc-cg">
            <h1>Category</h1>
            <div class="category-form">
              <div class="input-group-cf" style="boder-radius: 0px; width=100%;">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="category-scearch">
                      ::before
                    </i>
                  </span>
              </div>
              <input class="form-control" placeholder="Search" name="searchCategory" type="text" style="width=50%;"></input>
            </div>
          </div>
          <ul class="category-list">
            <li class="listgroup-item" action="true">Funny</li>
            <li class="listgroup-item" action="true">Vegan</li>
          </ul>
          </div>


          <div class="pc-kw">
            <h1>Keyword</h1>
            <div class="keyword-form">
              <div class="input-group-cf" style="boder-radius: 0px; width=100%;">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="category-scearch">
                      ::before
                    </i>
                  </span>
              </div>
              <input class="form-control" placeholder="Search" name="searchKeyword" type="text" style="width=80%;"></input>
            </div>
          </div>
          <ul class="category-list">
            <li class="listgroup-item" action="true">Inspirational Kind Top Tee Womens Mens</li>
            <li class="listgroup-item" action="true">Inspirational Funny Summer Women Men</li>
          </ul>
          </div>


        </div>
        </div>
        </form>
      </Main>
    </div>
  );
}

export default ProductCreate;
