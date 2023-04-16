import './App.css';
import Home from './Components/Home/Home';
import Exercises from './Components/Exercises/Exercises'
import { Nav } from './Components/Nav/Nav';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercises' element={<Exercises/>} />
      </Routes>
    </div>
  );
}

export default App;
