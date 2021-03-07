import styled from 'styled-components'

export default function Headline(props: { headline: string}) {
  return (
    <>
      <StyledHeadline>{props.headline}</StyledHeadline>
    </>
  )
}

const StyledHeadline = styled.h2`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: .05em;
`