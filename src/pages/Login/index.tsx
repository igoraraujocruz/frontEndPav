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
import {useAuth} from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface LogInFormData {
    name: string;
    password: string;
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();

    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: LogInFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                password: Yup.string().required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            await signIn({
                name: data.name,
                password: data.password
            })

        } catch (err) {            
            if (err instanceof Yup.ValidationError) {
                const errors =  getValidationErrors(err);
                formRef.current?.setErrors(errors);

            }
            
        addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
        }
    }, [signIn, addToast]);

    return (
        <Container>
            <Logo>
                <img src={coruja} alt="coruja" />
                <h1>Atena</h1>
            </Logo>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="name" icon={FiUser} type="text" placeholder="Usuário"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                    <Button type="submit">Entrar</Button>
                    <p className="creditos">Desenvolvido por Igor Araujo Cruz</p>
                </Form> 
        </Container>
    );
}

export default Login;