import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import {GlobalStyle} from './Components/StyledComponents/GlobalStyles';
import {Navbar} from './Components/Navbar';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Result} from './Components/Result';
function App() {
  let [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  // let [bool, setBool] = useState(false);

  useEffect(() =>{
    const fetchApi = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      if(!search){
        return;
      }else{
        // setBool(true)
        setData(json);
      }

    });
  }
  fetchApi();
  },[search]);
  
 
  const searching = (text) => {
    setSearch(text);
  }

  return (
    <>
      <GlobalStyle />
      <Router>
      <Navbar/>
          <Switch>
            <Route exact path="/" component={() => <Home search ={searching} data={data}/>} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/result" component= {() => <Result data ={data}/>} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
