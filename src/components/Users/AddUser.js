import React from 'react';

const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User</label>
            <input type="text" id="username"></input>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
    );
};
// Build a wrapping Card component for this.
export default AddUser;