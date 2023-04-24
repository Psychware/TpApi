import Task from "../types/Task";

const getAllTasks = async ():Promise<Task[]>=>{
    const response = await fetch('/tasks');
    const tasks:Task[]  = await response.json();
    return tasks

}


const addTask = async (task : Task)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    try {
        const response =  await fetch('/task', requestOptions);
        const taskSave = await response.json();
        return taskSave;
    } catch(e) {
        console.log(e)
    }


}
const getTaskByUser = async (id: string) => {

    try {

        const response = await fetch('/tasks/'+id);
        const tasks = await response.json();

        return tasks;

    }catch (error) {

        console.log(error)

    }

}


export {getAllTasks, addTask,getTaskByUser}