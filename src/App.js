import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Luca" age={30} />
    </div>
  );
}

export default App;
