import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <HeaderLogo>
          <span>30DAYSトライアル</span>
        </HeaderLogo>

        <Menu>
          <Link href="#">
            <HeaderLink>デイトラとは</HeaderLink>
          </Link>
          <Link href="#">
            <HeaderLink>コース一覧</HeaderLink>
          </Link>
          <Link href="#">
            <HeaderLink>お問い合わせ</HeaderLink>
          </Link>
        </Menu>
      </HeaderStyled>
    </>
  )
}

const HeaderStyled = styled.div`
  margin: auto 100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.div`
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`

const Menu = styled.div`
  display: flex;

  > a {
    &:not(:first-child) {
      margin-left: 20px
    }
  }

`
const HeaderLink = styled.a`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`