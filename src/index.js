import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { MoralisProvider } from 'react-moralis';
import { ChakraProvider } from '@chakra-ui/react';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// const APP_ID = process.env.REACT_APP_MORALIS_APP_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
const APP_ID = 'ALj9gFe5KG5PcYPv1Q6u2Roj2aeB4jIBVuYrvW83';
const SERVER_URL = 'https://dfbdma3eilm1.usemoralis.com:2053/server';

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </MoralisProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
