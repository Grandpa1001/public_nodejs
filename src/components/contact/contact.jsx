import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Thanks from './thanks'
import { Form, Title } from 'styles/style'
import styled from 'styled-components'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '', done: false }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => {
        this.setState({
          done: true
        })
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const { name, email, message } = this.state
    if (this.state.done === false) {
      return (
        <>
          <Container maxWidth="md">
            <Title>Kontakt</Title>
            <TextHead>
            Znajdziesz mnie na wszystkich kanałach mediów społecznościowych, raczej nie zdarza mi się być offline :D
            </TextHead>
            <TextHead1>Lub użyj formularza kontaktowego :</TextHead1>
          </Container>
          <Container maxWidth="md">
            <Typography
              component="div"
              style={{
                height: '80vh'
              }}
            >
              <Form onSubmit={this.handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  name="message"
                  type="text"
                  placeholder="Wiadomość"
                  value={message}
                  required
                  onChange={this.handleChange}
                ></textarea>
                <input type="submit" value="Wyślij" />
              </Form>
            </Typography>
          </Container>
        </>
      )
    } else {
      return <Thanks state={this.state} />
    }
  }
}

const TextHead = styled.h2`
  font-size: 22px;
  margin-top: 5vh;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 12px;
    margin-top: 3vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 15px;
    margin-top: 3vh;
  }
`
const TextHead1 = styled(TextHead)`
  font-size: 24px;
  color: #747474;
  text-transform: uppercase;

  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 16px;
  }
`

export default Contact
