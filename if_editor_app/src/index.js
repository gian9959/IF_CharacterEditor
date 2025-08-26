import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css'

import CEditor from './CEditor';
import Sidebar from './Sidebar';

function App(){
  return(
    <div className='main-row'>
    <Sidebar />
    <div className='col'>
      <div className='wrapper'>
        <CEditor />
      </div>
    </div>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);