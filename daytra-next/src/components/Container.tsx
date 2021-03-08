import styled from 'styled-components'

interface ContainerProps {
   children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`