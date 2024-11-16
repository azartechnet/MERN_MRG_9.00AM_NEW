import React from "react";
import ReactDOM from 'react-dom/client';

//Basic Rendering
/*const App=()=>{
  return(
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);*/

//Dynamic Rendering

const Sample=()=>{
  const name="John";
  const age=30;
  return(
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Today Date:{new Date().toDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample />);