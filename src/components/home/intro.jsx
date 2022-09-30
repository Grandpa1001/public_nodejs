import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import mgrGraczIntro from 'assets/svg/mgrGraczIntro.svg'
import { Button, Header1} from 'styles/style'
import portfol from 'assets/images/mgrGracz2177.webp'

const Intro = () => {
  return (
  <Div>


    <Img src={mgrGraczIntro} alt="mgrGraczIntro" />
    
        <Img
              src={portfol}
              alt="Minter #2177"
              title="Minter #2177"
            />
        <Header2>poszukiwacz <Sub1>komunikacji</Sub1> niewerbalnej</Header2>

        

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
const Sub1 = styled.label`
font-weight: 400;

`




const Img = styled.img`
  width: 80%;
  height: auto;
  margin-top: -8rem;
  margin-bottom: -10rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;


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
  margin-top: 220px;
  z-index: 0;
  flex-grow: 1;
  margin-bottom: 210px;
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
  margin-top: 20px;
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  z-index: 0;
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


export default Intro
