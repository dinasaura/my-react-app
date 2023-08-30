import './App.css';
import CarDetails from './CarDetails';


function App() {
  const initialData = {
    model: '',
    year: '',
    color: ''
  };

  return (
    <div>
      <h1>Car Details Form</h1>
      <CarDetails initialData={initialData} />
    </div>
  );
}

export default App;

