import React, { useEffect } from "react";
import useUserStore from "../store/userStore";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/userService";

const UsersList = () => {
  const { users, setUsers } = useUserStore();
  const { isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onSuccess: (data) => setUsers(data),
    enabled: users.length === 0,
  });

  useEffect(() => {
    console.log("Users from zustand store :", users);
  }, [users]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (users.length === 0) return <p>No users found.</p>;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
