import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <div className='min-h-[88vh]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
