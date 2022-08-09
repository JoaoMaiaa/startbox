import * as S from './styles'
import ButtonComponent from './components/Button/button'

function App() {
  return (
    <>
      <S.Container>
        <S.Section>
          <S.Flex>
            <S.Box>
              <h1>Seja muito Bem vindo</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, consequuntur!</p>
              <ButtonComponent link="" buttonName="Saiba Mais" />
            </S.Box>
          </S.Flex>
        </S.Section>
      </S.Container>           
      <S.Svg>             
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#111111" fill-opacity="1" d="M0,96L1440,256L1440,320L0,320Z"></path>
        </svg>         
      </S.Svg>
      <S.Section bgPrimary fontSecondary>
        <S.Container >
          <S.Flex>
            <S.Box>
              <h1>Seja muito Bem vindo</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, consequuntur!</p>
              <ButtonComponent bgPrimary link="" buttonName="Saiba Mais" />
            </S.Box>
          </S.Flex>
        </S.Container>
      </S.Section>
    </>
  )
}

export default App
