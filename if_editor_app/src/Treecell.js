function Treecell(props) {
    const position = {
    gridRowStart: props.row[0],
    gridRowEnd: props.row[1],
    gridColumnStart: props.col[0],
    gridColumnEnd: props.col[1]
  }

    return (
      <div className="Treecell" style={position}>
        <input className='treebox' type="checkbox"/>
      </div>
    );
}
export default Treecell;