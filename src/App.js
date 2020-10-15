import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock/Clock'

// function App() {
//   return (
//     <div>
//       <h1>London clock</h1>
//       <h2></h2>
//     </div>
//   );
// }

class App extends Component {
    state = {
      times:[
        {id:1,type:"hour",content:new Date().getHours()},
        {id:2,type:"minute",content:new Date().getMinutes()},
        {id:3,type:"second",content:new Date().getSeconds()}
        // {id:1,type:"time",content:new Date().getHours()+" : "+new Date().getMinutes()+" : "+new Date().getSeconds()+" AM "}
    ]
  }

  bindingTime = (event,id) => {
    const timeIndex = this.state.times.findIndex(p => {
      return p.id === id
    });
    const time = {...this.state.times[timeIndex]};
    time.content = event.target.value;
    const times = [...this.state.times];
    times[timeIndex] = time;

    this.setState({
      times:times
    })
  }
  
  render() {
    const style = {
      
      fontColor:'black'
    }
     
    let clock = null;

    clock = (
      (
        <div>
          {this.state.times.map((time,index) => {
            return <Clock content={time.content} 
            key={time.id} 
            change={(event)=>{this.bindingTime(event,time.id)}}/>
          })}
        </div>
      )
    )

    return (
      <div className="App">
        <h1>London clock</h1>
        
        {clock}
      </div>
    )
  }
}

export default App;

//setInterval, inline, 1 or for, if id : AM