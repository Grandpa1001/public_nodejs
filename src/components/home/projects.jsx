/* eslint-disable no-useless-computed-key */
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import rpg1 from 'assets/images/rpg1.webp'
import kolektyw from 'assets/images/kolektyw.webp'
import mgrGracz_portfolio from 'assets/images/mgrGracz_portfol.webp'
import gj from 'assets/images/gj.webp'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import img1 from 'assets/images/shape3.webp'
import flappyBird from 'assets/images/FlappyBird.webp'
import {Header2 } from 'styles/style'
import styled, {keyframes} from 'styled-components'



const Projects = () => {


  return (
    <Container>
    <Div>
      <Header2>Moje projekty</Header2>
   <Slider>
      <SliderTrack>
      <Slide>
        <Image title={`MoonFlappyBird`} src={flappyBird} alt="ig"/>
        <ImageOverlay>
        <ImageTitle>Moon Flappy Bird</ImageTitle>
        <ImageDescription>Gra oparta o klasyczny</ImageDescription>
        <ImageDescription>styl flappybird w tematyce web3.</ImageDescription>
        <ImageLink href="https://play.unity.com/mg/other/moonflappybird" target="_blank">Zagraj</ImageLink>
        </ImageOverlay>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={mgrGracz_portfolio} alt="ig"/>
        <ImageOverlay>
        <ImageTitle>Strona główna</ImageTitle>
        <ImageDescription>Projekt własny portfolio.</ImageDescription>
        <ImageLink href="https://github.com/Grandpa1001/public_nodejs" target="_blank">Link</ImageLink> 
        </ImageOverlay>
        </Slide>
        <Slide>
        <Image title={`Kolektyw`} src={kolektyw} alt="ig"/>
        <ImageOverlay>
        <ImageTitle>NFT Polska Collective</ImageTitle>
        <ImageDescription>Wizja metaversu i kolektywu w nim umieszczonego. Wygrana praca konkursowa na "zdefiniuj kolektyw" dla NFT Polska.</ImageDescription>
        <ImageLink href="https://drive.google.com/drive/u/0/folders/1-2yB60eHijGYJa4U7gMTdoAVsDfNIs2S" target="_blank">Pobierz</ImageLink> 
        <ImageLink href="https://twitter.com/MgrGracz/status/1565102856730038272?s=20&t=03TLQ8-nqShxZlwY-d4BSw" target="_blank">Twitter</ImageLink> 
        </ImageOverlay>
        </Slide>
  
        <Slide>
        <Image title={`MoonFlappyBird`} src={flappyBird} alt="ig"/>
        <ImageOverlay>
        <ImageTitle>Moon Flappy Bird</ImageTitle>
        <ImageDescription>Gra oparta o klasyczny</ImageDescription>
        <ImageDescription>styl flappybird w tematyce web3.</ImageDescription>
        <ImageLink href="https://play.unity.com/mg/other/moonflappybird" target="_blank">Zagraj</ImageLink>
        </ImageOverlay>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={mgrGracz_portfolio} alt="ig"/>
        <ImageOverlay>
        <ImageTitle>Strona główna</ImageTitle>
        <ImageDescription>Projekt własny portfolio.</ImageDescription>
        <ImageLink href="https://github.com/Grandpa1001" target="_blank">Link</ImageLink>
        </ImageOverlay>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={kolektyw} alt="ig"/>
        <ImageOverlay>
        <ImageTitle>NFT Polska Collective</ImageTitle>
        <ImageDescription>Wizja metaversu i kolektywu w nim umieszczonego. Wygrana praca konkursowa na "zdefiniuj kolektyw" dla NFT Polska.</ImageDescription>
        <ImageLink>LINK</ImageLink>
        </ImageOverlay>
        </Slide>


      </SliderTrack>
   </Slider>
   </Div>
   </Container>
  )

}

const Div = styled.div`
  height: 600px;
  margin-left:-40px;
  margin-right:-40px;
  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {

  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

const DivHeader = styled.div`
  height: 200px;

  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {

  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

const Slider = styled.div`
 
  height: 400px;
  margin: auto;
  position: relative;
  width: 100%;
  display:grid;
  place-items: center;
  overflow: hidden;

  &:before, 
  &:after {
    background: linear-gradient(to left, rgba(208,207,205,1) 0%, rgba(255,255,255,0) 100%);
    content: '';
    height: 100%;
    position: absolute;
    width:20%;
    z-index: 1;
  }
  &:before {
    right:0;
    top: 0;
  }

  &:after {
    left:0;
    top: 0;
    transform: rotateZ(180deg);
  }


  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {

  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

const spin = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-300px *3));
  }

`;


const SliderTrack = styled.div`
  display: flex;
  width: calc(300px * 18);
  animation: ${spin} 40s linear infinite;


  &:hover {
    animation-play-state: paused;
  }


  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
   
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`;

const Slide = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  align-tems: center;
  padding: 15px;
  perspective: 80px;
  z-index: 1;
 
  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
   
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`;

const ImageOverlay = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  display: flex;
  font-family: 'Montserrat';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.55s;
  z-index: 2;


  &:hover {
    opacity: 1;
    z-index: 4;
  }

  &:hover > * {
    transform: translateY(0);
  }

  &: > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }



  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
   
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`;


const ImageTitle = styled.div`

  font-size: 2em;
  font-weight:bold;



  
  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
   
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`;

const ImageDescription = styled.div`

  font-size: 1.25em;
  width: 250px;
  margin-top: 0.25em;
  text-align: center;
  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
   
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`;


const Image = styled.img`
z-index: 1;
width: 100%;
height: 100%;
`

const ImageLink = styled.a`
width: 100%;
text-align:center;
margin-top: 40px; 
padding: 0.6rem;
  font-size: 12px;
  font-weight: 900;
  color: #fff;
  background-color: #00b1ff;
  border: 2px solid #00b1ff;
  cursor: pointer;
  width: 30%;
  transition: 0.25s ease;
  border-radius: 5%;
  text-decoration: none;
  z-index: 1;

  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: #444444;
    border-color: transparent;
    background-color: transparent;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 60%;
    font-size: 12px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 60%;
    font-size: 14px;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 45%;
    font-size: 16px;
  }

`





export default Projects

