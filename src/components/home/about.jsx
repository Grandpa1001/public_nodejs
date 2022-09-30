import React from 'react'
import styled from 'styled-components'
import { Header2, TextPart1,TextPart2 } from 'styles/style'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const about = () => {
  return (
    <Container>
        <Header2>O mnie</Header2>
            <Grid container spacing={0}>
                <Grid item xs={0} sm={6}>
                        <TextPart1>
                        Mam na imię Kamil. Od ponad 6 lat pracuję w branży IT, 
                        gdzie tworzymy rozwiązania dla dużych klientów biznesowych. Dzięki temu w 
                        swojej dotychczasowej karierze zdobyłem doświadczenie uwzględniające cały zakres wytwarzania oprogramowania.
                        </TextPart1>

                </Grid>
                <Grid item xs={0} sm={6}>
                        <TextPart2>
                        W świecie web3 znany jako mgrGracz. Po godzinach aktywnie udzielam się w społeczności NFT Polska.
                        Technologia stojąca za światem web3 sprawia, że z dnia na dzień chce wiedzieć o nim coraz więcej. Mam możliwośc nie tylko rozwoju technicznego ale i artystycznego.
                        </TextPart2>
                </Grid>
            </Grid>
    </Container>
  )
}

const Image = styled.img`
z-index: 1;
margin-top: 20px;
margin-left:200px;
width: 200px;
height: 200px;
`

const Image2 = styled.img`
z-index: 1;

margin-bottom: 30px;
margin-top:20px;
`

export default about
