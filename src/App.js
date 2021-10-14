import React, {Component} from 'react';
// import logo from './logo.svg'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Rancid Tomatillos </h1>
          <a
            className="header-link"
            href="https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html"
            target="_blank"
            rel="noopener noreferrer"
          >My Watch List
          </a>
          <a
            className="header-link"
            href="https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html"
            target="_blank"
            rel="noopener noreferrer"
          >My Favorites
          </a>
          <button>Search Movies</button>
        </header>
      </div>
    );
  }
  }

export default App;
