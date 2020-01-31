import React from 'react';
import './App.scss';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import { Router, Route, Switch} from "react-router-dom";
import Landing from './components/home/Landing';
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

ReactGA.initialize('UA-59915754-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.pageview(location.pathname);
});

function App() {

  return (
    <div>
      <Router history={history}>
        <Helmet
              defaultTitle={' Easy Essay'}
              titleTemplate={`%s - ${'  Easy Essay'}`}
        />
        <Navbar/>
        <Switch>
          <Route component={Landing} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
