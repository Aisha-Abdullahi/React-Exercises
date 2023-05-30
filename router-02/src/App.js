import logo from './logo.svg';
import './App.css';
import ShowGithubUser from './ShowGithubUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
