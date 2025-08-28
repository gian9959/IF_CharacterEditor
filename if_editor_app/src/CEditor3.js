import Textbox from './Textbox';
import Treecell from './Treecell';
import PI from './PI';

function CEditor3() {
    return (
      <div className="CEditor3">
        <div className='row-spaced'>
          <div className='col-end'>
            <div className='spellLabel centerText'>
              <h2>Liv. 4</h2>
              <p>40 PM</p>
            </div>
            <div className='spellLabel centerText'>
              <h2>Liv. 3</h2>
              <p>20 PM</p>
            </div>
            <div className='spellLabel centerText'>
              <h2>Liv. 2</h2>
              <p>10 PM</p>
            </div>
            <div className='spellLabel centerText'>
              <h2>Liv. 1</h2>
              <p>5 PM</p>
            </div>
          </div>
          <div className='treeWrapper'>
            <div className='treeGrid'>
              <Treecell row={[11,14]} col={[1,3]}/>
              <Treecell row={[11,14]} col={[3,5]}/>
              <Treecell row={[11,14]} col={[5,7]}/>
              <Treecell row={[11,14]} col={[7,9]}/>

              <Treecell row={[11,14]} col={[11,13]}/>
              <Treecell row={[11,14]} col={[13,15]}/>
              <Treecell row={[11,14]} col={[15,17]}/>
              <Treecell row={[11,14]} col={[17,19]}/>

              <Treecell row={[7,12]} col={[2,5]}/>
              <Treecell row={[7,12]} col={[5,8]}/>
              
              <Treecell row={[7,12]} col={[12,15]}/>
              <Treecell row={[7,12]} col={[15,18]}/>

              <Treecell row={[5,8]} col={[3,7]}/>

              <Treecell row={[5,8]} col={[13,17]}/>

              <Treecell row={[1,7]} col={[7,13]}/>

              <PI/>
            </div>
          </div>
          <div className='col-end'>
            <div className='spellLabel centerText'>
              <h2>Quasi impossibile</h2>
              <p>(24-27)</p>
            </div>
            <div className='spellLabel centerText'>
              <h2>Molto difficile</h2>
              <p>(20-23)</p>
            </div>
            <div className='spellLabel centerText'>
              <h2>Difficile</h2>
              <p>(16-19)</p>
            </div>
            <div className='spellLabel centerText'>
              <h2>Impegnativa</h2>
              <p>(12-15)</p>
            </div>
          </div>
        </div>
        <table className='occultTable'>
          <tr>
            <th></th>
            <th className='whiteTitle tableHeader justifyText'>INVASIONE DELL'INCUBO</th>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>1. Debolezza occulta</th>
            <td className='justifyText'>Per un giorno, se sei bersaglio di una prova di attacco, ottieni 1 malus alla difesa.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>2. Polifobia</th>
            <td className='justifyText'>Ottieni 1 malus a tutte le prove di MEN e le sue abilità per un giorno.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>3. Prosciugamento mentale</th>
            <td className='justifyText'>Per un giorno dimezza i tuoi PM massimi.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>4. Amnesia</th>
            <td className='justifyText'>Dimentichi gli avvenimenti degli ultimi 10 minuti.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>5. Creatura immonda</th>
            <td className='justifyText'>Viene evocato un guardiano tentacolare dall'Incubo, nemico di tutto e tutti.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>6. Emoragia cerebrale</th>
            <td className='justifyText'>Azzera i tuoi PC, ma non utilizzare la tabella “Ferite permanenti”.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>7. Ferita permanente</th>
            <td className='justifyText'>Utilizza la tabella “Ferite permanenti”, ma tira 1d6.</td>
          </tr>
          <tr>
            <th className='whiteTitle tableEntry justifyText'>8. Metamorfosi occulta</th>
            <td className='justifyText'>Muta un tuo tratto casuale con uno casuale di un’altra stirpe. </td>
          </tr>
        </table>
        <Textbox title='INCANTESIMI' row={[1,3]} col={[2,3]}/>
      </div>
    );
}

export default CEditor3;
