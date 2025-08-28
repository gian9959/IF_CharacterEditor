import Classrow from "./Classrow";

function LV(props) {
    const position = {
      gridRowStart: props.row,
      gridRowEnd: props.row,
      gridColumnStart: props.col,
      gridColumnEnd: props.col+2
    }

    const update = (index, value) => {
      let ar = props.value.slice();
      ar[index] = value;
      props.updateFunc('lv', ar);
    }

    var total = 0;
    for(let i in props.value){
      for(let j in props.value[i]){
        if(props.value[i][j])
          total++;
      }
    }

    return (
      <div className="Statblock row" style={position}>
          <div className="col">
            <Classrow label='G' index={0} value={props.value[0]} updateFunc={update}/>
            <Classrow label='S' index={1} value={props.value[1]} updateFunc={update}/>
            <Classrow label='T' index={2} value={props.value[2]} updateFunc={update}/>
            <Classrow label='O' index={3} value={props.value[3]} updateFunc={update}/>
          </div>
          <div className='lv-col'>
            <h2 className='whiteTitle centerText'>LV</h2>
            <div className="LvResultWindow centerText">
              <h3>{total}</h3>
            </div>
          </div>
      </div>
    );
}

export default LV;