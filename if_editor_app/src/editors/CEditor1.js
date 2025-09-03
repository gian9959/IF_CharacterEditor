import Statblock from '../editor1Elements/Statblock';
import Counter from '../editor1Elements/Counter';
import PointCounter from '../editor1Elements/PointCounter';
import Textbox from '../otherElements/Textbox';
import Name from '../editor1Elements/Name';
import Level from '../editor1Elements/Level';

function CEditor1(props) {

    const updateStats = (statID, stat) => {
      props.updateFunc(char => {
        return {...char, statistiche:{...char.statistiche, [statID]: stat}}
      });
    }

    return (
      <div className="CEditor1">
        <Name row={1} col={1} updateFunc={updateStats} value={props.values['nome']}/>
        <Level row={1} col={3} updateFunc={updateStats} value={props.values['lv']}/>

        <Statblock stat='CORPO (COR)' id='cor' row={2} col={1} updateFunc={updateStats} values={[props.values['cor'], props.values['corA']]}/>
        <Statblock stat='MENTE (MEN)' id='men' row={2} col={3} updateFunc={updateStats} values={[props.values['men'], props.values['menA']]}/>

        <Statblock stat='FORZA (FOR)' id='forz' row={3} col={1} updateFunc={updateStats} values={[props.values['forz'], props.values['forzA']]}/>
        <Statblock stat='DESTREZZA (DES)' id='des' row={3} col={3} updateFunc={updateStats} values={[props.values['des'], props.values['desA']]}/>

        <Statblock stat='INTELLIGENZA (INT)' id='int' row={4} col={1} updateFunc={updateStats} values={[props.values['int'], props.values['intA']]}/>
        <Statblock stat='OCCULTO (OCC)' id='occ' row={4} col={3} updateFunc={updateStats} values={[props.values['occ'], props.values['occA']]}/>

        <Statblock stat='PERCEZIONE (PER)' id='per' row={5} col={1} updateFunc={updateStats} values={[props.values['per'], props.values['perA']]}/>
        <Statblock stat='COMUNICAZIONE (COM)' id='com' row={5} col={3} updateFunc={updateStats} values={[props.values['com'], props.values['comA']]}/>

        <div className='counterBackground'></div>

        <Counter max={true} stat='PV' id='pv' row={6} col={1} updateFunc={updateStats} values={[props.values['pv'], props.values['pvMax']]}/>
        <Counter max={true} stat='PM' id='pm' row={6} col={2} updateFunc={updateStats} values={[props.values['pm'], props.values['pmMax']]}/>
        <Counter max={false} stat='ARM' id='arm' custom_top_marg={0} row={7} col={1} updateFunc={updateStats} values={[props.values['arm']]}/>

        <PointCounter row={7} col={2} updateFunc={updateStats} value={props.values['viagg']}/>

        <Textbox title='NOTE' id='note' row={[6,8]} col={[3,5]} updateFunc={updateStats} values={[props.values['note'], props.values['md']]} index={0}/>

        <Textbox title='TALENTI / TRATTI' id='talenti' row={[1,5]} col={[5,9]} updateFunc={updateStats} values={[props.values['talenti'], props.values['md']]} index={1}/>
        <Textbox title='INVENTARIO' id='inventario' row={[5,8]} col={[5,9]} updateFunc={updateStats} values={[props.values['inventario'], props.values['md']]} index={2}/>

      </div>
    );
}

export default CEditor1;
