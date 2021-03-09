import styled from 'styled-components'
import Container from '../components/Container'
import Headline from '../components/Headline'

export default function About() {
  return (
    <ContactSection>
      <Container>
        <Headline headline="お問い合わせ"></Headline>
        <Content>
          <Text>
            さあ今日から30日間を始めよう！
          </Text>
          <Form>
            <input type="text" placeholder="メールアドレス"/>
          </Form>
          <Button>
            無料ではじめる
          </Button>
        </Content>
      </Container>
    </ContactSection>
  ) 
}

const ContactSection = styled.div`
  margin-top: 70px;
`
const Content = styled.div`
  margin-top: 30px;
  text-align: center;
`

const Text = styled.p`
  font-size: 14px;
`

const Form = styled.form`
  display: block;
  input {
    width: 40%;
    border-radius: 20px;
    border: 2px solid lightgray;
    line-height: 3em;
    padding: 0 15px;
  }
`

const Button = styled.button`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  background-color: #EA6E69;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
`