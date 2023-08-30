import "./App.css";
import { LanguageProvider } from "./LanguageContext /LanguageContext";
import DisplayLanguage from './LanguageContext /DisplayLanguage'
import LanguageSelector from "./LanguageContext /LanguageSelector";

function App() {
  return (
    <div className="App">
    <LanguageProvider>
      <div>
        <h1>Language App</h1>
        <DisplayLanguage />
        <LanguageSelector/>
      </div>
    </LanguageProvider>
    </div>
  );
}

export default App;
