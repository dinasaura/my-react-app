import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import ShowGithubUser from './ShowGithubUsers'

function GithubUserList() {
  const usernames = ["utente1", "utente2", "utente3"];

  return (
    <div>
      <h1>Lista Utenti GitHub</h1>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={username}>{username}</Link>
          </li>
        ))}
      </ul>
      <Routes>
      <Route
        index
        element={<p>Aggiungi un utente e selezionalo</p>}
      />
      
        {usernames.map((username) => (
          <Route key={username} path={username} element={<ShowGithubUser username={username} />} />
        ))}
      </Routes>
    </div>
  );
}

export default GithubUserList;

