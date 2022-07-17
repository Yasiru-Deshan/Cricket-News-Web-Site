import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #101522;

  @media screen and (max-width: 768px) {
    height: 1700px;
  }

  @media screen and (max-width: 480px) {
    height: 1950px;
  }
`;
export const ServicesWrapper = styled.div`
   max-width: 1400px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   align-items: center;
   grid-gap: 16px;
   padding: 0 50px;

   @media screen and (max-width: 1000px){
       grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 768px){
       grid-template-columns: 1fr;
   }
`   
export const ServicesCard = styled.div`
  background: ;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 0px;
  max-height: 340px;
   ${'' /* padding: 30px;  */}
  ${"" /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */}
   transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`; 

export const ServicesIconWrapper = styled.div`
  height: 270px;
  width: 320px;
  justify-content: center;
  align-items: center;

  
`;
export const ServicesIcon = styled.img`
    margin-top: 0px;
    height: 240px;
    width : 320px;
    ${'' /* margin-bottom: 10px; */}
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
  `
export const ServicesH2 = styled.h2`
    margin-top: 10px;
    font-size: 1rem;
    margin-bottom: 10px;
    color: white
    `
export const Servicesp = styled.p`
    font-size: 1rem;
    text-align: left;
    color: white
    `
        
    
  