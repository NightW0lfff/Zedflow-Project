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
                <label class></label>
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
                <label class></label>
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
                <hr class="hr-stickers" align="left"></hr>
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
                <hr class="hr-mugs" align="left"></hr>
                <div class="row">
                  <div class="mg-11p">
                    <div class="form-group">
                      <label class>11oz Price</label>
                      <select class="form-control" name="mg_11price">
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
                      </select>
                    </div>
                  </div>
                  <div class="mg-15p">
                  <div class="form-group">
                      <label class>15oz Price</label>
                      <select class="form-control" name="mg_15price">
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
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
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
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
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                      </select>
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
              <div class="input-group-cf" >
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="category-scearch">

                    </i>
                  </span>
              </div>
              <input class="cg-form-control" placeholder="Search" name="searchCategory" type="text" ></input>
            </div>
          </div>
          <ul class="category-list" id="item-list">
            <li class="listgroup-item" action="true">Funny</li>
            <li class="listgroup-item" action="true">Vegan</li>
            <li class="listgroup-item" action="true">Hippie</li>
            <li class="listgroup-item" action="true">Vintage</li>
            <li class="listgroup-item" action="true">Christmas</li>
            <li class="listgroup-item" action="true">Fitness</li>
            <li class="listgroup-item" action="true">Austrilian</li>
            <li class="listgroup-item" action="true">Activist</li>
            <li class="listgroup-item" action="true">Equality</li>
            <li class="listgroup-item" action="true">Birthday</li>
            <li class="listgroup-item" action="true">Fathers Day</li>
            <li class="listgroup-item" action="true">Mothers Day</li>
            <li class="listgroup-item" action="true">Halloween</li>
            <li class="listgroup-item" action="true">4x4</li>
            <li class="listgroup-item" action="true">Fishing</li>
            <li class="listgroup-item" action="true">Signs</li>
            <li class="listgroup-item" action="true">Coffee</li>
            <li class="listgroup-item" action="true">Art</li>
            <li class="listgroup-item" action="true">Geek</li>
            <li class="listgroup-item" action="true">Inspirational</li>
            <li class="listgroup-item" action="true">Animals</li>
            <li class="listgroup-item" action="true">Space</li>
            <li class="listgroup-item" action="true">Motorcycle</li>
            <li class="listgroup-item" action="true">Travel</li>
            <li class="listgroup-item" action="true">Punk</li>
            <li class="listgroup-item" action="true">Dog</li>
            <li class="listgroup-item" action="true">Work</li>
            <li class="listgroup-item" action="true">Adventure</li>
            <li class="listgroup-item" action="true">Climate Change</li>
            <li class="listgroup-item" action="true">Sport</li>
            <li class="listgroup-item" action="true">Love</li>
            <li class="listgroup-item" action="true">Custom</li>
            <li class="listgroup-item" action="true">Music</li>
            <li class="listgroup-item" action="true">Family</li>
            <li class="listgroup-item" action="true">Cat</li>
            <li class="listgroup-item" action="true">Ocean</li>
            <li class="listgroup-item" action="true">Wildlife</li>
            <li class="listgroup-item" action="true">Nature</li>
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
              <input class="cg-form-control" placeholder="Search" name="searchKeyword" type="text" ></input>
            </div>
          </div>
          <ul class="category-list" id="item-list">
            <li class="listgroup-item" action="true">Inspirational Kind Top Tee Womens Mens</li>
            <li class="listgroup-item" action="true">Inspirational Funny Summer Women Men</li>
            <li class="listgroup-item" action="true">Funny Tshirt Tee Men Women Gift Top</li>
            <li class="listgroup-item" action="true">Vintage Graphic Mens Womens 90s 1970</li>
            <li class="listgroup-item" action="true">Funny Tee Australian Men Women Gift Top</li>
            <li class="listgroup-item" action="true">Vegan Mens Womens Funny Animals Shirt</li>
            <li class="listgroup-item" action="true">Christmas Xmas Womens Mens Tops Ladies</li>
            <li class="listgroup-item" action="true">Australian Souvenir Shirt Mens Womens</li>
            <li class="listgroup-item" action="true">Hippie Clothes Men Women Shirts Top</li>
            <li class="listgroup-item" action="true">Animal Mens Womens Father Son Australian</li>
            <li class="listgroup-item" action="true">Family Love Gifts Mum Dad Womens Mens</li>
            <li class="listgroup-item" action="true">Funny Pun Gifts Womens Mens Top Shirt</li>
            <li class="listgroup-item" action="true">Sport Tennis Womens Mens</li>
            <li class="listgroup-item" action="true">Sport Swimming Womens Mens</li>
            <li class="listgroup-item" action="true">Sport Water Fun Womens Mens Shirt Top</li>
            <li class="listgroup-item" action="true">Adventure Explore Mountains Womens Mens</li>
            <li class="listgroup-item" action="true">Activist Feminist Gifts Womens Mens Top</li>
            <li class="listgroup-item" action="true">Sport Snowboarding Funny Womens Mens</li>
            <li class="listgroup-item" action="true">Sport Fishing Funny Womens Mens Shirt</li>
            <li class="listgroup-item" action="true">Work Funny Gift Occupation Womens Mens</li>
            <li class="listgroup-item" action="true">Funny Drinking Alcohol Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Sport Hobbies Womens Mens Top Tee</li>
            <li class="listgroup-item" action="true">Sport Golf Funny Womens Mens</li>
            <li class="listgroup-item" action="true">Fitness Exercise Train Mens Womens Shirt</li>
            <li class="listgroup-item" action="true">Fitness Athletic Funny Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Fathers Day Dad Joke Funny Womens Mens</li>
            <li class="listgroup-item" action="true">Sport Winter Ski Snow Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Halloween Autumn Pumpkin Womens Mens</li>
            <li class="listgroup-item" action="true">Christmas Holiday Womens Mens</li>
            <li class="listgroup-item" action="true">Christmas Festive Funny Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Cat Funny Cute Pet Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Dog Funny Animal Pet Womens Mens</li>
            <li class="listgroup-item" action="true">Halloween Spooky Funny Mens Ladies Tee</li>
            <li class="listgroup-item" action="true">Motorcycle Motorbike Womens Mens</li>
            <li class="listgroup-item" action="true">Work Funny Gift Job Womens Mens</li>
            <li class="listgroup-item" action="true">Funny Car Driving Tee Womens Mens Gift</li>
            <li class="listgroup-item" action="true">4x4 Off Road Driving Tee Womens Mens</li>
            <li class="listgroup-item" action="true">Travel Explore Journey Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Climate Change Environment Womens Mens</li>
            <li class="listgroup-item" action="true">Nature Earth Wild Tee Womens Mens</li>
            <li class="listgroup-item" action="true">Activist Disability Disabled Womens Mens</li>
            <li class="listgroup-item" action="true">Activist Equality Diversity Womens Mens</li>
            <li class="listgroup-item" action="true">Punk Wild Free Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Love Valentines Heart Womens Mens</li>
            <li class="listgroup-item" action="true">Animals Funny Cute Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Equality LGBTQ Pride Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Vintage Japan JDM Tee Womens Top Mens</li>
            <li class="listgroup-item" action="true">Ocean Eco World Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Geek Nerd Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Music Musician Womens Mens Tee</li>
            <li class="listgroup-item" action="true">Coffee Funny Caffeine Tee Womens Mens</li>
            <li class="listgroup-item" action="true">Wildlife Animal Protect Womens Mens Top</li>
            <li class="listgroup-item" action="true">Art Artistic Womens Mens Tee Ladies</li>
            <li class="listgroup-item" action="true">Warning Funny Tee Top Womens Mens</li>
            <li class="listgroup-item" action="true">Work Inspirational Top Womens Mens</li>
            <li class="listgroup-item" action="true">Custom Birthday Funny Womens Mens Top</li>
            <li class="listgroup-item" action="true">Work Sign Warning Womens Mens Top</li>
            <li class="listgroup-item" action="true">Animals Pets Love Womens Mens Top</li>
            <li class="listgroup-item" action="true">Animals Whales Planet Womens Mens</li>
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