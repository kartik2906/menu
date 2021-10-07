import styled from 'styled-components';
import heroImage from '../../assets/images/pexels-adonyi-gábor-1414651.jpg';

export const HeroImg = styled.section`
  background-image: url(${heroImage});
  background-size: cover;

`;
export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh; 
  display:flex;
  flex-direction: column;
  justify-content: center;
  p{
    color: white;
    font-size: 24px;
    font-size: 18px;

  }
`;