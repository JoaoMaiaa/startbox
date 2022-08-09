import styled from 'styled-components'

export const Container = styled.div`
    max-width:80vw;    
    margin:0 auto;
`

export const Flex = styled.div`
    display:flex;
`

export const Box = styled.div``

export const Section = styled.section`
    display:flex;    
    align-items:center;
    height:100vh;
    width:100%;

    p{
        margin: 15px 0 10px;
    }        
`

export const Button = styled.button`
    padding:10px 20px;
    border-radius:3px;
    background: transparent;
    border: 1px solid var(--bg-primary);
    cursor:pointer;
    &:hover{
        background:#111;
        color:white;
    }
`