import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import {GlobalStyle} from './Components/StyledComponents/GlobalStyles';
import {Navbar} from './Components/Navbar';
import {Hero} from './Components/Hero';
function App() {


  const [search, setSearch] = useState([]);

  useEffect(() =>{
      fetchApi(search);
  },[search]);
  
    const fetchApi = (search) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
  }
  const searching = (text) => {
    setSearch(text);
}
  return (
    <>
      <GlobalStyle />
      <Router>
            <Navbar/>
            <Hero search = {searching} />
          <Switch>
            <Route/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
