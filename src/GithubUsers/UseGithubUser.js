import useSWR from 'swr';

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((response) =>
    response.json()
  );
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

