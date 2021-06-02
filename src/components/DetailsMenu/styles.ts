import styled from 'styled-components';


export const Container = styled.div`
   
    background-color: #FFFFFF;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    display: flex;
    padding: 0;
    position: absolute;
    width: 335px;
    height: 56px;
    left: 20px;
    top: 703px;
    border-radius: 2px;
    flex-direction: row;
`;

export const Button = styled.button`
    height: 100%;
    padding: 0;
    margin: 0;
    width: 111.5px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
        color: black;
        height: 17px;
        width: 17px;
    }

    span {
        margin-left: 10px;
        height: 17px;
        left: 41.94%;
        right: 0%;

        font-family: 'SF Pro Display' 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */
            
        letter-spacing: 1px;
            
        color: #3F4043;
    }
`;

