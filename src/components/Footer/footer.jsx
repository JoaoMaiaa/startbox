import * as S from '../../styles'

const Footer = () => {
  return (
    <>
      <footer>
        <S.Box padding="2rem 0" decoration="underline" display="flex" justifyContent="center">
          <S.Text>Made by <S.A target="_blank" href="https://joaomaia.vercel.app"> João Maia</S.A></S.Text>
        </S.Box>
      </footer>
    </>
  )
}

export default Footer