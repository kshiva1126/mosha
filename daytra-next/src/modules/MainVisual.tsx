import styled from 'styled-components'
import Image from 'next/image'

export default function MainVisual() {
  return (
    <>
      <MainVisualContent>
        <Background>
          <Image src="/img/main-visual.png" layout="fill" />
        </Background>
      </MainVisualContent>
    </>
  )
}

const MainVisualContent = styled.div`
  width: 100%;
  height: 640px;
`

const Background = styled.div`
  width: 100%;
  height: inherit;
`