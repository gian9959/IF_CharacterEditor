function Treecell(props) {
    const position = {
      gridRowStart: props.row[0],
      gridRowEnd: props.row[1],
      gridColumnStart: props.col[0],
      gridColumnEnd: props.col[1]
    }

    const update = (value) => {
      props.updateFunc(props.indexes, value);
    }

    return (
      <div className="Treecell" style={position}>
        <input className='treebox' type="checkbox" checked={props.value} onChange={(e) => update(e.target.checked)}/>
      </div>
    );
}
export default Treecell;