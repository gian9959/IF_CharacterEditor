import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './CSS/index.css'

import CEditor1 from './CEditor1';
import CEditor2 from './CEditor2';
import CEditor3 from './CEditor3';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function App(){
  return(
  <div className='main-row'>
    <Sidebar />
    <div className='col'>
      <BrowserRouter>
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path='/page1' element={<CEditor1/>}/>
            <Route path='/page2' element={<CEditor2/>}/>
            <Route path='/page3' element={<CEditor3/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);