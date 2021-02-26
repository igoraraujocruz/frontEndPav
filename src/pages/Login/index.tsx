import React from 'react';
import {Container, Logo} from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <Logo>
                <h1>Pav</h1>
                <p>Prontuário Administrativo Virtual</p>
            </Logo>
                <form>
                    <h3>Acesso</h3>
                    <input type="text" placeholder="Usuário"/>
                    <input type="password" placeholder="Senha"/>
                    <button>Entrar</button>
                    <p className="creditos">Desenvolvido por Igor Araujo Cruz</p>
                </form> 
        </Container>
    );
}

export default Login;