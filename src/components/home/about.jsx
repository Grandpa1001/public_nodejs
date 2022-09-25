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
                <Grid item xs={12} sm={6}>
                        <TextPart1>
                            Moje szerokie doświadczenie daje mi
                            możliwość tworzenia projektów którę
                            znajdują się w róznych czasami
                            niepasujących do siebie dziedzinach.
                        </TextPart1>

                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextPart2>
                            Przygotowane rozwiązania technologicznie
                            zapewniają użyteczność oraz
                            funkcjonalność. Dodatkowo wszystko
                            oprawione wspaniałą szatą graficzną.
                        </TextPart2>
                </Grid>
            </Grid>
    </Container>
  )
}



export default about
