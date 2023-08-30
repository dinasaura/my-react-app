import './App.css';
import ClickCounterUseEffect from './ClickCounterUseEfect';

function App() {
  const counterChange = (newCount) => {
    console.log('Contatore cambiato:', newCount);
  };
  return (
    <div className="App">
      <ClickCounterUseEffect onCounterChange={counterChange}/>
    </div>
  );
}

export default App;
