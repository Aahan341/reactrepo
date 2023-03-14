import './App.css';
import { Counter } from './Components/Counter';
import { Todos } from './Components/Todos';
import {Login} from "./pages/Login"



function App() {
  return (
    <div className="App">
    {/* <Counter></Counter>
    <Todos></Todos> */}
    <Login/>
    </div>
  );
}

export default App;