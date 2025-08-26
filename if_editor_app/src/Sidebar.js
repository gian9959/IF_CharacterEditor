function Sidebar() {
    return (
      <div className="Sidebar">
        <div className="logo-background">
          <img id='Logo' src={require('./Imgs/IF_Logo.png')} alt="logo"/>
        </div>
        <button className='saveButtons'>Salva</button>
        <button className='saveButtons'>Carica</button>
        <table>
          <tr>
            <th className='whiteTitle'>DIFFICOLTÀ</th>
            <th className='whiteTitle'>CD</th>
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
      </div>
    );
}

export default Sidebar;