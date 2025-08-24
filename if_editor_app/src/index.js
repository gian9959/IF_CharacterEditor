import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css'

import Header from './Header';
import CEditor from './CEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='wrapper'>
    <CEditor />
  </div>
);