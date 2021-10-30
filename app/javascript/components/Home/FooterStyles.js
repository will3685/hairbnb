import styled from 'styled-components';
   
export const Box = styled.div`
  position: absolute;
  width: 100%;
  padding-bottom: 48px;
  padding-top: 24px;
`;
   
export const Column = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
 `;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #000;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  font-weight: bold;
`;