import styled from 'styled-components'
import Image from 'next/image'
import Container from '../elements/Container'
import Headline from '../elements/Headline'

export default function About() {
  return (
    <AboutSection>
      <Container>
        <Headline headline="デイトラとは"></Headline>
        <Content>
          <AboutImage>
            <Image src="/img/about.png" width={887} height={605} layout="responsive"/>
          </AboutImage>
          <Text>
            <p>デイトラとは、無料で・迷わず・楽しく学べるプログラミング学習アプリです。毎日設定された課題をこなしていくだけで、未経験から30日でプログラミングスキルが身につきます。</p>
            <p>1日1題30日でプロのWebエンジニアを目指しましょう！</p>
          </Text>
        </Content>
      </Container>
    </AboutSection>
  ) 
}

const AboutSection = styled.div`
  margin-top: 70px;
`
const Content = styled.div`
  display: flex;
  margin-top: 30px;
`

const AboutImage = styled.div`
  width: calc(50% - 15px);
  height: 100%;
`

const Text = styled.div`
  width: calc(50% - 15px);
  margin-left: 30px;
  p {
    font-size: 14px;
  }
`