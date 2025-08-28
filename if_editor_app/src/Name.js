function Name(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+2
  }

    const update = (value) => {
      props.updateFunc('nome', value);
    }

    return (
        <div className="Statblock col" style={position}>
            <h2 className='whiteTitle'>NOME</h2>
            <input className='textInput nameInput' type="text" value={props.value} onChange={(e) => update(e.target.value)}/>
        </div>
    );
}

export default Name;