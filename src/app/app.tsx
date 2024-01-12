import { QueryClientProvider } from '@tanstack/react-query';
import Furiganalyser from './../components/furiganalyser/Furiganalyser';
import FuriganalyserContextProvider from './../store/furiganalyser.context';
import { queryClient } from './../http/http';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FuriganalyserContextProvider>
        <Furiganalyser />
      </FuriganalyserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
