import styled from 'styled-components';
import theme from '../../styles/theme';
import backgroundImage from '../../assets/images/hero-image.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 60%;
    /* background-color: blue; */
`;

export const LogoContainer = styled.div`
    /* background-color: red; */
    width: 12vw;
    >img {
        width: 100%;
    }
    @media (max-width: 768px){
        width: 24vw;
    }
`;

export const HeroText = styled.div`    
    text-align: center;
    color: ${theme.colors.background};
    /* background-color: red; */
    >h1 {
        font-size: 3.6rem;
        font-weight: 400;
    }
    @media (max-width: 768px){
        width: 75%;
    }
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 25vw;
    height: 15vh;
    /* background-color: red; */
`;

export const Button = styled.div`
    >a {
        font-size: 2.4rem;
    }
`;