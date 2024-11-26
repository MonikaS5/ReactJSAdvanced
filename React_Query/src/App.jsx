import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersList from "./components/UsersList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddUser from "./components/AddUser";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h4>UsersList</h4>
        <UsersList />
        <AddUser />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
