import RidPM from './RidPM';
import Textbox from './Textbox';

function CEditor2() {
    return (
      <div className="CEditor2">
        <Textbox title='OCCHIO SX' row={[1,1]} col={[1,2]}/>
        <Textbox title='OCCHIO DX' row={[1,1]} col={[2,3]}/>

        <Textbox title='BRACCIO SX' row={[2,2]} col={[1,2]}/>
        <Textbox title='BRACCIO DX' row={[2,2]} col={[2,3]}/>

        <Textbox title='GAMBA SX' row={[3,3]} col={[1,2]}/>
        <Textbox title='GAMBA DX' row={[3,3]} col={[2,3]}/>

        <Textbox title='CRANIO' row={[1,1]} col={[4,6]}/>

        <Textbox title='ORECCHIE' row={[2,2]} col={[4,5]}/>
        <Textbox title='BOCCA' row={[2,2]} col={[5,6]}/>

        <Textbox title='BUSTO' row={[3,3]} col={[4,6]}/>

        <div className='col skeletonCol'>
          <RidPM/>
          <img id='skeleton' src={require('./Imgs/skeleton.png')} alt="skeleton"/>
        </div>
      </div>
    );
}

export default CEditor2;
