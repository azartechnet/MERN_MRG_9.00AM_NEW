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

/*function MissedGoal()
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
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
   const cars=["BMW","Audi","Toyota"]
   return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React keys

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Toyota"}
    ]
    return(
      <div>
        <h1>Garage</h1>
        <ul>
          {cars.map((car)=><Car  id={car.id} name={car.name}/>)}
        </ul>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React getDerivedStateFromProps

/*class Header extends React.Component
{
   constructor(props)
   {
    super(props)
    this.state={count:0}
   }
   static getDerivedStateFromProps(props,state)
   {
    console.log("getDerivedStateFromProps")
    return {count:props.count}
   }
   render()
   {
    return(
      <div>
        <h1>Header</h1>
        <p>Count:{this.state.count}</p>

      </div>
    )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header count={10}/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  componentDidMount()
  {
    console.log("componentDidMount")
    setTimeout(()=>{
      this.setState({favcolor:"blue"})
    },6000)
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>

      </div>
    )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//updating getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedStateFromProps")
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//shouldComponent update

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  static shouldComponentUpdate(nextProps,nextState)
  {
    console.log("ShouldComponentUpdate")
    // return nextState.favcolor!==this.state.favcolor;
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//React Hooks useState

import { useState,useEffect } from "react";

/*function Counter()
{
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rahul");
  return(
    <div>
      
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
      <p>Name: {name}</p>
      <button type="button" onClick={() => setName("Rahul Kumar")}>Change Name</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Another Example

/*function ThemeSwitcher()
{
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    };
    return(
      <div>
        <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        <p>Current Theme: {theme}</p>

      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ThemeSwitcher/>)*/

//useEffect

/*function ClickCounter()
{
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    }, [count]);
    return(
      <div>
        <p>Count: {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ClickCounter/>)*/

//React using without useContext

/*function Component1()
{
   const [user,setUser]=useState("mohamed")
   return(
    <div>
       <h1>UserName is::{user}</h1>
       <button onClick={()=>setUser("mohamed2")}>Change User</button>
       <Component2 user={user}/>
    </div>
   )
}
function Component2(props)
{
  return(
    <div>
      <h1>UserName is::{props.user}</h1>

    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//React with using useContext

import { useContext,createContext } from "react";
const UserContext=createContext();

function Component1()
{
  const [user,setUser]=useState("mohamed")
  return(
    <UserContext.Provider value={user}>

     <h1>Component1 user name is::{user}</h1>

     <Component2/>

    </UserContext.Provider>
  )
  function Component2()
  {
     const user=useContext(UserContext)
     return(
      <div>
        <h1>Component2 user name is::{user}</h1>
        <Component3/>
      </div>
     )
  }
  function Component3()
  {
    const user=useContext(UserContext)
    return(
      <div>
        <h1>Component3 user name is::{user}</h1>
      </div>
      )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)
