import { QueryClient, QueryClientProvider } from 'react-query'
import { RedStripe } from './RedStripe';
import { BlueStripe } from './BlueStripe';
import { GreenStripe } from './GreenStripe';
import { RecoilRoot } from 'recoil';
import './App.css'

const myQueryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      React III
      <QueryClientProvider client={myQueryClient}>
        <RecoilRoot>
          <RedStripe />
          <BlueStripe />
        </RecoilRoot>
          <GreenStripe />
      </QueryClientProvider>
    </div>
  );
}

export default App;
