import './App.css';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);
  };
  return (
    <div className="App">
      <UncontrolledLogin onLogin={handleLogin}/>
    </div>
  );
}

export default App;
