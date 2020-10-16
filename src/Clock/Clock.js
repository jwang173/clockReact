import React from 'react';
import { render } from 'react-dom';

import './Clock.css';

const time = (props) => {
    // render() {
    //     const style = {
    //         display: 'inline'
    //     }
    // };

    return (
        <div className="Time" style={{flexWrap:'nowrap',width:'fit-content',display:'inline'}}>
            {/* <p>{props.content}</p> */}
            {/* <p>{props.children}</p> */}
            
            <input style={{display:'-webkit-inline',width:'fit-content'}} type="text" value={props.content} onChange={props.change}></input>
            <span>{props.end}</span>
            {/* <span value={props.end}></span> */}
        </div>
    )
}

export default time;