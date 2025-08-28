function Textbox(props) {
    const position = {
    gridRowStart: props.row[0],
    gridRowEnd: props.row[1],
    gridColumnStart: props.col[0],
    gridColumnEnd: props.col[1]
  }

    const update = (value) => {
      props.updateFunc(props.id, value);
    }

    return (
        <div className='Textbox col' style={position}>
            <h2 className="whiteTitle">{props.title}</h2>
            <textarea className="textInput row" type="text" value={props.value} onChange={(e) => update(e.target.value)}>
            </textarea>
        </div>
    );
}
export default Textbox;