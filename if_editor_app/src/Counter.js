function Counter(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row,
    gridColumnStart: props.col,
    gridColumnEnd: props.col
  }
  
    return (
      <div className="Counter col" style={position}>
        <h2 className="whiteTitle center">{props.stat}</h2>
        <div className="row">
            <input className="counterInput" type="number"/>
            { props.max &&
              <input className="counterInput" type="number"/>
            }
        </div>
      </div>
    );
}

export default Counter;