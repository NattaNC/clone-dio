import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button' 
import bannerImage from '../../assets/banner.png'
import { Header } from '../../components/Header'
import {
    Container,
    Title,
    TitleHighLight,
    TextContent
} from './styles'

const Home = () => {

    
    const navigate = useNavigate()
    
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br />
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domnine as tecnologias utilizadas pelas empresas inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secundary" onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>
    </> )
}

export { Home }