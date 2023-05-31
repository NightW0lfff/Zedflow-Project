import Main from "../Components/Main";
import React, { useState } from 'react';
import './Mugvariant.css';

function Mugvariant(){


  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    gender: '',
    size: '',
    color: '',
    action: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleCancelClick = () => {
    setShowCreateForm(false);
    setFormData({
      gender: '',
      size: '',
      color: '',
      action: ''
    });
  };

  const handleCreateFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Add your logic for handling form submission and creating a new form here

    // Reset the form data and hide the create form
    setFormData({
      gender: '',
      size: '',
      color: '',
      action: ''
    });
    setShowCreateForm(false);
  };

  return (
    <Main>
    <div className="mugvariant">
      <div className="cands">
        <div className="create">
          <button type="button" className="btn-createmugvariant" onClick={handleCreateClick}>
            Create Mugs Variant
          </button>
        </div>
        <div className="search">
          <div className="searchbox">
            <div className="searchicon">
              <span className="mvicon">
                <i></i>
              </span>
            </div>
            <input placeholder="Search" className="form-control" name="searchKey" type="text" />
          </div>
        </div>
      </div>
      <div className="form">
        <div className="mug-variant">
          <div className="mug-list">
            <table className="mug-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" scope="variant-vm" style={{ width: '5%' }}>No</th>
                  <th className="text-center" scope="variant-vm" style={{ width: '20%' }}>NAME
                    <i className="apha-az">
                      ::before
                    </i>
                  </th>
                  <th className="text-center" scope="variant-vm" style={{ width: '20%' }}>GENDER</th>
                  <th className="text-center" scope="variant-vm" style={{ width: '20%' }}>SIZE</th>
                  <th className="text-center" scope="variant-vm" style={{ width: '20%' }}>COLOR</th>
                  <th className="text-center" scope="variant-vm" style={{ width: '15%' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">Black standard 11oz</td>
                  <td className="text-center">No Size</td>
                  <td className="text-center">Black</td>
                  <td className="text-center">Standard 11oz</td>
                  <td className="td-action">
                    <div className="row">
                      <div className="tv-action">
                        <button type="button" data-dz-remove="true" className="mv-btn-edit">
                          <span className="mv-btn-icone">
                            <i className="va-edit">
                              ::before
                            </i>
                          </span>
                          <span className="btn-text">EDIT</span>
                        </button>
                        <button type="button" data-dz-remove="true" className="mv-btn-delete">
                          <span className="mv-btn-icond">
                            <i className="va-trash">
                              ::before
                            </i>
                          </span>
                          <span className="btn-text">DELETE</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Add additional table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showCreateForm && (
        <div className="create-form">
          <form onSubmit={handleCreateFormSubmit}>
            <label>
              Gender:
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Size:
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Action:
              <input
                type="text"
                name="action"
                value={formData.action}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Create</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </div>
      )}
    </div>
    </Main>
  );
}

export default Mugvariant;