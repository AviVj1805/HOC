// PostList.js

import React from 'react';
import withDataFetching from './withDataFetching';

const PostList = ({ data }) => (
  <div>
    <h2>Post List</h2>
    {data && (
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )}
  </div>
);

export default withDataFetching(PostList, 'https://jsonplaceholder.typicode.com/posts');
