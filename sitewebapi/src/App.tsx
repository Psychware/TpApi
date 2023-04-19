import React from 'react';
import logo from './assets/logo.svg';
import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./pages/User";
import Task from "./pages/Task";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/users' element={<User />} />
                <Route path='/tasks' element={<Task />} />
                {/* <Route path='/tasks' element={<Tasks />} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
