import RidPM from './RidPM';
import Textbox from './Textbox';

function CEditor2(props) {

    const updateAnatomy = (statID, stat) => {
      props.updateFunc(char => {
        return {...char, anatomia:{...char.anatomia, [statID]: stat}}
      });
    }

    return (
      <div className="CEditor2">
        <Textbox title='OCCHIO SX' id='occhioSx' row={[1,1]} col={[1,2]} value={props.values['occhioSx']} updateFunc={updateAnatomy}/>
        <Textbox title='OCCHIO DX' id='occhioDx' row={[1,1]} col={[2,3]} value={props.values['occhioDx']} updateFunc={updateAnatomy}/>

        <Textbox title='BRACCIO SX' id='braccioSx' row={[2,2]} col={[1,2]} value={props.values['braccioSx']} updateFunc={updateAnatomy}/>
        <Textbox title='BRACCIO DX' id='braccioDx' row={[2,2]} col={[2,3]} value={props.values['braccioDx']} updateFunc={updateAnatomy}/>

        <Textbox title='GAMBA SX' id='gambaSx' row={[3,3]} col={[1,2]} value={props.values['gambaSx']} updateFunc={updateAnatomy}/>
        <Textbox title='GAMBA DX' id='gambaDx' row={[3,3]} col={[2,3]} value={props.values['gambaDx']} updateFunc={updateAnatomy}/>

        <Textbox title='CRANIO' id='cranio' row={[1,1]} col={[4,6]} value={props.values['cranio']} updateFunc={updateAnatomy}/>

        <Textbox title='ORECCHIE' id='orecchie' row={[2,2]} col={[4,5]} value={props.values['orecchie']} updateFunc={updateAnatomy}/>
        <Textbox title='BOCCA' id='bocca' row={[2,2]} col={[5,6]} value={props.values['bocca']} updateFunc={updateAnatomy}/>

        <Textbox title='BUSTO' id='busto' row={[3,3]} col={[4,6]} value={props.values['busto']} updateFunc={updateAnatomy}/>

        <div className='col skeletonCol'>
          <RidPM value={props.values['ridPM']} updateFunc={updateAnatomy}/>
          <img id='skeleton' src={require('./Imgs/skeleton.png')} alt="skeleton"/>
        </div>
      </div>
    );
}

export default CEditor2;
