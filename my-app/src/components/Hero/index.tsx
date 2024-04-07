import { HeroButton, HeroHeader, HeroSection, HeroSubHeader } from "./styles";

const Hero:React.FC = ()=>{
    return (
        <HeroSection>
            <HeroHeader>Hey! My name is Naga Sravani</HeroHeader>
            <HeroSubHeader>I am a Software Developer at NIUM</HeroSubHeader>
            <HeroButton>More about</HeroButton>
        </HeroSection>
    );
}

export default Hero;