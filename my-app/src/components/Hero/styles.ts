
import styled from "styled-components";


export const HeroSection = styled.div`
    height : 100vh;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('images/background-image.jpg');
    background-size: cover;
`

export const HeroHeader = styled.h1`
    
`

export const HeroSubHeader = styled.h2`
`
export const HeroButton = styled.button`
    padding: 6px;
    width: fit-content;
    text-align: center;
    left: 50%;
    background-color:wheat;
    font-size: medium;
    border: none;
    border-radius: 20px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #B3CAF5;
        padding: 15px;
    }

`

