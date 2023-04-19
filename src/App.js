import './App.css';
import Home from './Components/Home/Home';
import Exercises from './Components/Exercises/Exercises'
import { Nav } from './Components/Nav/Nav';
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import ExerciseDetails from './Components/ExerciseDetails/ExerciseDetails';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercises' element={<Exercises/>} />
        <Route path='/exercises/:exerciseId' element={<ExerciseDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
