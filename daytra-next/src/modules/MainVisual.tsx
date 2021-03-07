import styled from 'styled-components'
import Image from 'next/image'

export default function MainVisual() {
  return (
    <>
      <MainVisualBody>
        <Background>
          <Image src="/img/main-visual.png" layout="fill" objectFit="cover" />
        </Background>
        <Content>
          <Title>
            1日1題30日で<br/>
            プロのWebエンジニアになろう！
          </Title>
          <Text>
            <p>
              毎日設定された課題をこなすだけ！未経験から<br/>
              30日でプログラミングスキルが身につきます
            </p>
          </Text>
        </Content>
      </MainVisualBody>
    </>
  )
}

const MainVisualBody = styled.div`
  width: 100%;
  height: 640px;
  position: relative;
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 100%;
  height: 100%; */
  text-align: center;
  white-space: nowrap;
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.1em;
`
const Text = styled.div`
  margin-top: 10px;
  > p {
    font-size: 16px;
    font-weight: bold;
    line-height: 2;
  }
`