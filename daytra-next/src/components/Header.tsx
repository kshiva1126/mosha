import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <Link href="/">
        <HeaderLink>HOME</HeaderLink>
      </Link>
      <Link href="/about">
        <HeaderLink>ABOUT</HeaderLink>
      </Link>
    </>
  )
}

const HeaderLink = styled.a`
  color: #000000;
  font-size: 20px;
`