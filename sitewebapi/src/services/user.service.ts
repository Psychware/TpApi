import User from "../types/User";

const getAllUsers = async ():Promise<User[]>=>{
    const response = await fetch('/users');
    const users:User[]  = await response.json();
    return users

}


const addUser = async (user : User)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    try {
        const response =  await fetch('/user', requestOptions);
        const userSave = await response.json();
        return userSave;
    } catch(e) {
        console.log(e)
    }


}



export {getAllUsers, addUser}