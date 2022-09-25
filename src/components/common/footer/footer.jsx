import React from 'react'
import  'rc-footer/assets/index.css'
import styled from 'styled-components'
import mgrGraczIntroW from 'assets/svg/mgrGraczIntroWhite.svg'
import fb from 'assets/svg/facebook.svg'
import ig from 'assets/svg/instagram.svg'
import twt from 'assets/svg/twitter.svg'
import li from 'assets/svg/linkedin.svg'
import gh from 'assets/svg/github.svg'
import discord from 'assets/svg/discord.svg'


const fror = `Stworzone przez mgrGRACZ`

const Ftr = () => {
  return (

    <Footer2>
      <Link href="https://mgrgracz.netlify.app/"target="_blank">
      <Logo
        title={`Stworzone przez`}
        src={mgrGraczIntroW}
        alt="MgrGracz"
      />
      </Link>
      
      <Link href="https://www.facebook.com/k.wolku"target="_blank">
      <Image
        title={`Facebook Kamil Bandzwołek`}
        src={fb}
        alt="fb"
      />
      </Link>

      <Link href="https://www.linkedin.com/in/mgrgracz/"target="_blank">
      <Image
        title={`Linkedin mgrgracz`}
        src={li}
        alt="lin"
      />
      </Link>

      <Link href="https://twitter.com/MgrGracz"target="_blank">
      <Image
        title={`Twitter MgrGracz`}
        src={twt}
        alt="tt"
      />
      </Link>

      <Link href="https://www.instagram.com/grandpafejm/"target="_blank">
      <Image
        title={`Instagram grandpafejm`}
        src={ig}
        alt="ig"
      />
      </Link>

      <Link href="https://github.com/Grandpa1001"target="_blank">
      <Image
        title={`GitHub Grandpa1001`}
        src={gh}
        alt="git"
      />
      </Link>

      <Link href="https://discordapp.com/users/MgrGracz#8811"target="_blank">
      <Image
        title={`Discord MgrGracz#8811`}
        src={discord}
        alt="discord"
      />
      </Link>


      

    </Footer2>
  )
}

export default Ftr


const Footer2 = styled.footer`
  text-align: center;
  background-color:black;
  @media only screen and (max-width: 600px) {

  }
`


const Image = styled.img`
  width: 30px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const Logo = styled.img`
  width: 140px;
  margin-left: 10px;
  margin-right: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`


const Link = styled.a`

  height: auto;
  margin: auto 0;
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 35%;
  }
`
