import Button from './styles'

const ButtonComponent = ({ buttonName, link, bg }) => {  
  return (
    <>
      <Button href={`#${link}`} {...bg}>{buttonName}</Button>
    </>
  )
}

export default ButtonComponent