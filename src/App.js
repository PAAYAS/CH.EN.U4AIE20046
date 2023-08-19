import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';
import './style.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Train Schedule App</h1>
        </header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={AllTrainsPage} />
            <Route path="/train/:trainId" component={SingleTrainPage} />
          </Switch>
        </div>
        <footer className="footer">
          <p>&copy; 2023 Train Schedule App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
