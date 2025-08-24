function Textbox(props) {
    const position = {
    gridRowStart: props.row[0],
    gridRowEnd: props.row[1],
    gridColumnStart: props.col[0],
    gridColumnEnd: props.col[1]
  }

    return (
        <div className='Textbox col' style={position}>
            <h2 className="whiteTitle">{props.title}</h2>
            <textarea className="textInput" type="text" >
            </textarea>
        </div>
    );
}
export default Textbox;