// 3.5.4 useContext p105

import React, { useContext } from 'react';

type User = {
  id: number;
  name: string;
};

const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  const user = useContext(UserContext);

  return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = () => {
  const now = new Date();

  return (
    <div>
      <p>Current: {now.toLocaleDateString()}</p>
      <GrandChild />
    </div>
  );
};

export const GrandChildParent = () => {
  const user: User = {
    id: 1,
    name: 'Alice',
  };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};
