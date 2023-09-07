import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import ShowGithubUsers from './ShowGithubUsers'

function GithubUserList() {
  const usernames = ["user1", "user2", "user3"];

  return (
    <div>
      <h1>GitHub Users List</h1>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={username}>{username}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        {usernames.map((username) => (
          <Route key={username} path={username} element={<ShowGithubUsers username={username} />} />
        ))}
      </Routes>
    </div>
  );
}

export default GithubUserList;
