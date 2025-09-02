function PointCounter(props) {
    const position = {
      gridRowStart: props.row,
      gridRowEnd: props.row+1,
      gridColumnStart: props.col,
      gridColumnEnd: props.col+1
    }

    const update = (index, value) => {
      let ar = props.value.slice();
      ar[index] = value;
      props.updateFunc('viagg', ar);
    }
  
    return (
      <div className="PointCounter col" style={position}>
        <h2 className="whiteTitle centerText v-font">PUNTI VIAGGIATORE</h2>
        <div className="row counterInput">
            <input className="v-check" type="checkbox" checked={props.value[0]} onChange={(e) => update(0, e.target.checked)}/>
            <input className="v-check" type="checkbox" checked={props.value[1]} onChange={(e) => update(1, e.target.checked)}/>
            <input className="v-check" type="checkbox" checked={props.value[2]} onChange={(e) => update(2, e.target.checked)}/>
            <input className="v-check" type="checkbox" checked={props.value[3]} onChange={(e) => update(3, e.target.checked)}/>
        </div>
      </div>
    );
}

export default PointCounter;