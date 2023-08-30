import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} incrementInterval={500} incrementAmount={2} />
    </div>
  );
}

export default App;
