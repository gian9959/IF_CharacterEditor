import { Link } from 'react-router-dom';
import { useEffect } from "react";

function Navbar() {

    const ids = ['link1', 'link2', 'link3'];

    useEffect(() => {
      //Runs only on the first render
      document.getElementById('link1').click();
    }, []);

    const setActive = (num) => {
      for(let i in ids) {
        let el = document.getElementById(ids[i]);
        if(el.classList.contains('active'))
          el.classList.remove('active');
      }
      document.getElementById(ids[num]).classList.add('active');
    };

    return (
      <div className="Navbar">
        <Link to="/page1">
          <button id='link1' onClick={() => setActive(0)} className="navButtons">Statistiche</button>
        </Link>
        <Link to="/page2">
          <button id='link2' onClick={() => setActive(1)} className="navButtons">Anatomia</button>
        </Link>
        <Link to="/page3">
          <button id='link3' onClick={() => setActive(2)} className="navButtons">Incantesimi</button>
        </Link>
        <div className="line"></div>
      </div>
    );
}

export default Navbar;