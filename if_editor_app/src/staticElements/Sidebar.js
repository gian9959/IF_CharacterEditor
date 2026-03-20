import DiceRoller from './DiceRoller.js'

function Sidebar(props) {

    const save = () => {
      props.saveFunc();
    }

    const load = () => {
      var upfile = document.getElementById('fileInput').files[0];

      if(upfile != null){
        var reader = new FileReader();
        reader.readAsText(upfile, 'UTF-8');
        reader.onload = function (e) {
          var frd = JSON.parse(e.target.result);

          // converting from older versions
          if(frd['version'] < 'v1.1'){
            frd = {...frd,
                  statistiche:{...frd.statistiche, md: [false,false,false]},
                  anatomia:{...frd.anatomia, md: [false,false,false,false,false,false,false,false,false,false]},
                  incantesimi:{...frd.incantesimi, md: [false]}
            }
          }
          if(frd['version'] < 'v1.2'){
            let old = frd['anatomia']['orecchie'];
            delete frd['anatomia']['orecchie']
            frd['anatomia']['cranio'] = frd['anatomia']['cranio'] + '\n' + old;

            old = frd['anatomia']['bocca'];
            delete frd['anatomia']['bocca']
            frd['anatomia']['cranio'] = frd['anatomia']['cranio'] + '\n' + old;
          }
          frd['version'] = 'v1.2';
          props.loadFunc(frd);
        }
      }
    }

    const fakeClick = () => {
      document.getElementById('fileInput').click();
    }

    return (
      <div className="Sidebar">
        <img id='Logo' src={require('../Imgs/IF_Logo.png')} alt="logo"/>
        <button className='customButton saveButtons' onClick={() => save()}>Salva</button>
        <button className='customButton saveButtons' onClick={() => fakeClick()}>Carica</button>
        <input id='fileInput' className='hidden' type='file' onChange={() => load()}/>
        
        <table className='difficultTable'>
          <tbody>
            <tr>
              <th className='whiteTitle tableHeader'>DIFFICOLTÀ</th>
              <th className='whiteTitle tableHeader'>CD</th>
            </tr>
            <tr>
              <th className='whiteTitle tableEntry'>Nella media</th>
              <td>10-11</td>
            </tr>
            <tr>
              <th className='whiteTitle tableEntry'>Impegnativa</th>
              <td>12-13</td>
            </tr>
            <tr>
              <th className='whiteTitle tableEntry'>Difficile</th>
              <td>14-15</td>
            </tr>
            <tr>
              <th className='whiteTitle tableEntry'>Molto difficile</th>
              <td>16-17</td>
            </tr>
            <tr>
              <th className='whiteTitle tableEntry'>Quasi impossibile</th>
              <td>18-19</td>
            </tr>
          </tbody>
        </table>
        <DiceRoller />
      </div>
    );
}

export default Sidebar;