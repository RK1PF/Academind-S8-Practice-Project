import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

// testing data for UsersList component
// const usersList = [
//   {
//     id: 1,
//     username: "RK1PF",
//     email: "ok@mail.com",
//     age: 18,
//   },
//   {
//     id: 2,
//     username: "RK1PF2",
//     email: "ok@mail.pf",
//     age: 19,
//   },
//   {
//     id: 3,
//     username: "RK1PF3",
//     email: "voila@mail.com",
//     age: 20,
//   },
// ];

function App() {
  // state for UsersList component
  const [users, setUsers] = useState([]);
  // Add user function for AddUser component
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  console.log(users);
  return (
    <div>
      <AddUser addUser={addUser} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
