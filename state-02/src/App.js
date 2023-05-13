import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter initialCount= {0} interval ={1000} incrementValue={1}/>
    </div>
  );
}

export default App;
