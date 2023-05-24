import Main from "../Components/Main";
import "./ProductCreate.css";

function PCsecond() {
  return (
    <Main>
         <form method="post" >
          <div class="row">
          <div class="pc-pc">
            <div class="second">
            <div class="row">
              <div class="pc-pt">
                <h1>Product Title</h1>
                <hr align="left"></hr>
                <div class="form-group">
                <input class="form-control" name="product_title" readonly placeholder="Enter Product Title" maxLength={25} value="">
                </input>
                <div class="pc-invalidfeedback"></div>
                </div>
              </div>
              <div class="pc-artist">
                <h1>Artist</h1>
                <hr align="left"></hr>
                <div class="form-group">
                  <select name="artist" class="form-control">
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="pc-source">
                <h1>Source</h1>
                <hr align="left"></hr>
                <div class="form-group">
                  <textarea class="form-control" name="" placeholder="Enter Source" required>
                  </textarea>
                  <div class="pc-invalidfeedback"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="pc-st">
                <h1>Shopify Tags</h1>
                <hr align="left"></hr>
                <div class="form-group">
                  <input class="form-control" placeholder="Enter Shopify Tags" required type="text" value>
                  </input>
                  <div class="pc-invalidfeedback"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="pc-at">
                <h1>Adult Tshirts</h1>
                <hr align="left"></hr>
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
                <hr align="left"></hr>
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
                <hr align="left"></hr>
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

            <div class="row-s">
              <div class="pc-Stickers">
                <h1>Stickers</h1>
                <hr align="left"></hr>
                <div class="row">
                  <div class="s-wh">
                    <div class="form-group">
                      <label class>Width</label>
                      <input class="form-control" required type="number" placeholder="Enter Width" name="sticker-width"></input>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="s-wh">
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
                  <div class="s-pw">
                    <div class="form-group">
                      <label class>Price</label>
                      <select class="form-control" name="sticker_price">
                        <option value="122">5.99</option>
                        <option value="66">6.00</option>
                        <option value="67">7.00</option>
                      </select>
                    </div>
                  </div>
                  <div class="s-pw">
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
                <hr align="left"></hr>
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
               <hr align="left"></hr>
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
                <hr align="left"></hr>
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
                <hr align="left"></hr>
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
                <hr align="left"></hr>
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
                <button class="create-btn" type="submit">Create</button>
              </div>
            </div>


          </div>
          </div>


          <div class="pc-cg">
            <div class="cg-control">
            <h1>Category</h1>
            <hr align="left"></hr>
            <div class="category-form">
              <div class="input-group-cf">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="category-scearch">

                    </i>
                  </span>
              </div>
              <input class="form-control" placeholder="Search" name="searchCategory" type="text" ></input>
            </div>
          </div>
          <ul class="category-list">
            <li class="listgroup-item" action="true">Funny</li>
            <li class="listgroup-item" action="true">Vegan</li>
          </ul>
          </div>
          </div>


          <div class="pc-kw">
            <div class="kw-control">
            <h1>Keyword</h1>
            <hr align="left"></hr>
            <div class="keyword-form">
              <div class="input-group-cf">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="category-scearch">

                    </i>
                  </span>
              </div>
              <input class="form-control" placeholder="Search" name="searchKeyword" type="text"></input>
            </div>
          </div>
          <ul class="category-list">
            <li class="listgroup-item" action="true">Inspirational Kind Top Tee Womens Mens</li>
            <li class="listgroup-item" action="true">Inspirational Funny Summer Women Men</li>
          </ul>
            </div>
          </div>


        </div>
        </div>
        </form>


    </Main>
  );

}

export default PCsecond;