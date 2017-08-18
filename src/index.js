import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactTable from './components/ContactTable'
import NoMatch from './components/notfound'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
  <App>
    <Switch>
      <Route exact path='/' component={ContactTable}/>
      <Route component={ NoMatch} />
    </Switch>
  </App>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
