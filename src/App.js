import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Research from './Components/Research';
import Publication from './Components/Publication';
import Teaching from './Components/Teaching';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Lab from './Components/Lab';
import People from './Components/People';
import Footer from './Components/Footer';
function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <div>
      <Router>
          <Navbar/>

          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route
              exact
              path="/about"
              element={<About/>}
            />
            <Route exact path="/research" element={<Research/>} />
            <Route
              exact
              path="/publication"
              element={<Publication/>}
            />
            <Route
              exact
              path="/teaching"
              element={<Teaching/>}
            ></Route>
            <Route
              exact
              path="/people"
              element={<People/>}
            ></Route>
            <Route
              exact
              path="/lab"
              element={<Lab/>}
            ></Route>
            <Route
              exact
              path="/projects"
              element={<Gallery/>}
            ></Route>
            <Route
              exact
              path="/contact"
              element={<Contact/>}
            ></Route>
          </Routes>
        </Router>
        </div>
        {/* <Footer/> */}

    </div>
  );
}

export default App;
