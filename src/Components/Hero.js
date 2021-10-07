import React from 'react'
import {HeroContainer, HeroImg} from './StyledComponents/Hero.style.js';
import {SearchBar} from './SearchBar';
export const Hero =  function () {
  return (
      <HeroImg> 
        <HeroContainer>
          <h1> Welcome to the resturant</h1>
          <p> dede</p>
          <SearchBar/>
        </HeroContainer>
      </HeroImg>
  )
}


