import User from "../types/User";

export default interface Task{
         _id : string;
        name : string;
        user : User  ;
        statut : string;
        details : string;
        dates : string;
   

}

