import './App.css';
import TodoList from './Todo/TodoListLastEx';

function App() {
  return (
    <div className="App">
       <TodoList
        render={(items, removeItem) => (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;
