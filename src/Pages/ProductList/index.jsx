import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Breadcrumbs, Link, Typography} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './style.css';
import DataGridDemo from "./ProductListBox";

const ProductList  = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://zed.umbrellaink.com.au/export?data=[]";
        window.location.href = url;
      };
    

    return(
    <container>
      <Sidebar />
      <div className="content-container">
        <nav className="nav-top">
          <div className="nav-top-account">
            {/* <i></i> */}
            <span className="nav-top-account-title">Profile</span>
          </div>
        </nav>
         <div class="Product Nav box" style={{ display: 'flex', flexDirection: 'row', 
                                                marginTop : 60,
                                                marginLeft: 28 }}>
            <div style={{marginRight: 30, color: 'white', fontSize : 20, fontWeight: 500}}>
                Product List
            </div>
            <Breadcrumbs  separator="-" aria-label="breadcrumb" >
            <Link
            underline="hover"
            color="white"
            href=""
            >
            <FormatListBulletedIcon fontSize="small"/>
            </Link>
            <Link underline="hover" color="white" href="/">
             Product 
            </Link>
            <Typography color="#dee2e6">Product List</Typography>
            </Breadcrumbs>
         </div>
        
        
        <div className="main-container">

          <div className="main-box">{props.children}
            <div className="Card" >
                <div className="Card-body">
                    <div className="Card-header">
                        <div className="columne">
                        <form onSubmit={handleSubmit}>
                            <button type="submit" className="E-button">
                            Export CSV
                            </button>
                            <button type="button"  disabled className="Regen-button">
                            Regenerate Files
                            </button>
                        </form>
                        </div>
                    </div>
                    <div >
                      <DataGridDemo />
                    </div>
                </div>
            </div>
          </div>
        </div>



        <footer>
          <div className="footer-container">
            <span className="copyright">© 2023</span>
            <a href="/home" className="brand-name">
              Umbrella Ink
            </a>
          </div>
        </footer>
      </div>
    </container>
    )
}

export default ProductList;

