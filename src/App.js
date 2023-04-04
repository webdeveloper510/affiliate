import logo from './logo.svg';
import './App.scss';
import  '../src/assets/style/style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routing from './routes/Route';

function App() {
  return (
    <div className="App">
      <Routing />
      <ToastContainer autoclose={3000} />
    </div>
  );
}

export default App;
