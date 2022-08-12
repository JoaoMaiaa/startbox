import * as S from '../../styles'

const Footer = () => {
  return (
    <>
      <footer>
        <S.Box padding="2rem 0" decoration="underline" display="flex" justifyContent="center">
          <S.Text color="#414A44">Made by <S.A color="#414A44" target="_blank" href="https://joaomaia.vercel.app"> João Maia</S.A></S.Text>
        </S.Box>
      </footer>
    </>
  )
}

export default Footer