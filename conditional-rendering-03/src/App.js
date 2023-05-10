import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Aisha" age={67}/>
    </div>
  );
}

export default App;
