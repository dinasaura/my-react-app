import './App.css';
import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
     <Welcome name={<strong>John</strong>} age={30} />
    </div>
  );
}

export default App;
