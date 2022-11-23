import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Input  } from '../../components/Input'

import { api } from '../../services/api';

import {Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('Email não é valido').required(),
    password: yup.string().min(3, 'no minino 3 caracteres').required(),
  }).required();

const Login = () => {

    const navigate = useNavigate()

    const {control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}$senha=${formData.password}`)
            console.log('retorno api', data)
        }catch{
            alert('houve um erro')
        }
    };
    
    const handleClickLogin = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='email' control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name='password'control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="entrar" variant="secondary" type='submit'/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </> )
}

export { Login }