function Classrow(props) {
    const position = {
      gridRowStart: props.row,
      gridRowEnd: props.row+1,
      gridColumnStart: props.col,
      gridColumnEnd: props.col+1
    }

    const update = (index, value) => {
      let ar = props.value.slice();
      ar[index] = value;
      props.updateFunc(props.index, ar);
    }
  
    return (
      <div className="Classrow row" style={position}>
            <h2 className="whiteTitle centerText classLabel">{props.label}</h2>

            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[0]} onChange={(e) => update(0, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[1]} onChange={(e) => update(1, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[2]} onChange={(e) => update(2, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[3]} onChange={(e) => update(3, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[4]} onChange={(e) => update(4, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[5]} onChange={(e) => update(5, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[6]} onChange={(e) => update(6, e.target.checked)}/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox" checked={props.value[7]} onChange={(e) => update(7, e.target.checked)}/>
            </div>
      </div>
    );
}

export default Classrow;