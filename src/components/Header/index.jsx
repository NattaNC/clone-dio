import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='logo da dio'/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Nome</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
