import styled from 'styled-components';
import theme from '../../styles/theme';
import backgroundImage from '../../assets/images/hero-img.jpg';

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
    height: 60vh;
    max-width: 900px;
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
    @media(max-width: 411px){
        >h1 {
            font-size: 2.8rem;
        }
    }
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    /* background-color: blue; */
`;

export const Button = styled.div`
    >a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        height: 6vh;
        width: 60vw;
        min-width: 300px;
        max-width: 400px;
        font-size: 2rem;
        background-color: ${props => props.color};
        color: ${theme.colors.background};

        @media(max-width: 411px){
            font-size: 1.4rem;
        }
    }
`;