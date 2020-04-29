import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Product from './pages/Product';
import reduxStore from './redux/store';

class App extends React.Component {
  
  render(){
    
    return (
      <Provider store={reduxStore}>
            <Router>
            <Switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route exact path={"/product"} component={Product}/>
              </Switch>
            </Router>
        </Provider>
    );
  }
}

export default App

