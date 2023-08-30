import { useState, useEffect } from 'react';

function UseGithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Errore nel recupero dei dati:', error));
  }, [username]);

  return userData;
}

export default UseGithubUser;
