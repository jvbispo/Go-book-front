import styled from 'styled-components';


export const InputContainer = styled.div`
    height: 48px;
    width: 336px;
    background-color: #FFFFFF;
    display: flex;
    padding: 16px 15px;
    flex-direction: row;
    border-radius: 5px;
    bottom: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;


export const SvgContainer = styled.div`
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    svg {
        color: #f2f2f2;
        width: 16px;
        height: 16px;
    }
`;

export const Input = styled.input`
    border: none;
    margin-left: 10px;
    font-size: 16px;
    color: #54565A;
`;
