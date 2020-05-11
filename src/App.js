import React, {useState} from 'react';
import './css/App.css';
//import components

import List from './components/list';
import AddTodo from './components/AddTodo';

//App Function
function App() {

  //state
  const [todos, setTodos] = useState([
    {text: 'make react app'},
    {text: 'complete it'}
  ]);
  // const [status, setStatus] = useState(false);

  function addTodo(text){
    const newTodo = [...todos,{text}];
    setTodos(newTodo);
  }  

  function removeTodo(index){
    console.log(index)
    const updatedTodos = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <h1 style={{color: "white"}}>Todo App</h1>
      {todos.map((todo,index) => (
        <List className="list-container" todo={todo} removeTodo={removeTodo} key={index} index={index}/>
      ))}
      <AddTodo className="AddTodo-container" addTodo={addTodo}/>
    </div>
  );
}

export default App;
