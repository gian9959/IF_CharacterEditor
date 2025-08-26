function Name(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+2
  }

    return (
        <div className="Statblock col" style={position}>
            <h2 className='whiteTitle'>NOME</h2>
            <input className='textInput nameInput' type="text" />
        </div>
    );
}

export default Name;