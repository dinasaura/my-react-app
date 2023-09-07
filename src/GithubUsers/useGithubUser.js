import useSWR from 'swr';

// Funzione per il recupero dei dati dell'utente da GitHub
async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}

function useGithubUser(username) {
  const { data, error } = useSWR(username ? `/users/${username}` : null, fetchUser);

  return {
    userData: data,
    loading: !data && !error,
    error: error,
  };
}

export default useGithubUser;



