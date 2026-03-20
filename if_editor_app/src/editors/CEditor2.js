import RidPM from '../editor2Elements/RidPM';
import Textbox from '../otherElements/Textbox';

function CEditor2(props) {

    const updateAnatomy = (statID, stat) => {
      props.updateFunc(char => {
        return {...char, anatomia:{...char.anatomia, [statID]: stat}}
      });
    }

    return (
      <div className="CEditor2">
        <Textbox title='OCCHIO SX' id='occhioSx' row={[1,3]} col={[1,2]} updateFunc={updateAnatomy} values={[props.values['occhioSx'], props.values['md']]} index={0}/>
        <Textbox title='OCCHIO DX' id='occhioDx' row={[1,3]} col={[2,3]} updateFunc={updateAnatomy} values={[props.values['occhioDx'], props.values['md']]} index={1}/>

        <Textbox title='BRACCIO SX' id='braccioSx' row={[3,5]} col={[1,2]} updateFunc={updateAnatomy} values={[props.values['braccioSx'], props.values['md']]} index={2}/>
        <Textbox title='BRACCIO DX' id='braccioDx' row={[3,5]} col={[2,3]} updateFunc={updateAnatomy} values={[props.values['braccioDx'], props.values['md']]} index={3}/>

        <Textbox title='GAMBA SX' id='gambaSx' row={[5,7]} col={[1,2]} updateFunc={updateAnatomy} values={[props.values['gambaSx'], props.values['md']]} index={4}/>
        <Textbox title='GAMBA DX' id='gambaDx' row={[5,7]} col={[2,3]} updateFunc={updateAnatomy} values={[props.values['gambaDx'], props.values['md']]} index={5}/>

        <Textbox title='CRANIO' id='cranio' row={[1,4]} col={[4,6]} updateFunc={updateAnatomy} values={[props.values['cranio'], props.values['md']]} index={6}/>

        <Textbox title='BUSTO' id='busto' row={[4,7]} col={[4,6]} updateFunc={updateAnatomy} values={[props.values['busto'], props.values['md']]} index={9}/>

        <div className='col skeletonCol'>
          <RidPM value={props.values['ridPM']} updateFunc={updateAnatomy}/>
          <img id='skeleton' src={require('../Imgs/skeleton.png')} alt="skeleton"/>
        </div>
      </div>
    );
}

export default CEditor2;
