import Classrow from "./Classrow";

function LV(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+2
  }

    return (
      <div className="Statblock row" style={position}>
          <div className="col">
            <Classrow label='G'/>
            <Classrow label='S'/>
            <Classrow label='T'/>
            <Classrow label='O'/>
          </div>
          <div className='lv-col'>
            <h2 className='whiteTitle centerText'>LV</h2>
            <div className="resultWindow"></div>
          </div>
      </div>
    );
}

export default LV;