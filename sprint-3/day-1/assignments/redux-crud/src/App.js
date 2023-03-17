
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './pages/MainRoute';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
