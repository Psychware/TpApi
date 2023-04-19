import React, {FC} from "react";
import '../assets/css/App.css';
// import Footer from "../components/Footer";
import ListTask from "../components/ListTask";
// import Title from "../components/Title";
import logo from "../assets/logo.svg";

const User:FC = ()=>{
    return(

        <header className="App-header">
         
         <ListTask/>
    
        </header>

    )
}
export default User;
