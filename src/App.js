import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import Header from './Component/Header';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketPlace from './Component/MarketPlace';
import Resources from './Component/Resources';
import Login from './Component/Login';
  
class App extends Component {
  render() {
    return (
      <>
     
       <Router>
           <div className="App">
           <Header/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/product' element={< Product />}></Route>
                 <Route exact path='/marketplace' element={< MarketPlace />}></Route>
                 <Route exact path='/resources' element={< Resources />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
          </Routes>
          </div>
       </Router> 
   </>

   );
   
  }
}
  
export default App;