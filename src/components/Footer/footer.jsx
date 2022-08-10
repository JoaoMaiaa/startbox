import * as S from '../../styles'

const Footer = () => {
  return (
    <>
      <footer>
        <S.Box display="flex" justifyContent="space-between">
          <S.Heading1>Insure</S.Heading1>
            <ul>
              <S.Box display="flex">
                  <a href="#"><li>1</li></a>
                  <a href="#"><li>2</li></a>
                  <a href="#"><li>3</li></a>
                  <a href="#"><li>4</li></a>
              </S.Box>
            </ul>
        </S.Box>
      </footer>
    </>
  )
}

export default Footer