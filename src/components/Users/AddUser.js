import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User</label>
            <input type="text" id="username"></input>

            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
};
// Build a wrapping Card component for this.
export default AddUser;