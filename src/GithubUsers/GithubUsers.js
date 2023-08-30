import React from 'react';
import UseGithubUser from './UseGithubUser'; 

function GithubUser({ username }) {
  const userData = UseGithubUser(username);

  if (!userData) {
    return <p>Caricamento...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Nome utente: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
    </div>
  );
}

export default GithubUser;

