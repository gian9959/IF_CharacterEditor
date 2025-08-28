function Counter(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row+1,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+1,
    marginTop: props.custom_top_marg,
    marginBottom: props.custom_bot_marg
  }

  const update = (id, value) => {
      props.updateFunc(id, value);
  }

  var fontStyle = {
    fontSize: '2.5vw'
  }

  if (props.max) {
    fontStyle = {
      fontSize: '1vw'
    }
  }
  
    return (
      <div className="Counter col" style={position}>
        <h2 className="whiteTitle centerText">{props.stat}</h2>
        <div className="row">
            <input className="counterInput" type="number" style={fontStyle} value={props.values[0]} onChange={(e) => update(props.id, e.target.value)}/>
            { props.max &&
              <input className="counterInputMax" type="number" placeholder="MAX" style={fontStyle} value={props.values[1]} onChange={(e) => update(props.id+'Max', e.target.value)}/>
            }
        </div>
      </div>
    );
}

export default Counter;