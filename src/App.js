import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import {GlobalStyle} from './Components/StyledComponents/GlobalStyles';
import {Navbar} from './Components/Navbar';
import {Hero} from './Components/Hero';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
            <Navbar/>
            <Hero/>
          <Switch>
            <Route/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
