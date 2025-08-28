function Counter(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row+1,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+1,
    marginTop: props.custom_top_marg,
    marginBottom: props.custom_bot_marg
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
            <input className="counterInput" type="number" style={fontStyle}/>
            { props.max &&
              <input className="counterInputMax" type="number" placeholder="MAX" style={fontStyle}/>
            }
        </div>
      </div>
    );
}

export default Counter;