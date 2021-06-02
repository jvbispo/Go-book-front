import styled from 'styled-components';


export const Logo = styled.h1`
  font-family: 'Chelsea Market';
  color: #90e0ef;
`

export const Container = styled.div`
  height: 100%;
  background: #F2F2F2;
  position: relative;
`;

export const FooterContainer = styled.div`
 padding: 0;
 margin: 0;
 position: relative;
 width: 375px;
 height: 59px;
 bottom: 69px;
`;

export const ContentContainer = styled.div`
    height: 100%;
    padding: 50px 20px;
    overflow-y: scroll;
`;

export const WelcomeText = styled.p`
  margin-top: 30px;
  margin-bottom: 38px;
  padding: 2px;
  color: #54565A;


  >span {
    font-size: 24px;
    color: #54565A;
  }

  >img {
    margin-left: 11px;
    height: 24px;
    width: 24px;
  }

  .name {
    color: #e56378;
  }
`;

export const BookList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;

`;

export const LoadMoreButtonContainer = styled.div`
    height: 60px;
    background: none;
    margin-bottom: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    >button {
    width: 200px;
    height: 40px;


    background: #f2f2f2;
    border-radius: 10px;
    border: none;
    border: 2px solid #FF6978;
    font-family: 'SF Pro Display' 'Roboto';
    font-weight: 600;
    color: #FF6978;
    font-style: normal;
    font-size: 16px;
    line-height: 29px;
    margin-bottom: 12px;
    }


`;

export const NoBooksFoundContainer = styled.div`
    margin-top: 90px;
    width: 330px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >strong {
        height: 20px;
        font-family: 'SF Pro Display' 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 29px;
        color: #54565A;
    }
  
    >svg {
        height: 250px;
        width: 280px;
        color: #000;
    }

 `;

