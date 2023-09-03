import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './config/routes';
import Sidebar from './components/sidebar/Sidebar';
import Bodyheader from './components/body-header/Bodyheader';
import Gallery from './components/galerry/Gallery';
import Products from './components/products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <div className="App">
          
          <Sidebar />
          <div className="body-content">
            <Bodyheader />
          <div className='header'>
            {/* this is the header */}
            {/* <div className="header-card card" style={{ 
              height:"6rem",
              width: "10rem"
        
             }}>
              This is a header card
            </div> */}
            {/* <Gallery /> */}
            {/* <Products /> */}
            <Routing />
          </div>
          </div>
         
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
