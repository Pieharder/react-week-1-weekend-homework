// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;


import React from "react";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      {/* This is a JSX comment. */}
      <hr/>
    </React.Fragment>
  );
}

export default App;