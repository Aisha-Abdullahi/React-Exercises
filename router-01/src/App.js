import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClickCounter from "./ClickCounter";
import Home from "./Home";

function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<ClickCounter />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;
