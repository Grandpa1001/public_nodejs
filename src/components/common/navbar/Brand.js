import React from 'react'
import styled from 'styled-components'
import mgrGraczIntroW from 'assets/svg/mgrGraczIntroWhite.svg'
const Brand = () => {
  return (
    <Link href="https://mgrgracz.netlify.app/">
      <Image
        src={mgrGraczIntroW}
        alt="MgrGracz"
      />
    </Link>
  )
}

export default Brand

const Link = styled.a`
  width: 10%;
  height: auto;
  margin: auto 0;
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 35%;
  }
`

const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
