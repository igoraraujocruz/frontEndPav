import React, {useCallback, useRef} from 'react';
import coruja from '../../assets/coruja.svg'
import {Container, Logo} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {FiUser, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                login: Yup.string().required('Nome obrigatório'),
                password: Yup.string().min(6,'No mínimo 6 dígitos')
            });

            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            console.log(err);
            
            if (err instanceof Yup.ValidationError) {
                const errors =  getValidationErrors(err);
                formRef.current?.setErrors(errors);
            } 
        }
    }, []);

    return (
        <Container>
            <Logo>
                <img src={coruja} alt="coruja" />
                <h1>Atena</h1>
            </Logo>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="login" icon={FiUser} type="text" placeholder="Usuário"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                    <Button type="submit">Entrar</Button>
                    <p className="creditos">Desenvolvido por Igor Araujo Cruz</p>
                </Form> 
        </Container>
    );
}

export default Login;