import React, {FC, useState, useEffect} from "react";
// import React, {FC, useState, useEffect, Dispatch} from "react";
import User from "../types/User";
import Task from "../types/Task";
import { getTaskByUser } from "../services/task.service";
// import {getUsers} from "../services/user.service";
interface Props {
    iduser: any;
}
const  ListTaskByUser: FC<Props> = ({iduser}: Props)=>{
    
    const [task, setUsers] = useState<Task[]>([]);
    const [refresh] = useState(0);
    // console.log("ok");
    useEffect( ()=>{
        const getData = async ()=>{
           
            const task:Task[] = await getTaskByUser(iduser);
            console.log(task);
                setUsers(task);
        }
        getData();
    },[refresh]);

    return (
        <div>

            <h3>Liste des tâches de l'utilisateur : {iduser}</h3>
            <table>
            <thead>
                    <tr>
                        <th>Nom de la tâche</th>
                        <th>Détails</th>
                        <th>Statut</th>
                        <th>Date</th>
                        <th>Utilisateur</th>
                        <th>@</th>
                    </tr>
                </thead>
                <tbody>
                    {task.map((val, key)=>{
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.details}</td>
                                <td>{val.statut}</td>
                                <td>{val.dates}</td>
                                <td>{val.user.name}</td>
                                <td>{val.user.email}</td>
                                
                            </tr>
                        )}
                    )}
                </tbody>
               
                
            </table>
        </div>

    )
}
export default ListTaskByUser;