import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from 'assets/images/shape1.webp'
import img1 from 'assets/images/shape2.webp'
import { Button, BgImg, BgImg2, Header1 } from 'styles/style'
import Grid from '@material-ui/core/Grid'
import portfol from 'assets/images/minter2177.webp'


const Intro = () => {
  return (
    <Div>
      <BgImg src={img} alt="background" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Img
              src={portfol}
              alt="Minter #2177"
              title="Minter #2177"
            />
          <Header1>MgrGracz</Header1>
          <Header2>Zawodowo analityk systemowy.</Header2>
          <Header3>Web3 i nowe technologie.</Header3>

        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            marginTop: '5vh'
          }}
        >
          <Div1>
            <BgImg2 src={img1} alt="background" />
            <div
              style={{
                position: 'absolute',
                margin: '0',
                left: '0',
                right: '0',
                top: '40%',
                width: '100%'
              }}
            >
              <Grid item xs={12}>
                <Linku to="/about" exact>
                  <Button>Więcej o mnie</Button>
                </Linku>
              </Grid>
              <Grid item xs={12}>
                <Linku2 to="/contact" exact>
                  <SecondButton>Skontaktuj się</SecondButton>
                </Linku2>
              </Grid>
            </div>
          </Div1>
        </Grid>
      </Grid>
    </Div>
  )
}

const Linku = styled(NavLink)`
  margin-left: 30%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 20%;
  }
`
const Linku2 = styled(NavLink)`
  margin-left: 15%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 5%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 5%;
  }
`
const Div1 = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-top: 30%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-top: 40%;
  }
`
const Img = styled.img`
  width: 30%;
  height: auto;
  margin-top: calc(150px + (119 - 150) * ((100vw - 300px) / (1600 - 300)));
  margin-left: calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300)));
  -webkit-box-shadow: 10px 14px 51px -13px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 10px 14px 51px -13px rgba(0, 0, 0, 0.58);
  box-shadow: 10px 14px 51px -13px rgba(0, 0, 0, 0.58);
  :hover {
    -webkit-box-shadow: 10px 14px 51px -13px rgba(195, 97, 252, 0.58);
    -moz-box-shadow: 10px 14px 51px -13px rgba(195, 97, 252, 0.58);
    box-shadow: 10px 14px 51px -13px rgba(195, 97, 252, 0.58);
  }

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 40%;
    display: block;
    border-radius: 0%;
    margin-top: 0rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2rem;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    :hover {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 40%;
    display: block;
    border-radius: 0%;
    margin-top: 0rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2rem;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    :hover {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
  `

const Div = styled.div`
  margin-left: 5vw;
  margin-top: 23vh;
  flex-grow: 1;
`

const SecondButton = styled(Button)`
  background-color: #747474;
  border: 2px solid #747474;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: #747474;
    border-color: transparent;
    background-color: transparent;
  }
`

const Header2 = styled(Header1)`
  margin-left: 9rem;
  font-size: 35px;
  line-height: 20px;
  color: #747474;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 15px;
    line-height: 15px;
    margin-left: 4rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 15px;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 20px;
    margin-left: 5rem;
  }
`

const Header3 = styled(Header2)`
  margin-left: 17rem;
  font-size: 32px;
  line-height: 70px;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 14px;
    line-height: 25px;
    margin-left: 7rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 30px;
    margin-left: 5rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
    margin-left: 7rem;
  }
`

export default Intro
