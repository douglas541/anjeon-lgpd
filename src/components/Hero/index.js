import anjeonLogo from '../../assets/images/anjeon-logo.svg';
import Link from 'next/link';
import { Container, Content, LogoContainer, HeroText, ButtonContent, Button } from './styles';

function Hero() {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <img src={anjeonLogo} alt="Anjeon Logo" />
                </LogoContainer>
                <HeroText>
                    <h1>Sua empresa está adequada a LGPD?</h1>
                </HeroText>
                <ButtonContent>
                    <Button>
                        <Link href="/">Faça agora o teste</Link>
                    </Button>
                    <Button>
                        <Link href="/">Saiba mais sobre a LGPD</Link>
                    </Button>
                </ButtonContent>
            </Content>
        </Container>
    )
}

export default Hero;