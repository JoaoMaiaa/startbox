import * as S from './styles'

import Header from './components/Header/header'

function App() {
  return (
    <>
      <Header />
      <S.Box position="relative">
        <img width="100%" src="/banner.png "/>
        <S.Text top="8px" position="absolute">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nesciunt?
        </S.Text>        
      </S.Box>
    </>
  )
}

export default App
