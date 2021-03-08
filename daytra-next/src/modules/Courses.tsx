import styled from 'styled-components'
import Image from 'next/image'
import Container from '../components/Container'
import Headline from '../components/Headline'

export default function Courses() {
  return (
    <CoursesSection>
      <Container>
        <Headline headline="コース一覧"></Headline>
        <Content>
          <Item>
            <Image src="/img/web_first.png" width={1024} height={506} layout="responsive"></Image>
            <Text>HTML / CSS / Bootstrap</Text>
          </Item>
          <Item>
            <Image src="/img/web_second.png" width={1024} height={506} layout="responsive"></Image>
            <Text>HTML / CSS / JavaScript / JQuery</Text>
          </Item>
          <Item>
            <Image src="/img/web_third.png" width={1024} height={506} layout="responsive"></Image>
            <Text>PHP / WordPress</Text>
          </Item>
        </Content>
      </Container>
    </CoursesSection>
  )
}

const CoursesSection = styled.div`
  margin-top: 70px;
`

const Content = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`

const Item = styled.div`
  width: 100%;
`

const Text = styled.p`
  font-size: 14px;
`