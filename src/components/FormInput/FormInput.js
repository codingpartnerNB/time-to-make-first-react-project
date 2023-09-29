import React, {useState} from "react";
import styles from './FormInput.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const FormInput = (props)=>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState();
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(name.trim().length === 0 || age.trim().length ===0){
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        if(+age < 1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid age (> 0)."
            });
            return;
        }
        const user = {id: Math.random().toString(), name:name, age:age}
        props.onAddUser(user);
        setName('');
        setAge('');
    }
    const nameChangeHandler = (event)=>{
        setName(event.target.value);
    }
    const ageChangeHandler = (event)=>{
        setAge(event.target.value);
    }
    const errorHandler = ()=>{
        setError(null);
    }
    return(
        <div>
            {
                error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
            }
            <form onSubmit={addUserHandler} className={styles['form-control']}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={name} onChange={nameChangeHandler} />
                <label htmlFor="age">Age (In Years)</label>
                <input type="number" id="age" value={age} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </div>
    );
}

export default FormInput;