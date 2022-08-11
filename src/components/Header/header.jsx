import * as S from '../../styles'

const Header = () => {
  return (
    <>
      <header>
        <S.Container>
          <S.Box alignItems="center" padding="--small-spacing" wrap="wrap"  display="flex" justifyContent="space-between">
            <S.Heading2>Insure</S.Heading2>
              <ul>
                <S.Box display="flex" wrap="wrap">
                  <a href="#"><li>How We Work</li></a>
                  <a href="#"><li>Blog</li></a>
                  <a href="#"><li>Account</li></a>              
                  <li><S.Button padding="0.5rem 0.8rem" href="#" border="2px solid #3B696B" borderRadius="3px">View plans</S.Button></li>
                </S.Box>
              </ul>
          </S.Box>
        </S.Container>
      </header>
    </>
  )
}

export default Header