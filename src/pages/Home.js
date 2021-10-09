import React,{useState, useEffect} from 'react';
import {Hero} from '../Components/Hero';
export const Home = () => {

  const [search, setSearch] = useState("");

  useEffect(() =>{
      fetchApi(search);
  },[search]);
  
  const fetchApi = (search) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json, search))
  }
  const searching = (text) => {
    setSearch(text);
  }
  return (
    <>
     <Hero search = {searching} />
    </>
  )
}
