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

/*const Sample=()=>{
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
r1.render(<Sample />);*/

//React without JSX

/*const myelem1=React.createElement("h1",null,"Welcome")
const myelem2=React.createElement("p",null,"This is a paragraph")
const myelem3=React.createElement("span",null,"This is a span")
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(React.createElement("div",null,myelem1,myelem2,myelem3));*/

//React with JSX

/*const App=<h1>Welcome</h1>
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(App);*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>My List</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ol>
         <li>List1</li>
         <li>List2</li>
         <li>List3</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem />); */

//Conditional Rendering
const x=20;
let text="";
if(x>10)
{
   text="Greater than 10"
}
else if(x==10)
{
  text="Equal to 10"
}
else
{
  text="Less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<MyElem />);