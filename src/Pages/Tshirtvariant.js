import Main from "../Components/Main";
import "./Tshirtvariant.css";

function Tshirtvariant() {
  return (
    <div>
        <main class="variant">
              <div class="variant-body">
                  <div class="three">
                      <div class="variant-tv">
                          <button type="button" class="btn-createtv">Create Tshirt Variant</button>
                      </div>
                      <div class="info">
                          <p class="info-detail" style="font-size:16px;">
                          <i class="alert-triangle" style="color: rgb(206,206,20); font-size:0.9rem;">
                          </i>
                          Product Picture: Insert URL Only to SMALL Sizes only.
                          <br></br>
                          Print file: "
                          <span>
                          Dark Artwork File - Insert Print URL Only to Black Colour only - Apply to Mens & Womens
                          </span>
                          <br></br>
                          <span>
                          Light Artwork File - Insert Print URL Only to White Colour only - Apply to Mens & Womens
                          </span>
                          <br></br>
                          Shortcode: [$artwork_dark]; [$artwork_light]
                          </p>
                      </div>
                      <div class="variant-tv">
                          <div class="search-ctv">
                              <form class="nav-searchv">
                                  <div class="form-group">
                                      <div class="input-group">
                                          <input class="form-control" placeholder="Search" name="searchKey" type="text"></input>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                    </div>
                      <div class="row">
                          <div class="tshirt-variant">
                              <div class="tv-list">
                                  <table class="tv-table">
                                      <thead class="thead-light">
                                          <tr>
                                              <th class="text-center" scope="variant-vt" style="width: 5%;">No</th>
                                              <th class="text-center" scope="variant-vt" style="width:20%;">"NAME"
                                                  <i class="apha-az">
                                                      
                                                  </i>
                                              </th>

                                              <th class="text-center" scope="variant-vt" style="width: 20%;">GENDER</th>
                                              <th class="text-center" scope="variant-vt" style="width: 20%;">SIZE</th>
                                              <th class="text-center" scope="variant-vt" style="width: 20%;">COLOR</th>
                                              <th class="text-center" scope="variant-vt" style="width: 15%;">ACTION</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td class="text-center">1</td>
                                              <td class="text-center">Mans black 2XL</td>
                                              <td class="text-center">Mans</td>
                                              <td class="text-center">2XL</td>
                                              <td class="text-center">Black</td>
                                              <td class="td-action">
                                                <div class="row" >
                                                  <div class="tv-action">
                                                      <button type="button" data-dz-remove="true" class="tv-btn-edit">
                                                          <span class="tv-btn-icone">
                                                              <i class="far fa-edit">

                                                              </i>
                                                          </span>
                                                          <span class="btn-text">EDIT</span>
                                                      </button>
                                                      <button type="button" data-dz-remove="true" class="tv-btn-delete">
                                                      <span class="tv-btn-icone">
                                                              <i class="va-trash">

                                                              </i>
                                                          </span>
                                                          <span class="btn-text">DELETE</span>
                                                      </button>
                                                  </div>
                                                </div>
                                              </td>
                                          </tr>
                                          <tr>

                                          </tr>
                                          <tr>

                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>

                  <div class="tv-footer">

                  </div>
              </div>
          </main>
    </div>


  );
}

export default Tshirtvariant;