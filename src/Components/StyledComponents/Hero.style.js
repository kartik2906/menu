import styled from 'styled-components';
import heroImage from '../../assets/images/pexels-adonyi-gábor-1414651.jpg';

export const HeroImg = styled.section`
  background-image: url(${heroImage});
  background-size: cover;

`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh; 
  background: rgba(0, 0, 0, 0.5);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 100px 32px;

  h1 span{
    color: white;
    font-size: 24px;
    font-size: 16px;
    display:block;
    text-align: center;

  }
`;