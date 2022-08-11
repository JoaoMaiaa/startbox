import * as S from './styles'

function App() {
  return (
    <>
      <S.Box position="relative">
        <S.Img src="/polygon.png" width="100%" height="100vh" />
        <S.Container>
          <S.Box position="absolute" top="0" >
              <S.Box display="flex" height="100vh" alignItems="center">
                <S.Box>
                  <S.Heading1 fontSize="2.5rem">
                    Seja muito bem-vindo
                  </S.Heading1>
                  <S.Text margin="10px 0 5px">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, in.
                  </S.Text>
                  <S.Button bgHover="#414A44" fontHover="#F6F0DB" border="2px solid #414A44" padding="0.8rem 1rem">Saiba Mais</S.Button>
                </S.Box>
              </S.Box>
          </S.Box>
        </S.Container>
      </S.Box>     
      <S.Box>
        <S.Img src="/wave.svg"/>
      </S.Box>
      <S.Box bg="#111">
        <S.Container >
          <S.Box display="flex" height="100vh" alignItems="center">
            <S.Box>
              <S.Heading1 fontSize="2.5rem">
                Seja muito bem-vindo
              </S.Heading1>
              <S.Text margin="10px 0 5px">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, in.
              </S.Text>
              <S.Button bgHover="#414A44" fontHover="#F6F0DB" border="2px solid #414A44" padding="0.8rem 1rem">Saiba Mais</S.Button>
            </S.Box>
          </S.Box>
        </S.Container>
      </S.Box>
      <S.Box bg="#111">
        <S.Container>
          <S.Box display="flex" height="100vh" alignItems="center">
            <S.Box display="flex" margin="auto">
              <S.Box width="20rem" padding="2rem" height="20rem" bg="#383221" borderRadius="4px">
                <S.Heading2 color="#F6F0DB">Titulo</S.Heading2>
                <S.Text margin="30px 0 0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum!
                </S.Text>
                <S.Button border="2px solid #F6F0DB" padding="0.8rem 1rem" color="#F6F0DB" borderRadius="4px" margin="5rem 0">Saiba mais</S.Button>
              </S.Box>
              {/* <S.Box width="20rem">
                <S.Heading2>Titulo</S.Heading2>
                <S.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum!
                </S.Text>
                <S.Button>Saiba mais</S.Button>
              </S.Box>
              <S.Box width="20rem">
                <S.Heading2>Titulo</S.Heading2>
                <S.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum!
                </S.Text>
                <S.Button>Saiba mais</S.Button>
              </S.Box> */}
            </S.Box>
          </S.Box>
        </S.Container>
      </S.Box>
    </>
  )
}

export default App
