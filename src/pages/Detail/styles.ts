import styled from 'styled-components';
import oval2 from '../../assets/oval2.png';
import { Link } from 'react-router-dom';



export const Container = styled.div`
  background: #F2F2F2;
  position: relative;
  z-index: 0;

  .backgroundImage {
    height: 282px;
    width: 376px;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .ovalImage {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 86px;
      right: 103px;
      z-index: 2;
  }


  .ovalImage3 {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 125px;
      left: 47px;
      z-index: 2;
  }

  .ovalImage4 {
      width: 63px;
      height: 63px;
      position: absolute;
      top: 115px;
      left: 74px;
      z-index: 2;
  }

`;

export const OvalImage2Div = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;

    z-index: 2;
    right: 0;
    top: 0;

    background: url(${oval2})  no-repeat;
    background-position: right top;
`;

export const ContentContainer = styled.div`
    height: 100%;
    background: #F2F2F2;
    padding: 50px 20px;
    overflow-y: scroll;
    z-index: 3;
`;

export const ReturnLink = styled(Link)`
    width: 14px;
    height: 14px;
    z-index: 4;
    position: absolute;
    top: 55px;
    left: 33px;
    img{
        color: #000;
    }

`;

export const BookImage = styled.img`
    width: 151px;
    height: 234px;
    z-index: 4;
    top: 84px;
    left: 114px;
    position: absolute;
    box-shadow: 0 10px 10px  rgba(0, 0, 0, 0.2);
`;



export const BookFullTitle = styled.h1`
    position: absolute;
    width: 335px;
    height: 58px;
    left: 20px;
    top: 349px;

    font-style: normal;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;

    color: #36383A;
`;

export const BookAuthor = styled.span`
    position: absolute;
    width: 86px;
    height: 19px;
    left: 20px;
    top: 414px;
    
    font-family: 'SF Pro Display' 'Roboto';
    font-size: 16px;
    line-height: 19px;

    letter-spacing: 0.670588px;

    color: #FF6978;
`;

export const BookDescription = styled.p`
    position: absolute;
    width: 335px;
    height: 275px;
    left: 20px;
    top: 443px;
    
    font-family: 'SF Pro Display' 'Roboto';
    font-size: 14px;
    line-height: 25px;
    /* or 179% */
    
    letter-spacing: 0.2px;
    
    color: rgba(49, 49, 49, 0.6);
`;