import './App.scss'
import TodoList from "./components/ToDoList/ToDoList";
import GifFetcher from "./components/Gif-API/GifAPI";
import Calendar from "./components/Calendar/Calendar";
import ColorPicker from './components/Exercises/ColoPicker';
//import MyComponent from "./components/Exercises/Updates/UpdateStateArrayObject"
import ToDoList from "./components/Exercises/ToDoList/ToDoList"
import MyComponent from "./components/Exercises/UseEffect/UseEffect"
import DigitalClock from "./components/Exercises/UseEffect/DigitelClock/DigitalClock"

function App() {
 
  return (
    <>
    <div className="app-container">
       <DigitalClock/>
    </div>
    </>
  )
}

export default App



/*
  <TodoList/>
  <GifFetcher/>
  <Calendar/>
*/