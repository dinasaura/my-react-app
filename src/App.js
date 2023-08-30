import './App.css';
import Login from './Login';

function App() {
  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);
  };
  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
