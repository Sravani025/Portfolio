import React from 'react';
import { HeaderItem, LogoContainer, NavMenu,Navbar} from './styles';

const NavbarComponent:React.FC = ()=>{
    return (
        
            <Navbar>
            <HeaderItem>
                <LogoContainer>Naga Sravani</LogoContainer>
                    <NavMenu>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </NavMenu>
            </HeaderItem>
        </Navbar>
        
        
    );
}

export default NavbarComponent;