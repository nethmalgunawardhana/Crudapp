
import './Style.css';
import Header from './Component/Header';
import {Routes,Route}from 'react-router-dom';

import SiteHome from './Component/SiteHome';

import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
   
      <Header/>
      <Routes>
        <Route path="/" element={<SiteHome/>}/>
  
        

      </Routes>
      <div className='foot'>
        <Footer/>
      </div>
      
      
     
     
    </div>
  );
}

export default App;
