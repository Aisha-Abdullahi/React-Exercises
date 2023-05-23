import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';

function App() {
  const handleCounterChange = (value)=>{
    console.log('counter changed to', value);
  }
  return (
    <div className="App">
     <ClickCounter onCounterChange={handleCounterChange}/>
    </div>
  );
}

export default App;
