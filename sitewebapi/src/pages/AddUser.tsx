import '../assets/css/App.css';

import React, {FC, useState, useEffect, Dispatch} from "react";
import {getAllUsers, addUser} from "../services/user.service";
import User from "../types/User";
import FormUserAdd from "../components/FormUserAdd";

const AddUser:FC = () =>{
    const [users, setUsers] = useState<User[] | null>([]);
    const onclick = () => { alert('click button') };
    const [isOpenForm, setOpenForm] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const sendNewUser = (formData: any) => {
        setOpenForm(false);
        const add = async (userAdd : User)=>{
            const user = await addUser(userAdd);
            setRefresh(refresh+1);
        }

        add(formData);

    }
    return (
        <header className="App-header">
            <div> <FormUserAdd onSubmit={sendNewUser} /></div>
        </header>

    )}
export default AddUser;