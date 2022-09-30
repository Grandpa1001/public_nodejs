import React from 'react'
import styled from 'styled-components'
import { useSpring, animated} from 'react-spring'

import Brand from './Brand'

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  })

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer >
          <Brand />
        </FlexContainer>
      </NavBar>
      
    </>
  )
}

export default Navbar


const NavBar = styled(animated.nav)`
  position: fixed;
  background-image: linear-gradient(#9a9a98, #d0cfcd);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  font-size: 1.7rem;
`

const FlexContainer = styled.div`
  max-width: 150rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 7rem;
`

