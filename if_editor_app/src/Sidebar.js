import DiceRoller from './DiceRoller.js'

function Sidebar() {
    return (
      <div className="Sidebar">
        <img id='Logo' src={require('./Imgs/IF_Logo.png')} alt="logo"/>
        <button className='customButton saveButtons'>Salva</button>
        <button className='customButton saveButtons'>Carica</button>

        
        <table className='difficultTable'>
          <tr>
            <th className='whiteTitle tableHeader'>DIFFICOLTÀ</th>
            <th className='whiteTitle tableHeader'>CD</th>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry'>Nella media</th>
            <td>8-11</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry'>Impegnativa</th>
            <td>12-15</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry'>Difficile</th>
            <td>16-19</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry'>Molto difficile</th>
            <td>20-23</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry'>Quasi impossibile</th>
            <td>24-27</td>
          </tr>
        </table>
        <DiceRoller />
      </div>
    );
}

export default Sidebar;