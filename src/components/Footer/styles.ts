import styled, { css } from 'styled-components';

interface IButtonProps {
    selected: boolean;
    fillSvg?: boolean;
}

export const Container = styled.div`
    height: 59px;
    width: 370px;
    background-color: #FFFFFF;
    display: flex;
    padding: 0;
    flex-direction: row;
    bottom: 4px;
`;

export const Button = styled.button<IButtonProps>`
    height: 100%;
    padding: 0;
    margin: 0;
    width: 125px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        ${(props) =>
        props.selected === true ?
        css`
            stroke: black;
            path {
                stroke: black;
                fill: ${props.fillSvg ? 'black' : ''};
            }
        `: 
        css `
            color: red;
        `}
        height: 17px;
        width: 17px;
    }
`;

export const HomeSvg = styled.svg`

`;