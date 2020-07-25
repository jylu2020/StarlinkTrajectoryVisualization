import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// import Hello from './Hello';
import App from "./components/App";
import './index.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));

ReactDOM.render((
  <App />
), document.getElementById('root'));
