import React from 'react';
import logo from './assets/logo.svg';
import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
        <Router>
        
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/users' element={<User />} />
                {/* <Route path='/tasks' element={<Tasks />} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
