import styled from 'styled-components';


export const ItemContainer = styled.div`
   width: 105px;
   display: flex;
   flex-direction: column;
   grid-column: 1fr;
`;

export const ItemImage = styled.img`
    width: 105px;
    height: 153px;
    margin-bottom: 9px;
`;

export const ItemTitle = styled.span`
    margin-bottom:5px;
    color: #313131;
    font-size: 12px;
    text-decoration: none;
    line-height: 14px;
    font-weight: bold;
    font-style: normal;
;
`;

export const ItemSubtitle = styled.span`
    font-family: 'SF Pro Display' 'Roboto';
    font-style: normal;
    font-weight: 900;
    text-decoration: none;
    font-size: 10px;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
`;