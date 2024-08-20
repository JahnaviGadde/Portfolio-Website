import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Components/Navbar';
import './style.css';
import Home from './Components/Home';
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <CollapsibleExample/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
