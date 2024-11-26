import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersList from "./components/UsersList";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h4>UsersList</h4>
        <UsersList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
