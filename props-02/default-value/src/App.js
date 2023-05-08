import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';

function App() {
  const name = "Aisha"
  return (
    <div className="App">
      <Welcome name ={name} />
    </div>
  );
}

export default App;
