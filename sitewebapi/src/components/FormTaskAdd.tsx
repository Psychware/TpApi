import {useFormik} from "formik";
import * as Yup from 'yup';
import React, {useState} from "react";
import Task from "../types/Task";

interface FormProps {
    onSubmit: (formData: FormData) => void;
    iduser? : any;
    task? : Task | null;
}


interface FormData {
    // _id? : string | null;
    name : string;
    user : string ;
    statut : string;
}

const FormTaskAdd = ({ onSubmit, iduser , task}: FormProps) => {
    console.log(task);
    const [formData, setFormData] = useState<FormData>({
        // _id: task? task._id : null,
        name: task && task.name ? task.name : '',
        user: iduser ?? "",

        statut: task && task.statut ? task.statut : '',
        
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value);
        
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(iduser)
        console.log(formData)
        onSubmit(formData);
        setFormData({ name: "", user: "" ,statut:""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom de la tâche :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <label>
                Statut :
                <input
                    type="text"
                    name="statut"
                    value={formData.statut}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Enregister</button>
        </form>
    );


}

export default FormTaskAdd;