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
        <div className="Time">
            {/* <p>{props.content}</p> */}
            {/* <p>{props.children}</p> */}
            <span><input style={{display:'-webkit-inline'}} type="text" value={props.content} onChange={props.change}/></span>
        </div>
    )
}

export default time;