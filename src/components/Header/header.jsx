// import Button from '../Button/button'

import * as S from '../../styles'

const Header = () => {
  return (
    <>
      <header>
        <S.Container>
          <S.Box padding="--small-spacing" display="flex" justifyContent="space-between">
            <S.Heading2>Insure</S.Heading2>
              <ul>
                <S.Box display="flex">
                  <a href="#"><li>How We Work</li></a>
                  <a href="#"><li>Blog</li></a>
                  <a href="#"><li>Account</li></a>
                {/* <Button buttonName='View Plans' link="#"/> */}
                </S.Box>
              </ul>
          </S.Box>
        </S.Container>
      </header>
    </>
  )
}

export default Header