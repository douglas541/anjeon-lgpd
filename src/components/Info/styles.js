import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    max-width: 1170px;
    padding: 50px 0;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    max-width: 320px;
    height: 65%;
    padding: 10px 0;

    >img {
        width: 5rem;
        margin-bottom: 30px;
    }
    >span {
        font-size: 1.4rem;
        text-align: center;
    }
    >p {
        font-size: 1.2rem;
        text-align: center;
    }

    @media(max-width: 768px){
        width: 80%;
        justify-content: space-around;
        align-items: center;
    }
`