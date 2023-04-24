import React, {FC} from "react";
import '../assets/css/App.css';
// import Footer from "../components/Footer";
import ListTaskByUser from "../components/ListTaskByUser";
// import Title from "../components/Title";
import logo from "../assets/logo.svg";
import {useParams} from "react-router-dom";

const TaskByIdUser:FC = ()=>{
    const {idUser} = useParams();
    
    return(

        <header className="App-header">
         
         <ListTaskByUser  iduser={idUser}/>
        
    
        </header>

    )
}
export default TaskByIdUser;
