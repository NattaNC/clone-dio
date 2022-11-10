import styled from 'styled-components';
import { css } from 'styled-components';

export const ButtonContainer = styled.button `
    background:#565656 ; 
    border-radius: 22px;
    position: relative;

    color: #ffff;
    padding: 2px 12px; 
    min-width: 120px; 
    width: 100%;
    font-size: 1rem;

    cursor: pointer;
    margin: 1rem;

    &:hover {
        background: #E4105D;
        transition: .5s;
    }

    ${({variant})=> variant !== "primary" && css `
        min-width: 167px;
        height: 33px;

        background: #E4105D;

        cursor: pointer;
        &::after {
            content: '',
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`