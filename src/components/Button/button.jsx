import ButtonStyle from './styles'

const Button = ({ buttonName, link }) => {
  return (
    <>
      <ButtonStyle href={link}>{buttonName}</ButtonStyle>
    </>
  )
}

export default Button