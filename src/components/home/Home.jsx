import React from 'react'
import Intro from 'components/home/intro'


import Projects from 'components/home/projects'
import Skills from 'components/home/skills'
import About from 'components/home/about'
import Container from '@material-ui/core/Container'


const Home = () => {
  return (
    <Container maxWidth="xl"  >
      
      <Intro />
      <About />
      <Projects />
      <Skills />  


    </Container>
  )
}


export default Home