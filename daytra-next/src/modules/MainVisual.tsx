import styled from 'styled-components'
import Image from 'next/image'

export default function MainVisual() {
  return (
    <>
      <MainVisualContent>
        <Background>
          <Image src="/img/main-visual.png" layout="fill" objectFit="cover" />
        </Background>
      </MainVisualContent>
    </>
  )
}

const MainVisualContent = styled.div`
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