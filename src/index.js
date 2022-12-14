import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context'
import store from './store';

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </BookstoreServiceProvider >
    </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);
