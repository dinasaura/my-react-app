import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUsers from './GithubUsers';

function ShowGithubUser() {
  const { username } = useParams(); 

  return (
    <div>
      <h2>GitHub User: {username}</h2>
      <GithubUsers username={username} /> 
    </div>
  );
}

export default ShowGithubUser;
