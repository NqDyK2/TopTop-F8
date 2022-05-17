import logo from './logo.svg';
import './App.css';
import {useStore , actions} from './store'

function App() {
  const [state,dispatch] = useStore()
  const {todos, todoInput} = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  console.log('todoInput:', todoInput);

  return (
    <div className="App">
      <input  
        value={state.todoInput}
        onChange= {e=>{
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo,index)=> (
          <li key={index}>{todo}</li>
        ))}
    </div>
  );
}

export default App;
