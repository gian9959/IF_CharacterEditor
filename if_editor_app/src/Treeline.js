function Treeline(props) {
    const position = {
      gridRowStart: props.row[0],
      gridRowEnd: props.row[1],
      gridColumnStart: props.col[0],
      gridColumnEnd: props.col[1]
    }

    return (
      <svg className="Treeline" xmlns="http://www.w3.org/2000/svg" style={position}>
        { !props.invert &&
          <line x1="100%" y1="0%" x2="0%" y2="100%" />}
        { props.invert &&
          <line x1="100%" y1="100%" x2="0%" y2="0%" />}
      </svg>
    );
}
export default Treeline;