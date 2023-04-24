import React from 'react';
import logo from './assets/logo.svg';
import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./pages/User";
import Task from "./pages/Task";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import AddTask from "./pages/AddTask";
import UpdateTask from "./pages/UpdateTask";
import TaskByIdUser from "./pages/TaskByIdUser";
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
                <Route path='/tasks/:idTask' element={<UpdateTask  />} />
                <Route path='/taskByIdUser/:idUser' element={<TaskByIdUser />} />
                <Route path='/addUser' element={<AddUser />} />
                <Route path='/addTask/:idUser' element={<AddTask />} />
                {/* <Route path='/tasks' element={<Tasks />} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
