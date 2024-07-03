// UserList.js

import React from 'react';
import withDataFetching from './withDataFetching';

const UserList = ({ data }) => (
  <div>
    <h2>User List</h2>
    {data && (
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )}
  </div>
);

export default withDataFetching(UserList, 'https://jsonplaceholder.typicode.com/users');
