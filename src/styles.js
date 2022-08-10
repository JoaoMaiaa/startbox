import styled from 'styled-components'

export const Container = styled.section`
    max-width: var(--container);
    margin: auto;
`

export const Box = styled.div`
    padding:var(${props=> props.padding ? props.padding : ''});
    margin:var(${props=> props.margin ? props.margin : ''});       
    display:${props=> props.display ? props.display : ''};
    justifyContent:${props=> props.justifyContent ? props.justifyContent : ''};
    align-items:${props=> props.alignItems ? props.alignItems : ''};
    background-color:var(${({bg})=>bg}); // destructure
    width:${props=> props.width ? props.width : ''};
    height:${props=> props.height ? props.height : ''};    
`

export const Text = styled.p`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:var(${props=> props.color ? props.color : ''});
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
`
export const Heading1 = styled.h1`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:var(${props=> props.color ? props.color : ''});
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
`