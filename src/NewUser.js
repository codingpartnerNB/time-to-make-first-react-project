import React, {useState} from "react";
import FormInput from "./components/FormInput/FormInput";
import UserList from "./components/AddItems/UserList";

const users = [
    {
        id:'user1',
        name:"Neha",
        age:"21",
        college:"Sharpener"
    }
];
const NewUser = ()=>{
    const [userList, setUserList] = useState(users);
    const addUserHandler = (newUser)=>{
        setUserList((prevUser)=>{
            return([...prevUser, newUser])
        })
    }
    return(
        <div>
            <FormInput onAddUser={addUserHandler} />
            <UserList users={userList} />
        </div>

        //Similar

        // [
        //     <FormInput onAddUser={addUserHandler} />,
        //     <UserList users={userList} />
        // ]
    );
}

export default NewUser;