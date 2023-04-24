import React, {FC, useState, useEffect} from "react";
import {getAllUsers, addUser} from "../services/user.service";
// import React, {FC, useState, useEffect, Dispatch} from "react";
import User from "../types/User";
import {IoEyeSharp, IoAddCircle} from 'react-icons/io5';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
// import {getUsers} from "../services/user.service";

const  ListUsers: FC = ()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [refresh] = useState(0);
    // console.log("ok");
    useEffect( ()=>{
        const getData = async ()=>{
            
            const users:User[] = await getAllUsers();
            console.log(users);
            setUsers(users);
        }
        getData();
    },[refresh]);

    return (
        <div>
            <h3>Liste des utilisateurs</h3>
            <table>
                <thead>
                    <tr>
                        <th>NOM</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val, key)=>{
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>
                                    <Link to ={'/taskByIdUser/'+val._id}>
                                        <Button variant="primary" className='iconButton'><IoEyeSharp /> Voir les tâches</Button>
                                    </Link>
                                </td>
                                <td>

                                    <Link to ={'/addtask/' + val._id}>
                                            <Button variant="primary" className='iconButton'><IoAddCircle /> Ajouter une tâche</Button>
                                    </Link>
                                </td>
                                
                            </tr>
                        )}
                    )}
                </tbody>
               
                
            </table>
        </div>

    )
}
export default ListUsers;