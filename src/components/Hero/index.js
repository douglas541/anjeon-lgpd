import anjeonLogo from '../assets/images/anjeon-logo-dark.svg';

function Hero() {
    return (
        <Container>
            <LogoContainer>
                <img src={anjeonLogo} alt="Anjeon Logo"/>
            </LogoContainer>
            <HeroText>
            </HeroText>
            <ButtonContent>
                <Button />
                <Button />
            </ButtonContent>
        </Container>
    )
}

export default Hero;