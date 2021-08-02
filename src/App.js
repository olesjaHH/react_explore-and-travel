import './App.scss';
import React from "react";
//import Home from './components/Home';
import Destination from './components/Destination';
import About from './components/About';
import Partner from './components/Partner';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
         <Header />

         <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/destination" component={Destination} />
              <Route path="/about" component={About} />
              <Route path="/partner" component={Partner} />
         </Switch>

        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
