import styled from 'styled-components'

export const ButtonStyle = styled.a`
    text-decoration:none;
    padding:var(${props=> props.padding ? props.padding : ''});
    margin:var(${props=> props.margin ? props.margin : ''});       
    background-color:var(${({bg})=>bg}); // destructure
    border:${props=> props.border ? props.border : ''};
    border-radius:${props=> props.borderRadius ? props.borderRadius : ''};
`