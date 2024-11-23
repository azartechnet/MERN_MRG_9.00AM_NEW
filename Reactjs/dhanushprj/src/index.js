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
/*const x=20;
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
 r1.render(<MyElem />);*/

 //Task if if-else Nested if else

 /*import './index.css';

 const App=()=>{
  return(
    <h1>Welcome</h1>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<App />); */

 //Function Component

 /*function Sample()
 {
  return(
    <div>
      <h1>Hello</h1>
      <form>
        <label>Enter your name:</label>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Sample />);*/

 //class Component

 /*class Sample extends React.Component
 {
    render()
    {
      return(
        <div>
          <h1>Hello</h1>
          <p>Welcome</p>
        </div>
      )
    }
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Sample />);*/

 //function component with arguments

 /*function Sample(props)
 {
  return(
    <div>
      <h1>Hello {props.name}{props.age}</h1>
      <p>Welcome</p>
    </div>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Sample name="Rahul" age="35"/>);*/

 //React Component in Component

 /*function Component1()
 {
  return(
    <div>
      <h1>Hello</h1>
      <p>Component1</p>
      <Component2/>
    </div>
  )
 }
 function Component2()
 {
   return(
    <div>
      <h1>Hello</h1>
      <p>Component2</p>
    </div>
   )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Component1/>)*/

 //constructor using super

 /*class Sample extends React.Component
 {
    constructor()
    {
      super();
      this.state={name:"Rahul",age:35}
    }
    render()
    {
      return(
        <div>
          <h1>Hello {this.state.name}{this.state.age}</h1>
          <p>Welcome</p>
        </div>
      )
    }
  
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Sample/>)*/

 //constructor using props

 /*class Sample extends React.Component
 {
  constructor(props)
  {
    super(props);
    this.state={name:this.props.name,age:this.props.age}
  }
  render()
  {
    return(
      <div>
        <h1>Hello {this.props.name}{this.state.age}</h1>
      </div>
      )
  }
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Sample name="Rahul " age={35}/>)*/

 //Changing the state object

 /*class Sample extends React.Component
 {
  constructor(props)
  {
    super(props);
    this.state={name:"Rahul",age:35}
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick()
  {
    this.setState({age:40})
  }

  render()
  {
      return(
        <div>
          <h1>Hello {this.state.name}{this.state.age}</h1>
          <button onClick={this.handleClick}>Click</button>
        </div>
      )
  }
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Sample/>)*/

 //changing the state object

 /*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            emp:{
                name:"John",
                age:30,
                city:"nkl"
            },
            showData:false
        }
    }
    showData()
    {
         this.setState({
            showData:true
            })
    }
    hideData()
    {
        this.setState({
            showData:false
            })
    }
    render()
    {
        let data;
        if(this.state.showData==true)
        {
              data=<div>
                <h1>Name: {this.state.emp.name}</h1>
                 <h2>Age: {this.state.emp.age}</h2>
                 <h3>City: {this.state.emp.city}</h3>
                 <button onClick={this.hideData.bind(this)}>Hide</button>
              </div>
        }
            else
            {
                 data=<button onClick={this.showData.bind(this)}>Show</button>
            }
               
        
        return(
            <div>
                
                 {data}
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    alert("Goal")
  }
  return(
    <div>
      <button onClick={shoot}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Argument passing

/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal in ${year}`)
  }
  return(
    <div>
      <button onClick={()=>shoot(2022)}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

function MissedGoal()
{
  return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>MadeGoal</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
      return<MadeGoal/>
  }
  else
  {
      return<MissedGoal/>
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)
 