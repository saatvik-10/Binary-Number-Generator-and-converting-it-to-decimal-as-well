import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
//import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { Profile } from "./pages/Profile";
//import { User } from "./User.js";
//import { Task } from "./Task_crud.js";
//import { Text } from "./Text.js";
function App() {
  /*-----------------------------------------------------------------*/

  /*const name = <h1>Messi</h1>;
  const age = <h1>"36"</h1>;
  const email = <h1>Messi@worldChamp.com</h1>;
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  return (
    <div className="App">
      <div>
        {user}
        {user}
        {user}
      </div>
    </div>
  );*/

  /*-----------------------------------------------------------------*/

  //2) JSX, COMPONENTS, PROPS

  /*Java Script
const getName=()=>{
  return "Messi";
};

 React JSX
const GetNameComponent=()=>{
  return <h1>Messi</h1>
};*/
  /*return(
  <div className="App">
   <User name='Messi' age={36} email="Messi@worldChamp.com"/>
   <User name='Julian' age={22} email="Julian@worldChamp.com"/>
  </div>
)
}

------------

const User=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}*/

  /*-----------------------------------------------------------------*/

  //3) TERNARY OPERATORS, LISTS AND CSS

  /*const age=19;
const isGreen=true;


return (
<div className="App">
  {age>=18? <h1>Over Age</h1> : <h1>Under Age</h1>}
  
  <h1 style={{color:isGreen?'green': 'red'}}>THIS HAS COLOR</h1>

  {isGreen && <button>THIS IS A BUTTON</button>}
</div>
)*/

  //------------

  /*const names=['Messi', 'Mbappe', 'Neymar']
return(
  <div className="App">
    {names.map((name, key)=>{
    return <h1 key={key}>{name}</h1>
})}
  </div>
)

  OR

  (COMPONENT WAY- THE BETTER WAY)

  const users = [
    { name: "Messi", age: 36 },
    { name: "Mbappe", age: 31 },
    { name: "Neymar", age: 25 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );

//------------

const planets=[
  {name:'Mars', isGasPlanet:false},
  {name:'Earth', isGasPlanet:false},
  {name:'Jupiter', isGasPlanet:true},
  {name:'Venus', isGasPlanet:false},
  {name:'Neptune', isGasPlanet:true},
  {name:'Uranus', isGasPlanet:true}
];

return(
  <div className='App'>
    {planets.map((planet, key)=>{
    if(planet.isGasPlanet){
      return <User name={planet.name}/>
    }
    })}
  </div>
)
}

const User=(props)=>{
  return(
    <div>
      {props.name}
      {props.isGasPlanet}
    </div>
  )*/

  /*-----------------------------------------------------------------*/

  //4) STATES, useStack Hook

  /*const[age, setAge]=useState(0)

const increaseAge=()=>{
  setAge(age+1)
}*/
  /*return(
<div className='App'>
    {age}
    <button onClick={increaseAge}>Increase Age</button>
  </div>
)
  
//------------

const[InputValue, setInputValue]=useState("")

const handleInputChange=(_event)=>{
  setInputValue(_event.target.value)
}

return( 
  <div className="App">
    <input type="text" onChange={handleInputChange}/>
    {InputValue}
  </div>
  )

//------------

const[showText, setShowText]=useState(true)

return(
  <div className="App">
    <button onClick={()=>{setShowText(!showText)}}>Show / Hide</button>
    {showText && <h1>My Name is Messi</h1>}
  </div>
)

//------------

const[textColor, setTextColor]=useState("black")

return(
  <div className="App">
    <button onClick={setTextColor(textColor==="black"?"red":"black")}>Change Color</button>
    {textColor && <h1 style={{color:textColor}}>My Name is Messi</h1>}
  </div>
)

//------------

const[count, setCount]=useState(0)

const xx=(_event)=>{
  setCount(count+1)
}

const yy=(_event)=>{
    setCount(count-1)
}

const zz=(_event)=>{
      setCount(0)
}

return(
  <div className="App">
    <button onClick={xx}>Increase</button>
    <button onClick={yy}>Decrease</button>
    <button onClick={zz}>Set to Zero</button>

    {count}
  </div>
)*/

  /*-----------------------------------------------------------------*/

  //5) CRUD-APP in React

  /*  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (_event) => {
    setNewTask(_event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );*/

  /*-----------------------------------------------------------------*/

  //6) Component Lifecycle and useEffect Hook

  /*const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}> Show Text </button>
      {showText && <Text/>}
    </div>
  );*/

  /*-----------------------------------------------------------------*/

  //7) Fetching Data from API (CAT FACT PROJECT)

  //const [catFact, setCatFact] = useState("");
  //(METHOD-1)

  /*fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });*/

  /*//(METHOD-2) BETTER...

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact()
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <p> {catFact} </p>
    </div>
  );*/

  //------------

  /*const [name, setName] = useState("");
  const [predictedData, setPredictedData] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(_event) => {
          setName(_event.target.value);
        }}
      />
      <button onClick={fetchData}> Predict Age </button>

      <h1> Name:{predictedData?.name}</h1>
      <h1> Predicted Age:{predictedData?.age}</h1>
      <h1> Count:{predictedData?.count}</h1>
    </div>
  );*/

  //------------

  /*const [data, setData] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setData(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1> GENERATE AN EXCUSE </h1>
      <button onClick={() => fetchData("party")}> PARTY </button>
      <button onClick={() => fetchData("family")}> FAMILY </button>
      <button onClick={() => fetchData("office")}> OFFICE </button>

      <p>{data}</p>
    </div>
  );*/

  //------------

  function codeBinary(len) {
    let binaryNumber = "";
    for (let i = 0; i < len; i++) {
      const randBit = Math.floor(Math.random() * 2);
      binaryNumber += randBit;
    }
    return binaryNumber;
  }

  const [showBinary, setShowBinary] = useState("");
  const [input, setInput] = useState("");

  const fetchNumber1 = () => {
    setShowBinary(codeBinary(input));
  };

  useEffect(() => {
    fetchNumber1();
  }, []);

  const bin = showBinary;
  const dec = parseInt(bin, 2);

  return (
    <div className="App">
      <label className="label">How many binary digits do you want in the binary number?</label>
      <input
        className="input"
        type="number"
        placeholder="Enter The Number..."
        onChange={(evt) => {
          setInput(evt.target.value);
        }}
        value={input}
      />
      <h1 className="text1">Binary Number : {showBinary}</h1>
      <h1 className="text2">Integer : {dec}</h1>
      <button onClick={fetchNumber1} className="btn">
        {" "}
        CLICK-TO-GENERATE{" "}
      </button>
    </div>
  );

  /*-----------------------------------------------------------------*/

  //8) React Router DOM

  /*return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND!</h1>} />
        </Routes>
      </Router>
    </div>
  );

  /*-----------------------------------------------------------------*/

  //9) State Management in React, useContext Hook

  /*return(
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND!</h1>} />
        </Routes>
      </Router>
    </div>
  )*/
}
export default App;
