import React from 'react';
import {Login} from './components/service/Login';

import {HomePage} from './components/homePage/HomePage';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './components/service/Signup';
import Boards from './components/boards/Boards';
import Footer from './components/footer/Footer';
import {TableAdder} from './components/tables/TableAdder';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/bartable" component={Boards} />
          <Route exact path="/bartable/tableAdder" component={TableAdder} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
        <Switch>
          <Route path="/bartable"></Route>
          <Route>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
console.log('start');

export default App;
