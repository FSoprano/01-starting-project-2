import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
    // const [isValid, setIsValid] = useState(true);
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid user name and age."
            });
            return;
        };
        // the + sign converts enteredAge from a string to a number
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age, that is, an integer greater than 0."
            });
            return;
        };
        // we can call this as a function here because the value of 
        // onAddUser in App.js is 'addUserData', which is a function.
        props.onAddUser(enteredUser, enteredAge);
        
        setEnteredUser('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);            
    };

    const errorHandler = () => {
        // We set this to null because null is a falsy value.
        setError(null);
        // The only way to get rid of the backdrop is to say that there 
        // is no error. Hence setError(null).
    };

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User</label>
                    <input value={enteredUser} type="text" id="username" onChange={usernameChangeHandler}></input>

                    <label htmlFor="age">Age (years)</label>
                    <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler}></input>
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    );
};
// Build a wrapping Card component for this.
export default AddUser;