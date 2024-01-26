import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo.png';
import menuicon from'../assets/hamburger.png';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header (){
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const mobilemenuShow = () => setShow(true);
    return (
        <>

<header className="header-area absulate-header cssanimation  navbar-fixed-top sticky fadeInTop animated">
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        <div className="site-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="col-md-7 mobile-hide">
        <div className="main-menu-wrap">
          <nav className="proone-nav">
            <ul className="menu">
              <li>
              <NavLink className="" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Product </NavLink>
                </li>
                <li>
                <NavLink to="/vendor-signup"> Vendor Signup </NavLink></li>
                {/* <span> Market Place </span> */}
                {/* <ul class="subpage">
                <li><NavLink to="/marketplace"> Home </NavLink></li>
                <li><NavLink to="/offers"> Offers </NavLink></li>
                <li><NavLink to="/products"> Products </NavLink></li>
                <li><NavLink to="/vendor-signup"> Vendor Login/  Signup </NavLink></li>
                </ul> */}
                {/* </li> */}
                <li>
                <NavLink to="/marketplace"> Marketplace </NavLink>
                </li>
               

            </ul>
          </nav>
        </div>
        
        <div className="mobile-menu-area"></div>
      </div>
      <div className="col-md-3 mobile-hide">
      <nav className="proone-nav">
      <ul className="menu button-login-si">
               {localStorage.getItem("logToken") == null ? (
                <>
                <li>
                <NavLink to="/login" className='login'> Login</NavLink>
                </li>
                <li>
                <NavLink to="/signup" className='buttonfx angleindouble color-1 Signup'> <i class="icofont-sign-in"></i> Sign Up</NavLink>
                </li>
                </>
               ) : (
                   <></>
               )
                
              }
              </ul>
              </nav>
               </div>
               <div className='col-md-10 desktop-hide'>
               <div className="mobile-menu"> <img src={menuicon} onClick={mobilemenuShow}></img> </div>
               </div>

               <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> <div className="logo">
              <div className="site-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
              </div></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className="mobile-menu">
              <li>
              <NavLink className="" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product"> Product </NavLink>
                </li>
                <li>
                <NavLink to="/vendor-signup"> Vendor Signup </NavLink></li>
                {/* <span> Market Place </span> */}
                {/* <ul class="subpage">
                <li><NavLink to="/marketplace"> Home </NavLink></li>
                <li><NavLink to="/offers"> Offers </NavLink></li>
                <li><NavLink to="/products"> Products </NavLink></li>
                <li><NavLink to="/vendor-signup"> Vendor Login/  Signup </NavLink></li>
                </ul> */}
                {/* </li> */}
                <li>
                <NavLink to="/marketplace"> Marketplace </NavLink>
                </li>
                {localStorage.getItem("logToken") == null ? (
                <>
                <li>
                <NavLink to="/login" className='login'> Login</NavLink>
                </li>
                <li>
                <NavLink to="/signup" className=''> <i class="icofont-sign-in"></i> Sign Up</NavLink>
                </li>
                </>
               ) : (
                   <></>
               )
                
              }

            </ul>
            </Offcanvas.Body>
          </Offcanvas>
    </div>
  </div>
</header>
<div className='spacer-div'>

</div>
      </>
       
    ) ;
}
  
export default Header;