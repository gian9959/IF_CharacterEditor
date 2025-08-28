function PI(props) {

    const update = (value) => {
        props.updateFunc('PI', value);
    }
  
    return (
      <div className="col pi-counter">
        <div className="Counter col">
          <h2 className="whiteTitle centerText">PI</h2>
          <input className="pmInput" type="number" value={props.value} onChange={(e) => update(e.target.value)}/>
        </div>
      </div>
    );
}

export default PI;