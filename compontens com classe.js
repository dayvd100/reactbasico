import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "Dayvd",
      counter: 0,
      incrementCounter: () => {
        const {counter} = this.state;
        this.setState({counter: counter + 1});
      }
    };
  }
  render(){

    const {name} = this.state;
    const {counter} = this.state;
    const {incrementCounter} = this.state

    return (
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      {name} {counter}
                    </p>
                    <button onClick={incrementCounter}>counter</button>
                  </header>
                </div>)
        }
  }




// class App extends Component{

//   constructor(props){
//     super(props);

//     this.state = {
//       name: "Dayvd Allyson",
//       handleClick: () => {
//         this.setState({name: "Allyson Dayvd"});
//       },
//       counter: 0,
//       incrementCounter: (event) => {
//         event.preventDefault();
//         const {counter} = this.state;
//         this.setState({counter: counter + 1})
//       }
//     }

   
//   }

//   render(){

//     const { name } = this.state;
//     const {handleClick} = this.state;
//     const {counter} = this.state;
//     const {incrementCounter} = this.state;

//     return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p onClick={handleClick}>
//                 {name}
//               </p>
//               <button onClick={incrementCounter}>{counter}</button>
//             </header>
//           </div>)
//   }
// }

export default App;


