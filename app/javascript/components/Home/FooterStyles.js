import styled from 'styled-components';
   
export const Box = styled.div`
  position: absolute;
  width: 100%;
  padding-bottom: 8px;
  padding-top: 24px;
`;
   
export const Column = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
 `;
   
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
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

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeadingSocial = styled.div`
  display: flex;
`
export const SocialIcon = styled.div`
 display: flex;
 align-items: center;
`

export const FooterLinkSocial = styled.a`
  padding-left: 12px;
  font-size: 32px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
}
`