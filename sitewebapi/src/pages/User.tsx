import React, {FC} from "react";
import '../assets/css/App.css';
// import Footer from "../components/Footer";
import ListUsers from "../components/ListUsers";
// import Title from "../components/Title";
import logo from "../assets/logo.svg";

const User:FC = ()=>{
    return(

        <header className="App-header">
         
                <div> <ListUsers /></div>
                <a className="App-link"href="http://localhost:3000/adduser"> Ajouter un utilisateur</a>
    
        </header>

    )
}
export default User;
