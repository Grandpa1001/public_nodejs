import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import mgrGracz from 'assets/images/MgrGracz.webp'
import { NavLink } from 'react-router-dom'
import { SEO } from 'components/common/SEO'
import { Title, Button } from 'styles/style'
import styled from 'styled-components'

const Thanks = () => {
  return (
    <React.Fragment>
      <SEO
        location="/contact"
        type="Organization"
        title="Dziękuję!"
        description="Dziękuję za kontakt!"
      />
      <CssBaseline />
      <Container>
        <Container maxWidth="md">
          <Typography
            component="div"
            style={{
              height: '100vh'
            }}
          >
            <Div>
              <Title>Dziękuję!</Title>
              <img src={mgrGracz} alt="Dziękuję"></img>
              <h2>Odezwę się do ciebie tak szybko jak to możliwe!</h2>
              <h2>Miłego dnia</h2>
              <h2>
                <span role="img" aria-label="smiley">
                  😊
                </span>
              </h2>
              <NavLink to="/" exact>
                <TyButton>Strona główna</TyButton>
              </NavLink>
            </Div>
          </Typography>
        </Container>
      </Container>
    </React.Fragment>
  )
}

const TyButton = styled(Button)`
  width: 40%;
  margin-left: 0;
  margin-bottom: 0;
  margin-top: 2rem;
  background-color: #636E75;
  border: 2px solid #636E75;
  &:hover {
    color: #31d8bc;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 60%;
    margin-left: 0;

    font-size: 12px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 60%;
    margin-left: 0;

    font-size: 14px;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 45%;
    margin-left: 0;
    font-size: 16px;
  }
`

const Div = styled.div`
  text-align: center;
  h2 {
    font-size: 25px;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    h2 {
      font-size: 18px;
    }
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    h2 {
      font-size: 20px;
    }
    img {
      width: 100%;
    }
  }
`

export default Thanks
