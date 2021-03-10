import styled from "styled-components"
import Container from "../elements/Container"

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

const StyledFooter = styled.footer`
  margin-top: 50px;
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