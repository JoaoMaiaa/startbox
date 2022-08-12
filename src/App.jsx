import * as S from './styles'
import Footer from './components/Footer/footer'

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
                <S.Text padding="0 4rem 0 0" margin="10px 0 5px">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, in.
                </S.Text>
                <S.Button bgHover="#414A44" fontHover="#F6F0DB" border="2px solid #414A44" padding="0.8rem 1rem">Saiba Mais</S.Button>
              </S.Box>
            </S.Box>
          </S.Box>
        </S.Container>
      </S.Box>
      <S.Box>
        <S.Img margin="-6px -4px" src="/wave.svg" />
      </S.Box>
      <S.Box bg="#111">
        <S.Container >
          <S.Box display="flex" height="100vh" alignItems="center">
            <S.Box >
              <S.Heading1 fontSize="2.5rem" width="100vw" >
                Seja muito bem-vindo
              </S.Heading1>
              <S.Text padding="0 4rem 0 0" margin="10px 0 5px">
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
            <S.Box overflowX="auto"  display="flex" gap="1rem" margin="auto" >
              <S.Box display="inline-block" mWidth="80%" flex="1" padding="2rem"  bg="#383221" borderRadius="4px">
                <S.Heading2 color="#F6F0DB">Titulo</S.Heading2>
                <S.Text color="#F6F0DB" margin="30px 0 0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum!
                </S.Text>
                <S.Button bgHover="#F6F0DB" fontHover="#383221" border="2px solid #F6F0DB" padding="0.8rem 1rem" color="#F6F0DB" borderRadius="4px" margin="5rem 0">Saiba mais</S.Button>
              </S.Box>
              <S.Box display="inline-block" mWidth="80%" flex="1" padding="2rem" border="2px solid #F6F0DB" borderRadius="4px">
                <S.Heading2 color="#F6F0DB">Titulo</S.Heading2>
                <S.Text color="#F6F0DB" margin="30px 0 0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum!
                </S.Text>
                <S.Button bgHover="#F6F0DB" fontHover="#111" border="2px solid #F6F0DB" padding="0.8rem 1rem" color="#F6F0DB" borderRadius="4px" margin="5rem 0">Saiba mais</S.Button>
              </S.Box>
              <S.Box display="inline-block" mWidth="80%" flex="1" padding="2rem" bg="#383221" borderRadius="4px">
                <S.Heading2 color="#F6F0DB">Titulo</S.Heading2>
                <S.Text color="#F6F0DB" margin="30px 0 0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum!
                </S.Text>
                <S.Button bgHover="#F6F0DB" fontHover="#383221" border="2px solid #F6F0DB" padding="0.8rem 1rem" color="#F6F0DB" borderRadius="4px" margin="5rem 0">Saiba mais</S.Button>
              </S.Box>
            </S.Box>
          </S.Box>
        </S.Container>
      </S.Box>
      <S.Box bg="#111">
        <S.Container>
          <S.Box display="flex" height="100%" mHeight="100vh" alignItems="center" >
            <S.Box margin="0" bg="#F6F0DB" borderRadius="4px" display="flex" wrap="wrap" justifyContent="space-between">  
              <S.Box padding="2rem" mWidth="100%" width="50%">
                <S.Heading1 fontSize="2rem">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </S.Heading1>
                <S.Text margin="1.8rem 0 0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo commodi qui iste rerum quaerat suscipit numquam possimus, rem reiciendis.
                </S.Text>
                <S.Box margin="5rem 0 0" gap="2rem" display="flex" wrap="wrap">
                  <S.Box>
                    <S.Heading2 fontSize="1.5rem">10K+</S.Heading2>
                    <S.Text>Companies</S.Text>
                  </S.Box>
                  <S.Box>
                    <S.Heading2 fontSize="1.5rem">314</S.Heading2>
                    <S.Text>Templates</S.Text>
                  </S.Box>
                  <S.Box>
                    <S.Heading2 fontSize="1.5rem">12M+</S.Heading2>
                    <S.Text>Queries</S.Text>
                  </S.Box>
                </S.Box>
              </S.Box>            
             <S.Box mWidth="100%" width="50%">
              <S.Img height="100%" borderRadius="0 4px 4px 0" src="/network.jpg" width="100%"/>
             </S.Box>
            </S.Box>
          </S.Box>
        </S.Container>
      </S.Box>
      <S.Box>
        <S.Img rotate="180deg" src="/wave.svg" />
      </S.Box>
      <S.Box>
        <S.Container>
          <S.Box gap="2rem" display="flex" wrap="wrap">          
            <S.Box flex="1" mWidth="100%">
              <S.Heading2>Our company</S.Heading2>
              <ul>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>how we work</li></S.A>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>why our company?</li></S.A>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>view plans</li></S.A>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>reviews</li></S.A>
              </ul>
            </S.Box>
            <S.Box flex="1" mWidth="100%">
              <S.Heading2>Contact</S.Heading2>
              <ul>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>Salse</li></S.A>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>Support</li></S.A>
                <S.A size="0.9rem" margin="0.5px" decoration="none" decorationHover="underline" href="#"><li>live chat</li></S.A>                
              </ul>
            </S.Box> 
            <S.Box flex="1" mWidth="100%">
              <S.Heading2>Social media</S.Heading2>
              <ul>
                <S.Box display="flex">
                  <S.A href="#"><li></li></S.A>
                  <S.A href="#"><li></li></S.A>
                  <S.A href="#"><li></li></S.A>                
                  <S.A href="#"><li></li></S.A>                
                </S.Box>
              </ul>
            </S.Box>             
          </S.Box>
        </S.Container>
      </S.Box>
      <Footer />
    </>
  )
}

export default App
