import React, { Component } from 'react';
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import Header from './Component/Header';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketPlace from './Component/Marketplace/MarketPlace';
import Resources from './Component/Resources';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Forgotpassword from './Component/Forgotpassword';


class App extends Component {
  
  render() {
    return (
      <>
     
       <Router>
           <div className="App">
        
           <Header />
           {/* {window.location.pathname !== "/login" ? <Header />  : null}{" "} */}
         
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/product' element={< Product />}></Route>
                 <Route exact path='/marketplace' element={< MarketPlace />}></Route>
                 <Route exact path='/resources' element={< Resources />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signup' element={< SignUp />}></Route>
                 <Route exact path='/forgotpassword' element={< Forgotpassword />}></Route>
          </Routes>
          </div>
       </Router> 
   </>

   );
   
  }
}
  
export default App;