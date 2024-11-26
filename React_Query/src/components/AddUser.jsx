import React from "react";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../services/userService";

const AddUser = () => {
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      console.log("User added successfully", data);
    },
    onError: (error) => {
      console.error("Error adding user", error);
    },
  });

  const handleAddUser = () => {
    const newUser = { name: `User ${Date.now()}` };
    mutation.mutate(newUser);
  };

  return (
    <div>
      <button onClick={handleAddUser} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Adding..." : "Add User"}
      </button>
      {mutation.isError && <p>Error adding user: {mutation.error.message}</p>}
    </div>
  );
};

export default AddUser;
