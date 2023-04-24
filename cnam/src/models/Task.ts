import { Schema , Model , model, ObjectId } from "mongoose";
import { User, IUser } from "./User";

interface ITask {
    name : string;
    user : ObjectId | IUser;
    details : string;
    statut : string;
    dates : Date;
}; 

const TaskSchema  = new Schema<ITask>({
    name : {
        type : String,
        unique : true,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        // unique : true,
        required : true
        
    },
    statut : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : false
    },
    dates : {
        type : Date,
        required : false
    }


});

const Task : Model<ITask> = model('Task',TaskSchema);

export {Task, ITask}