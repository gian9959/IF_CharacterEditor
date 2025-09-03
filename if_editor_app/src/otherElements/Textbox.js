import { useRef, useEffect } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

function Textbox(props) {
    const position = {
    gridRowStart: props.row[0],
    gridRowEnd: props.row[1],
    gridColumnStart: props.col[0],
    gridColumnEnd: props.col[1]
  }

    const update = (id, value) => {
      props.updateFunc(id, value);
    }

    var md = props.values[1][props.index];
    const btn = useRef();

    const updateMD = () => {
      md = !md;
      let ar = props.values[1].slice();
      ar[props.index] = md;
      update('md', ar);
    }

    marked.use({
      breaks: true
    });

    useEffect(() => {
      if(md){
        btn.current.classList.add('active');
      } else if(btn.current.classList.contains('active')) {
        btn.current.classList.remove('active');
      }
    }, [md]);

    return (
        <div className='Textbox col' style={position}>
          <div className='row'>
            <h2 className="whiteTitle">{props.title}</h2>
            <button className='customButton mdButtons' ref={btn} onClick={() => updateMD()}>MD</button>
          </div>
          { !md &&
            <textarea className="textInput row" type="text" value={props.values[0]} onChange={(e) => update(props.id, e.target.value)}>
            </textarea>}
          { md &&
            <div className="mdInput" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(props.values[0]))}}>
            </div>}
        </div>
    );
}
export default Textbox;