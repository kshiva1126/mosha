import styled from "styled-components"
import Container from "../components/Container"

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Content>
          <Copyright>
            <p>Copyright(C) 2020 東京フリーランス ALL Rights Reserved.</p>
          </Copyright>
        </Content>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
`

const Content = styled.div`
  border-top: solid 1px rgba(0, 0, 0, .2);
  padding: 20px 0 60px;
`

const Copyright = styled.div`
text-align: right;
  p {
    font-size: 12px;
  }
`