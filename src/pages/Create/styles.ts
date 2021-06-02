import styled from 'styled-components';



export const Container = styled.div`
  background: #F2F2F2;
  height: 100%;
  overflow-y: scroll;
`;

export const FooterContainer = styled.div`
 padding: 0;
 margin: 0;
 position: absolute;
 width: 375px;
 height: 69px;
 bottom: 79px;
`;

export const ContentContainer = styled.div`
    height: 1000px;
    padding: 53px 20px 63px 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    height: 29px;

    font-family: 'SF Pro Display' 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FF6978;
    margin-bottom: 19px;
`;

export const InputLabel = styled.span`
    margin-top: 20px;
    margin-bottom: 10px;
    width: 46px;
    height: 28px;
    
    font-family: 'SFProText' 'SF Pro Display' 'Roboto';
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    text-align: center;
    
    color: #000000;
`;

export const SmallInput = styled.input`
    width: 336px;
    height: 48px;

    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    font-family: 'SFProText' 'SF Pro Display' 'Roboto';
`;

export const BigInput = styled.textarea`
    width: 336px;
    height: 228px;
    padding: 10px;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
    border: none;
    margin-bottom: 30px;
    font-family: 'SFProText' 'SF Pro Display' 'Roboto';
`;

export const AddButton = styled.button`
    width: 336px;
    height: 48px;

    background: #FF6978;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
    border: none;

    font-family: 'SF Pro Display' 'Roboto';
    color: #FFFFFF;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 12px;
`;

