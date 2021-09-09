import React from 'react';
import { Button } from '../../globalStyles'
import { FaFacebook,
         FaInstagram,
         FaYoutube,
         FaTwitter,
         FaLinkedin
} from 'react-icons/fa';
import { FooterContainer,
         FooterSubscription,
         FooterSubHeading,
         FooterSubText,
         Form,
         FormInput,
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinksItems,
         FooterLinksTitle,
         FooterLink,
         SocialMedia,
         SocialMediaWrap,
         SocialLogo,
         SocialIcons,
         WebsiteRights,
         SocialIconLink,
         SocialIcon,
         FooterLinksSocial
} from './Footer.elements';    

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterSubscription>
               <FooterSubHeading>
                   Join our fidelity program to participate in many promotions.
               </FooterSubHeading> 
               <FooterSubText>
                   You can subscribe at any time.
               </FooterSubText>
               <Form>
                   <FormInput name="email" type="email" placeholder="Your email"/>
                    <Button fontBig>Subscribe</Button>
                   
               </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/aboutus'>Our history</FooterLink>
                        <FooterLink to='/aboutus'>Satisfied clients</FooterLink>
                        <FooterLink to='/aboutus'>Our Valors</FooterLink>
                        <FooterLink to='/aboutus'>Careers</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to='/contacts'>Appooitment</FooterLink>
                        <FooterLink to='/contacts'>Contact</FooterLink>
                        <FooterLink to='/contacts'>Address</FooterLink>
                        <FooterLink to='/contacts'>Sugestions</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Services</FooterLinksTitle>
                        <FooterLink to='/services'>Cuts</FooterLink>
                        <FooterLink to='/services'>Beard style</FooterLink>
                        <FooterLink to='/services'>Shaves</FooterLink>
                        <FooterLink to='/services'>Hair Removal</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLinksSocial href={'https://www.facebook.com/joao.torquetti'}>Facebook</FooterLinksSocial>
                        <FooterLinksSocial href={"https://www.instagram.com/jaotorquetti/"}>Instagram</FooterLinksSocial>
                        <FooterLinksSocial href={'https://twitter.com/joaotorquetti?lang=en'}>Twitter</FooterLinksSocial>
                        <FooterLinksSocial href={'https://www.youtube.com'}>Youtube</FooterLinksSocial>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                      <SocialIcon/>
                      JT's Barber Shop  
                    </SocialLogo>
                    <WebsiteRights>Joao Torquertti 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'https://www.facebook.com/joao.torquetti'} target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href={"https://www.instagram.com/jaotorquetti/"} target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href={'https://www.youtube.com/watch?v=hJMj-a-Jdcs'} target='_blank' aria-label='Youtube' rel='noopener noreferrer'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href={'https://twitter.com/joaotorquetti?lang=en'} target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href={'https://www.linkedin.com/in/joao-torquetti-3b06a6b1/'} target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>

        </>
    )
    }
export default Footer;