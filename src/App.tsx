import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HotelList from './components/HotelList';
import { Route, Switch } from 'wouter';
import HotelDetails from './components/HotelDetails';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <Toaster position='top-left' reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path='/' component={HotelList}></Route>
          <Route path='/hotels/:id' component={HotelDetails}></Route>
        </Switch>
      </QueryClientProvider>
    </>
  )
}

export default App
