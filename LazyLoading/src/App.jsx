import React, { Suspense, useState } from "react";

import "./App.css";

const UsersList = React.lazy(() => import("./components/UsersList"));
const UserDetail = React.lazy(() => import("./components/UserDetail"));

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <>
      <h1>Simple React App</h1>
      <Suspense fallback={<p>Loading User List...</p>}>
        <UsersList onSelectUser={setSelectedUserId} />
      </Suspense>
      {selectedUserId && (
        <Suspense fallback={<p>Loading User Details...</p>}>
          <UserDetail userId={selectedUserId} />
        </Suspense>
      )}
    </>
  );
}

export default App;
