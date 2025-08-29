import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom';
import { saveAs } from 'file-saver';
import './CSS/index.css'

import CEditor1 from './CEditor1';
import CEditor2 from './CEditor2';
import CEditor3 from './CEditor3';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function App(){

  window.onbeforeunload = function() {
  return "";
  };

  const [character, setChar] = useState({
    statistiche: {
      nome: '', 
      lv: [[false,false,false,false,false,false,false,false],
           [false,false,false,false,false,false,false,false],
           [false,false,false,false,false,false,false,false],
           [false,false,false,false,false,false,false,false]],

      cor: 0, corA: '', 
      men: 0, menA: '', 
      forz: 0, forzA: '', 
      des: 0, desA: '', 
      int: 0, intA: '',
      occ: 0, occA: '',
      per: 0, perA: '',
      com: 0, comA: '',

      pv: 0, pvMax: 0,
      pm: 0, pmMax: 0,

      arm: 0,
      viagg: [false,false,false,false],

      talenti: '',
      inventario: '',
      note: ''
    },

    anatomia: {
      occhioSx: '', occhioDx: '',
      braccioSx: '', braccioDx: '',
      gambaSx: '', gambaDx: '',
      cranio: '',
      orecchie: '',
      bocca: '',
      busto: '',

      ridPM: 0
    },

    incantesimi: {
      albero: [[false,false,false,false,false,false,false,false],
               [false,false,false,false],
               [false,false],
               [false]],

      inc: '',
      PI: 0
    },

    version: 'v1.0'
    
  });

  const saveFunc = () => {
    var filename = 'personaggio.json';
    if(character.statistiche['nome'] !== '')
      filename = character.statistiche['nome']+'.json';

    var jdwfile = JSON.stringify(character);
    var blob = new Blob([jdwfile], {
        type: "text/json;charset=utf-8;",
    });
    saveAs(blob, filename);
  }

  return(
  <div className='main-row'>
    <Sidebar saveFunc={saveFunc} loadFunc={setChar}/>
    <div className='col'>
      <HashRouter>
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path='/page1' element={<CEditor1 values={character['statistiche']} updateFunc={setChar}/>}/>
            <Route path='/page2' element={<CEditor2 values={character['anatomia']} updateFunc={setChar}/>}/>
            <Route path='/page3' element={<CEditor3 values={character['incantesimi']} updateFunc={setChar}/>}/>
          </Routes>
        </div>
      </HashRouter>
    </div>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);