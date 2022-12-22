import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />}/>
    </Routes>      
    </Router>
    
    
    
    </>

  );
}

export default App;
