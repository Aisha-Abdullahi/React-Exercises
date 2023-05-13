import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  const handleLogin = (username, password)=>{
    
}
  return (
    <div className="App">
      <Login onLogin={handleLogin}/>
    </div>
  );
}

export default App;
