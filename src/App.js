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
  
  constructor(props) {
    let Parsetime = (num) => {
      let res = "";
      if(num < 10) {
        res = "0"+num.toString();
      } else {
        res = num.toString();
      }
      return res;
    };



    super(props);
    this.state = {
      times:[
        {id:1,type:"hour",content:Parsetime(new Date().getHours()),end:" : "},
        {id:2,type:"minute",content:Parsetime(new Date().getMinutes()),end:" : "},
        {id:3,type:"second",content:Parsetime(new Date().getSeconds()),end:" AM"}
        // {id:1,type:"time",content:new Date().getHours()+" : "+new Date().getMinutes()+" : "+new Date().getSeconds()+" AM "}
    ]
    }
    
    
  }
    

  


  // componentDidMount() {
  //   setInterval( () => {
  //     let newHour = new Date().getHours();
  //     let newMinute = new Date().getMinutes();
  //     let newSecond = new Date().getSeconds(); 
  //     this.setState({
        
  //     })
  //   },1000)
  // }

  bindingTime = (event,id) => {
    const timeIndex = this.state.times.findIndex(p => {
      return p.id === id
    });
      const times = [...this.state.times];
      const time = {...this.state.times[timeIndex]};
      time.content = event.target.value;
      times[timeIndex] = time;
    // if(timeIndex !== 3) {
    //   const time = {...this.state.times[timeIndex]};
    //   // console.log(time);
    //   time.content = event.target.value;
    //   // console.log(time.content);
    //   // console.log(event.target.value);
    //   times[timeIndex] = time;
    // } else {
    //   const time = {...this.state.times[timeIndex]};
    //   time.content = event.target.value;
    //   times[timeIndex] = time;
    // }
    

    this.setState({
      times:times
    })
    console.log(this.state);
  }
  
  // link = (id) => {

  // }

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
            end={time.end}
            change={(event)=>{this.bindingTime(event,time.id)}}
            />
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

//setInterval,setstartedclock