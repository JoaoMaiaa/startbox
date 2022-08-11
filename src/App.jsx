import * as S from './styles'

import Header from './components/Header/header'

function App() {
  return (
    <>
      <Header />
      <S.Box position="relative">
        <img width="100%" height="500px" src="/banner.png "/>
        <S.Container>
          <S.Box display="flex" wrap="wrap" >
            <S.Box display="flex" wrap="wrap" color="#fff" margin="3rem 0" padding="--small-spacing" top="8px" position="absolute">
              <S.Box width="30rem"> 
                <S.Heading1 fontSize="3rem" color="#fff">
                  Humanizing your asurence
                </S.Heading1> 
                <S.Text margin="1.5rem 0" color="--font-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aut iste inventore! Atque autem aliquid molestias sapiente assumenda nostrum laboriosam!
                </S.Text> 
                <S.Button padding="0.5rem 0.8rem" color="#3B696B" href="#" border="2px solid #3B696B" borderRadius="3px">View plans</S.Button>
              </S.Box>
              <S.Box margin="0 5rem" position="relative" width="30rem">
                <S.Img height="600px" width="100%" src="/family.jpg" />
              </S.Box>
            </S.Box>
          </S.Box>  
        </S.Container>     
      </S.Box>
    </>
  )
}

export default App
