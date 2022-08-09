import styled from 'styled-components'

const Button = styled.a`
    padding:10px 20px;
    border-radius:3px;
    background-color:${props => props.bgPrimary ? 'transparent' : '#fff'};
    border: 1px solid var(--bg-primary);
    cursor:${props => props.bgPrimary ? '#fff' : '#111'};
    color:var(--font-primary);
    &:hover{
        background-color:${props => props.bgPrimary ? '#fff' : '#111'};
        color:${props => props.bgPrimary ? '#111' : '#fff'};
        border: 1px solid var(--bg-secondary);
    }
    font-size:1rem;
    text-decoration:none;

`

export default Button

