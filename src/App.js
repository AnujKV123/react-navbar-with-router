import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import About from './components/About';
import Collections from './components/Collections';
import Contact from './components/Contact';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/men" element={ <Men/> } />
        <Route path="/women" element={ <Women/> } />
        <Route path="/collections" element={ <Collections/> } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
