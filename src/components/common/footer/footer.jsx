import React from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'
import logo from 'assets/images/profile.png'
import fb from 'assets/svg/facebook.svg'
import ig from 'assets/svg/instagram.svg'
import twt from 'assets/svg/twitter.svg'
import li from 'assets/svg/linkedin.svg'
import gh from 'assets/svg/github.svg'

const fror = `Stworzone przez MgrGracz`

const Ftr = () => {
  return (
    <div>
      <Footer
        theme="dark"
        columns={[
          {
            icon: (
              <img
                src={logo}
                alt="MgrGracz"
                style={{
                  width: '180%',
                  verticalAlign: 'middle',
                  marginLeft: '-12px',
                  marginTop: '-2px'
                }}
              />
            ),
            title: 'MgrGracz',
            items: [
              {
                title: 'Wizytówka',
                url: '.',
                openExternal: false,
                LinkComponent: 'a'
              },
              {
                title: 'O mnie',
                url: '/about',
                openExternal: false
              },
              {
                title: 'Kontakt',
                url: '/contact'
              }
            ]
          },
          {
            title: 'Moje konta społecznościowe',
            items: [
              {
                icon: <img src={fb} alt="fb" />,
                title: 'Facebook',
                url: 'https://www.facebook.com/k.wolku',
                openExternal: true
              },
              {
                icon: <img src={li} alt="linkedIn" />,
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/mgrgracz/',
                openExternal: true
              },

              {
                icon: <img src={twt} alt="Twitter" />,
                title: 'Twitter',
                url: 'https://twitter.com/MgrGracz',
                openExternal: true
              },
              {
                icon: <img src={ig} alt="Instagram" />,
                title: 'Instagram',
                url: 'https://www.instagram.com/grandpafejm/',
                openExternal: true,
                //description: 'Personal'
              }
            ]
          },
          {
            title: 'Więcej o mnie',
            items: [

              {
                icon: <img src={gh} alt="GitHub" />,
                title: 'Github',
                url: 'https://github.com/Grandpa1001',
                openExternal: true
              }
            ]
          }
        ]}
        bottom={fror}
      />
    </div>
  )
}

export default Ftr
