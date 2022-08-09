import styled from 'styled-components'

export const Container = styled.div`
    max-width:80vw;    
    margin:0 auto;
`

export const Flex = styled.div`
    display:flex;
    display:flex;    
    align-items:center;
    height:100vh;
`

export const Box = styled.div``

export const Section = styled.section`
    width:100%;
    opacity:0;
    transform: translateX(-60px);
    background-color:${props => props.bgPrimary ? '#111' : '#fff'};
    color:${props => props.bgPrimary ? '#fff' : '#111'};

    p{
        margin: 15px 0 10px;
    }

    animation:slide .3s forwards ease;    
`

export const Svg = styled.div`
    margin:-4px 0;
`
