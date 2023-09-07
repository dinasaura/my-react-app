import useSWR from 'swr';

async function fetchUser(username) {
  if (!username) {
    return null; 
  }

  const response = await fetch(`https://api.github.com/users/${username}`);
  
  if (!response.ok) {
    throw new Error('Impossibile recuperare i dati');
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


