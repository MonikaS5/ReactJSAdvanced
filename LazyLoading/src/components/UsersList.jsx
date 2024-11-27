import React from "react";

const UsersList = ({ onSelectUser }) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => onSelectUser(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
