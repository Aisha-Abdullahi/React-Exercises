import logo from './logo.svg';
import './App.css';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext, LanguageProvider } from './LanguageContext';

function App() {
  return (
    <div className="App">
    <LanguageProvider/>
      <DisplayLanguage/>
    </div>
  );
}

export default App;
