import Main from "../Components/Main";
import "./Tshirtvariant.css";
import React, { useState } from "react";

function Tshirtvariant() {
  const [showPopup, setShowPopup] = useState(false);
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [action, setAction] = useState("");

  const handleCreateVariant = () => {
    
    
    console.log("New variant created!");
    console.log("Gender:", gender);
    console.log("Size:", size);
    console.log("Color:", color);
    console.log("Action:", action);

    // Clear the form and close the popup
    setGender("");
    setSize("");
    setColor("");
    setAction("");
    setShowPopup(false);
  };

  return (
    <Main>
      <div className="variant">
        <div className="variant-body">
          <div className="three">
            <div className="variant-tv">
              <button
                type="button"
                className="btn-createtv"
                onClick={() => setShowPopup(true)}
              >
                Create Tshirt Variant
              </button>
            </div>
            <div className="info">
              <p className="info-detail" style={{ fontSize: "16px" }}>
                <i className="alert-triangle" style={{ color: "rgb(206,206,20)", fontSize: "0.9rem" }}></i>
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
            <div className="variant-tv">
              <div className="search-ctv">
                <form className="nav-searchv">
                  <div className="form-group">
                    <div className="input-group">
                      <input className="form-control" placeholder="Search" name="searchKey" type="text"></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tshirt-variant">
              <div className="tv-list">
                <table className="tv-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center" scope="variant-vt" style={{ width: "5%" }}>No</th>
                      <th className="text-center" scope="variant-vt" style={{ width: "20%" }}>"NAME"
                        <i className="apha-az"></i>
                      </th>
                      <th className="text-center" scope="variant-vt" style={{ width: "20%" }}>GENDER</th>
                      <th className="text-center" scope="variant-vt" style={{ width: "20%" }}>SIZE</th>
                      <th className="text-center" scope="variant-vt" style={{ width: "20%" }}>COLOR</th>
                      <th className="text-center" scope="variant-vt" style={{ width: "15%" }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">Mans black 2XL</td>
                      <td className="text-center">Mans</td>
                      <td className="text-center">2XL</td>
                      <td className="text-center">Black</td>
                      <td className="td-action">
                        <div className="row">
                          <div className="tv-action">
                            <button type="button" data-dz-remove="true" className="tv-btn-edit">
                              <span className="tv-btn-icone">
                                <i className="far fa-edit"></i>
                              </span>
                              <span className="btn-text">EDIT</span>
                            </button>
                            <button type="button" data-dz-remove="true" className="tv-btn-delete">
                              <span className="tv-btn-icone">
                                <i className="va-trash"></i>
                              </span>
                              <span className="btn-text">DELETE</span>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* Additional table rows can be added here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tv-footer"></div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Create Tshirt Variant</h2>
            <div className="form-group">
              <label>Gender:</label>
              <input
                className="form-control"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Size:</label>
              <input
                className="form-control"
                placeholder="Enter size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Color:</label>
              <input
                className="form-control"
                placeholder="Enter color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Action:</label>
              <input
                className="form-control"
                placeholder="Enter action"
                value={action}
                onChange={(e) => setAction(e.target.value)}
              />
            </div>
            <button type="button" className="btn-create" onClick={handleCreateVariant}>
              Create
            </button>
            <button type="button" className="btn-cancel" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </Main>
  );
}


export default Tshirtvariant;