import './App.css';
import Furiganalyser from './components/furiganalyser/Furiganalyser';
import FuriganalyserContextProvider from './store/furiganalyser.context';

function App() {
  return (
    <FuriganalyserContextProvider>
      <Furiganalyser />
    </FuriganalyserContextProvider>
  );
}

export default App;
