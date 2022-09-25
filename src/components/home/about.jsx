import React from 'react'
import styled from 'styled-components'
import { Header2, TextPart1,TextPart2 } from 'styles/style'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import agilePM from 'assets/images/agilePM.webp'
import glideApp from 'assets/images/glideApp.webp'

const about = () => {
  return (
    <Container>
        <Header2>O mnie</Header2>
            <Grid container spacing={0}>
                <Grid item xs={6} sm={6}>
                        <TextPart1>
                          Mam na imię Kamil, znany w web3 jako mgrGRACZ. 
                          Pracuje w branży IT już od 6 lat. Wykorzystałem ten
                          czas na naukę wszystkich etapów wytwarzania
                          oprogramowania i teraz bez problemu mogę
                          powiedzieć, że na tworzeniu gotowych rozwiązań zjadłem zęby.
                        </TextPart1>

                </Grid>
                <Grid item xs={6} sm={6}>
                  <Image title={`Agile PM`} src={agilePM} alt="agile"/>
  
                </Grid>
                <Grid item xs={6} sm={6}>
                <Image2 title={`Aplikacja do NFT`} src={glideApp} alt="nftApp"/>

                </Grid>
                <Grid item xs={6} sm={6}>
                        <TextPart2>
                            Chciałbym dodatkowo być częścią świata który
                            dopiero się kształtuje. Takim dla mnie jest web3.
                            Można tu wykorzystać swoje nie tylko techniczne
                            umiejętności ale również artystyczne.
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
width: 600px;
height: 400px;
margin-bottom: 30px;
margin-top:20px;
`

export default about
