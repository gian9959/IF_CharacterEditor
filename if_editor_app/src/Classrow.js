function Classrow(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row+1,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+1
  }
  
    return (
      <div className="Classrow row" style={position}>
            <h2 className="whiteTitle centerText classLabel">{props.label}</h2>

            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
            <div className="classFlex">
              <input className="class-check" type="checkbox"/>
            </div>
      </div>
    );
}

export default Classrow;