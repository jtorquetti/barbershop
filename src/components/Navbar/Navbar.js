import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import { IoCutSharp } from 'react-icons/io5'
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink} from './Navbar.elements'



const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }
    
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <NavIcon />
                            JT's Barber Shop
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <IoCutSharp /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                            <NavBtnLink to="/contacts">
                                <Button primary>Make an Appointment</Button>
                            </NavBtnLink>
                            ) : (
                                <NavBtnLink href={"https://wa.me/32479392893?text=I%20want%20to%20make%20an%20appointment"}>
                                    <Button fontBig primary>
                                        Make an Appointment
                                    </Button>
                                </NavBtnLink>
                            )
                            }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar;
