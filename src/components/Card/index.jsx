import React from 'react'

import {
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UseInfo, 
    UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/>
        <Content>
            <UseInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                <div>
                    <h4>
                        Pablo Henrrique
                    </h4>
                    <p>
                        Há 8 minutos
                    </p>
                </div>
            </UseInfo>
            <PostInfo>
                <h4>
                    Projeto para curso de HTML e CSS
                </h4>
                <p>
                    Projeto feito o curso de HTML e CSS no Bootcamp DIO do Global avanade... <strong>Saiba mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>
                    #HTML #CSS #JavaScript
                </h4>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
