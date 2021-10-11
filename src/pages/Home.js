import React from 'react';
import {Hero} from '../Components/Hero';
export const Home = ({search, data}) => {

 

  return (
    <>
       <Hero search = {search }  data={data}/>
    </>
  )
}
