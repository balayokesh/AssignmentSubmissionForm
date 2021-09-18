// Import packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

// Import files
import App from './App';
import Dashboard from './Dashboard';

const Routing = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path='/' exact component={App} />
      <Route path='/dashboard' exact component={Dashboard} />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
