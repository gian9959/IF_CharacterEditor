import { useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

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

    const [md, setMD] = useState(false);

    const updateMD = (btn) => {
      let newMD = !md;
      setMD(newMD);
      if(newMD){
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }

    marked.use({
      breaks: true
    });

    return (
        <div className='Textbox col' style={position}>
          <div className='row'>
            <h2 className="whiteTitle">{props.title}</h2>
            <button className='customButton mdButtons' onClick={(e) => updateMD(e.target)}>MD</button>
          </div>
          { !md &&
            <textarea className="textInput row" type="text" value={props.value} onChange={(e) => update(e.target.value)}>
            </textarea>}
          { md &&
            <div className="mdInput" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(props.value))}}>
            </div>}
        </div>
    );
}
export default Textbox;