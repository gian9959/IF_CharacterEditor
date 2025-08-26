import Statblock from './Statblock';
import Counter from './Counter';
import PointCounter from './PointCounter';
import Textbox from './Textbox';
import Name from './Name';
import LV from './LV';

function CEditor() {
    return (
      <div className="CEditor">
        <Name row={1} col={1}/>
        <LV row={1} col={3}/>

        <Statblock stat='CORPO (COR)' row={2} col={1}/>
        <Statblock stat='MENTE (MEN)' row={2} col={3}/>

        <Statblock stat='FORZA (FOR)' row={3} col={1}/>
        <Statblock stat='DESTREZZA (DES)' row={3} col={3}/>

        <Statblock stat='INTELLIGENZA (INT)' row={4} col={1}/>
        <Statblock stat='OCCULTO (OCC)' row={4} col={3}/>

        <Statblock stat='COMUNICAZIONE (COM)' row={5} col={1}/>
        <Statblock stat='PERCEZIONE (PER)' row={5} col={3}/>

        <div className='counterBackground'>
          .
        </div>

        <Counter max={true} stat='PV' row={6} col={1}/>
        <Counter max={true} stat='PM' row={6} col={2}/>
        <Counter max={false} custom_top_marg={0} stat='ARM' row={7} col={1}/>

        <PointCounter row={7} col={2}/>

        <Textbox title='NOTE' row={[6,8]} col={[3,5]}/>

        <Textbox title='TALENTI / TRATTI' row={[1,5]} col={[5,9]}/>
        <Textbox title='INVENTARIO' row={[5,8]} col={[5,9]}/>

      </div>
    );
}

export default CEditor;
