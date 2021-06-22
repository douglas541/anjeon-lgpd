import { Container, Content, Item } from './styles';
import dataSecurityLogo from '../../assets/images/data-security-logo.svg';
import browserAnonymousLogo from '../../assets/images/browser-anonymous-logo.svg';
import dataLogo from '../../assets/images/data-logo.svg';

function Info() {
    return (
        <Container>
            <Content>
                <Item>
                    <img src={dataSecurityLogo} alt="Logo segurança de dados" />
                    <span>Segurança de Dados</span>
                    <p>A segurança de dados é tão importante quanto a forma que os dados são utilizados.
                    A informação é um dos bens mais preciosos de uma empresa, por isso devem ser adotados
                    medidas de segurança da informação para protegê-los.</p>
                </Item>
                <Item>
                    <img src={browserAnonymousLogo} alt="Logo consentimento e anonimização" />
                    <span>Consentimento e Anonimização</span>
                    <p>Para o tratamento de dados cumprindo as normas da LGPD é necessário consentimento
                    do titular e para pesquisas é aconselhado a anonimização.</p>
                </Item>
                <Item>
                    <img src={dataLogo} alt="Logo tratamento de dados" />
                    <span>Tratamento de Dados</span>
                    <p>Trata-se de qualquer operação realizada com dados pessoais e sensíveis como coleta,
                    classificação, utilização, acesso, transmissão, distribuição, processamento,
                    modificação, eliminação e extração.</p>
                </Item>
            </Content>
        </Container>
    )
}

export default Info;