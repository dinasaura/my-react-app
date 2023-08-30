import './App.css';
import Welcome from './Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name='Alice' age={30} />
    </div>
  );
}

export default App;
