import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from 'commonStyle/Common.styled';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from 'Thema';
import { presister, store } from 'redux/store';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={presister}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <GlobalStyled />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
