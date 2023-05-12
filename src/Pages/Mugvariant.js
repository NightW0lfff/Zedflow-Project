import Main from "../Components/Main";
import "./Mugvariant.css";

function Mugvariant() {
  return (
            <div class="mugvariant">
                <div class="cands">
                    <div class="create">
                        <button type="button" class="btn-createmugvariant">Create Mugs Variant</button>
                    </div>
                    <div class="search">
                        <div class="searchbox">
                            <div class="searchicon"> 
                            <span class="mvicon">
                                <i></i>
                            </span>
                            </div>
                            <input placeholder="Search" class="form-control" name="searchKey" type="text"></input>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <div class="mug-variant">
                            <div class="mug-list">
                                <table class="mug-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th class="text-center" scope="variant-vm" style="width: 5%;">No</th>
                                            <th class="text-center" scope="variant-vm" style="width:20%;">"NAME"
                                                <i class="apha-az">
                                                    ::before
                                                </i>
                                            </th>
                                                
                                            <th class="text-center" scope="variant-vm" style="width: 20%;">GENDER</th>
                                            <th class="text-center" scope="variant-vm" style="width: 20%;">SIZE</th>
                                            <th class="text-center" scope="variant-vm" style="width: 20%;">COLOR</th>
                                            <th class="text-center" scope="variant-vm" style="width: 15%;">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">Black standerd 11oz</td>
                                            <td class="text-center">No Size</td>
                                            <td class="text-center">Black</td>
                                            <td class="text-center">Standerd 110z</td>
                                            <td class="td-action">
                                              <div class="row" >
                                                <div class="tv-action">
                                                    <button type="button" data-dz-remove="true" class="mv-btn-edit">
                                                        <span class="mv-btn-icone">
                                                            <i class="va-edit">
                                                                ::before
                                                            </i>
                                                        </span>
                                                        <span class="btn-text">EDIT</span>
                                                    </button>
                                                    <button type="button" data-dz-remove="true" class="mv-btn-delete">
                                                    <span class="mv-btn-icond">
                                                            <i class="va-trash">
                                                                ::before
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
                </div>
  )
}
export default Mugvariant;