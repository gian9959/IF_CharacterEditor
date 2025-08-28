function PointCounter(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row+1,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+1
  }
  
    return (
      <div className="PointCounter col" style={position}>
        <h2 className="whiteTitle centerText v-font">PUNTI VIAGGIATORE</h2>
        <div className="row counterInput">
            <input className="v-check" type="checkbox"/>
            <input className="v-check" type="checkbox"/>
            <input className="v-check"  type="checkbox"/>
            <input className="v-check"  type="checkbox"/>
        </div>
      </div>
    );
}

export default PointCounter;