import {useFormik} from "formik";
import * as Yup from 'yup';
import React, {useState} from "react";

interface FormProps {
    onSubmit: (formData: FormData) => void;
}


interface FormData {
    name: string;
    email: string;
}

const FormUserAdd = ({ onSubmit }: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", email: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <label>
                Email :
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Enregistrer</button>
        </form>
    );


}

export default FormUserAdd;