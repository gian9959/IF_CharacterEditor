function RidPM(props) {

    const update = (value) => {
        props.updateFunc('ridPM', value);
    }
  
    return (
      <div className="Counter col">
        <h2 className="whiteTitle centerText">RID. PM</h2>
        <input className="pmInput" type="number" value={props.value} onChange={(e) => update(e.target.value)}/>
      </div>
    );
}

export default RidPM;