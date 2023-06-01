import {Routes, Route } from 'react-router-dom';
import Home from '../Component/Home';
import Product from '../Component/Product';
import Header from '../Component/Header';
import MarketPlace from '../Component/Marketplace/MarketPlace';
import Resources from '../Component/Resources';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import Forgotpassword from '../Component/Forgotpassword';
import VendorSignup from '../Component/vendor/VendorSignup';
import VendorLogin from '../Component/vendor/VendorLogin';
import Dashboard from '../Component/dashboard/Dashboard';
import CampList from '../Component/dashboard/CampList';
import Verify from '../Component/Verify';

const Routing = () => {
    
    return(
        <div className="routes" >
        <Header />
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/product' element={< Product />}></Route>
            <Route exact path='/marketplace' element={< MarketPlace />}></Route>
            <Route exact path='/resources' element={< Resources />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/signup' element={< SignUp />}></Route>
            <Route exact path='/forgotpassword' element={< Forgotpassword />}></Route>
            <Route exact path='/vendor-signup' element={< VendorSignup />}></Route>
            <Route exact path='/vendor-signin' element={< VendorLogin />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/list' element={<CampList />}></Route>
            <Route exact path='/verify/:token/:id' element={<Verify />}></Route>
        </Routes>
    </div>
    )
}

export default Routing;