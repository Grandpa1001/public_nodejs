/* eslint-disable no-useless-computed-key */
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import rpg1 from 'assets/images/rpg1.webp'
import kolektyw from 'assets/images/kolektyw.webp'
import mugOfWar from 'assets/images/mugOfWar.webp'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import img1 from 'assets/images/shape3.webp'
import moonFlappyBird1 from 'assets/images/moonFlappyBird.webp'
import { BgImg3, Header2 } from 'styles/style'
import styled, {keyframes} from 'styled-components'


const Projects = () => {


  return (
    <Div>
   <Slider>
      <SliderTrack>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={rpg1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={kolektyw} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={rpg1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={mugOfWar} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={moonFlappyBird1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={kolektyw} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={rpg1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={mugOfWar} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={moonFlappyBird1} alt="ig"/>
        </Slide>

        <Slide>
        <Image title={`GitHub Grandpa1001`} src={rpg1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={kolektyw} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={rpg1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={mugOfWar} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={moonFlappyBird1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={kolektyw} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={rpg1} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={mugOfWar} alt="ig"/>
        </Slide>
        <Slide>
        <Image title={`GitHub Grandpa1001`} src={moonFlappyBird1} alt="ig"/>
        </Slide>


      </SliderTrack>
   </Slider>
   </Div>
  )

}

const Div = styled.div`
  height: 300px;
  margin-left:-40px;
  margin-right:-40px;
  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {

  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

const Slider = styled.div`
 
  height: 260px;
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
    z-index: 2;
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
  100% { transform: translateX(calc(-250px *9));
  }

`;



const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * 18);
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
  height: 200px;
  width: 250px;
  display: flex;
  align-tems: center;
  padding: 15px;
  perspective: 100px;

  @media only screen and (min-width: 100px) and (max-width: 320px) {

  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
   
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`;




const Image = styled.img`
  width: 100%;
  transition: transform 1s;

  &:hover {
    transform: translateZ(20px);
  }
`

export default Projects







/*
linear-gradient(to right, rgba(208,207,205,1) 0%, rgba(255,255,255,0) 100%);



const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    height: '410px',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '9px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#747474',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(231,176,255,1)'
    },
    ['@media (max-width:600px)']: {
      height: '320px',
      width: '250px'
    },
    ['@media only screen and (min-width: 601px) and (max-width: 1024px)']: {
      height: '375px'
    },
    '& h2': {
      textAlign: 'center',
      fontSize: '25px',
      fontWeight: 'bold'
    },
    '& p': {
      fontSize: 'calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))',
      textAlign: 'center'
    },
    '& p:hover': {
      color: 'black'
    }
  },
  button: {
    fontSize: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'middle',
    '& a': {
      textDecoration: 'none',
      color: '#267ee2'
    },
    ['@media only screen and (min-width: 601px) and (max-width: 1024px)']: {
      fontSize: '12px'
    }
  },
  root: {
    flexGrow: 1
  }
})


----------------------------- render
 <Container
      maxWidth="lg"
      style={{
        marginTop: '12vh',
        marginBottom: '5vh'
      }}
    >
      <Header2>Moje projekty</Header2>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
      >
        <BgImg3 src={img1} alt="background" />
        <Div>
          <Grid container spacing={2} id="cards">
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="MgrGracz"
                  style={{
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={moonFlappyBird1}
                  title="Pomóż mi osiągnąć najlepszy floor"
                />
                <CardContent>
                <Typography gutterBottom variant="h2" component="h2">
                    Moon Flappy Bird
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Unity3D
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Klon Flappy Bird w świecie krypto.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://play.unity.com/mg/other/moonflappybird"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Zagraj
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  style={{
                    width: '40%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  component="img"
                  alt="MgrGracz"
                  image={mugOfWar}
                  title="Gra stworzona w zespole 5 osobowym."
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Mug of war
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Unity3D
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Projekt gry realizowany na GameJamie 
                    PGG JAM: All Play Accessibility Vol3
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://wolix.itch.io/mug-of-war"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pobierz
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="RPG"
                  style={{
                    width: '60%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={rpg1}
                  title="Gra stworzona w Gamer Maker Studio"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Praca inżynierska 
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Game maker studio
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Gra utworzona jako projekt pracy inżynierskiej, projekt RPG w stylu 2d pokemon.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://drive.google.com/file/d/0B3YezdW3G2_wdlh3MHFoME02YVk/view?resourcekey=0-awLMbAwoLZ5KVTgnAbogpQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pobierz
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Kolektyw NFT"
                  style={{
                    width: '60%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={kolektyw}
                  title="NFT POLSKA - to świetna Polska społeczność"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                   Konkurs "Zdefiniuj kolektyw"
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                Unity3d
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                Wizja metaversu i kolektywu w nim umieszczonego.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://drive.google.com/drive/u/0/folders/1-2yB60eHijGYJa4U7gMTdoAVsDfNIs2S"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pobierz
                    </a>
                    
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://twitter.com/MgrGracz/status/1565102856730038272?s=20&t=03TLQ8-nqShxZlwY-d4BSw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Div>
      </div>
    </Container>


*/