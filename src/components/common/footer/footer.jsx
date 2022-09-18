import React from 'react'
import Footer from 'rc-footer'
import  'rc-footer/assets/index.css'
import styled from 'styled-components'
import mgrGraczIntroW from 'assets/svg/mgrGraczIntroWhite.svg'
import fb from 'assets/svg/facebook.svg'
import ig from 'assets/svg/instagram.svg'
import twt from 'assets/svg/twitter.svg'
import li from 'assets/svg/linkedin.svg'
import gh from 'assets/svg/github.svg'

const fror = `Stworzone przez mgrGRACZ`

const Ftr = () => {
  return (

    <Footer2>
      <Link href="https://mgrgracz.netlify.app/">
      <Logo
        title={`Stworzone przez`}
        src={mgrGraczIntroW}
        alt="MgrGracz"
      />
      </Link>
      
      <Link href="https://www.facebook.com/k.wolku">
      <Image
        title={`Facebook Kamil Bandzwołek`}
        src={fb}
        alt="fb"
      />
      </Link>

      <Link href="https://www.linkedin.com/in/mgrgracz/">
      <Image
        title={`Linkedin mgrgracz`}
        src={li}
        alt="lin"
      />
      </Link>

      <Link href="https://twitter.com/MgrGracz">
      <Image
        title={`Twitter MgrGracz`}
        src={twt}
        alt="tt"
      />
      </Link>

      <Link href="https://www.instagram.com/grandpafejm/">
      <Image
        title={`Instagram grandpafejm`}
        src={ig}
        alt="ig"
      />
      </Link>

      <Link href="https://github.com/Grandpa1001">
      <Image
        title={`GitHub Grandpa1001`}
        src={gh}
        alt="ig"
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
/*



 <Footer
        theme="dark"
       
        columns={[
          {
            icon: (
              <img
                src={mgrGraczIntroW}
                alt="MgrGracz"
                style={{
                  width: '500%',
                  verticalAlign: 'middle',
                }}
              />
            ),
          },
          {
            title: 'Moje konta społecznościowe',
            items: [
              {
                icon: <img src={fb} alt="fb" />,
                url: 'https://www.facebook.com/k.wolku',
                openExternal: true
              },
              {
                icon: <img src={li} alt="linkedIn" />,
                url: 'https://www.linkedin.com/in/mgrgracz/',
                openExternal: true
              },

              {
                icon: <img src={twt} alt="Twitter" />,
                url: 'https://twitter.com/MgrGracz',
                openExternal: true
              },
              {
                icon: <img src={ig} alt="Instagram" />,
                url: 'https://www.instagram.com/grandpafejm/',
                openExternal: true,
              }
            ]
          },
          {
            title: 'Więcej o mnie',
            items: [

              {
                icon: <img src={gh} alt="GitHub" />,
                url: 'https://github.com/Grandpa1001',
                openExternal: true
              }
            ]
          }
        ]}
        bottom={fror}
      />




*/