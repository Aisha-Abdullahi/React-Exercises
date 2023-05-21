import logo from './logo.svg';
import './App.css';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider/>
    </div>
  );
}

export default App;
