
import styled from "styled-components";
import backgroundImage from '../../../public/background-image.jpg'

export const HeroSection = styled.div`
    height : 93vh;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundImage});
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
`