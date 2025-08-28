function Statblock(props) {
  const position = {
    gridRowStart: props.row,
    gridRowEnd: props.row,
    gridColumnStart: props.col,
    gridColumnEnd: props.col+2
  }

    const update = (id, value) => {
      props.updateFunc(id, value);
    }

    return (
      <div className="Statblock col" style={position}>
          <h2 className='whiteTitle'>{props.stat}</h2>
          <div className='row'>
            <input className='statInput' value={props.values[0]} onChange={(e) => update(props.id, e.target.value)} type="number" />
            <textarea className='Skills' value={props.values[1]} onChange={(e) => update(props.id+'A', e.target.value)} type="text" />
          </div>
      </div>
    );
}

export default Statblock;