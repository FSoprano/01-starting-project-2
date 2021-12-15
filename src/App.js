import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [userData, setUserData] = useState([]);
  const addUserData = (uName, uAge) => {
    setUserData((prevUserData) => {
      return [...prevUserData, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserData} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
