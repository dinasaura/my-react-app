import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const gestioneLogin = () => {
    if (username !== '' && password !== '') {
      onLogin({ username, password });
    }
  };


  const isDisabled = username === '' || password === '';

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button onClick={gestioneLogin} disabled={isDisabled}>
        Login
      </button>

    </div>
  );
}

export default Login;

