import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ItemList from './components/ItemList'

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter />
      <h1>ItemList</h1>
      <ItemList />
    </div>
  );
}

export default App;
