function LV(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+2
  }

    return (
      <div className="Statblock col" style={position}>
          <h2 className='whiteTitle just-right'>LV</h2>
          <div className='row'>
            <input className='Skills' type="text" />
            <input className='statInput' type="number" />
          </div>
      </div>
    );
}

export default LV;