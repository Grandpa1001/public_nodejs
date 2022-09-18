import React from 'react'
import Intro from 'components/home/intro'


import Projects from 'components/home/projects'
import Skills from 'components/home/skills'
import Container from '@material-ui/core/Container'


const Home = () => {
  return (
    <Container maxWidth="xl"  >
      
      <Intro />
      
      <Projects />
      <Skills />
    </Container>
  )
}

//
//<ParallaxLayer offset={0}><Intro /> </ParallaxLayer>
//<ParallaxLayer offset={1}><Projects /> </ParallaxLayer>
//<ParallaxLayer offset={2}><Skills /> </ParallaxLayer>
//</Parallax>        
     



export default Home