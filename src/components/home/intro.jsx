import React from 'react'
import styled from 'styled-components'
import mgrGraczIntro from 'assets/svg/mgrGraczIntro.svg'
import { Header1} from 'styles/style'
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
