import styled from 'styled-components'

export const Container = styled.section`
    max-width: var(--container);
    padding:0 var(--small-spacing);
    margin: auto;
    background-color:${({bg}) => bg} ;
`
export const Box = styled.div`
    padding:${props=> props.padding ? props.padding : ''};
    margin:${props=> props.margin ? props.margin : ''};       
    color:${props=> props.color ? props.color : ''};
    display:${props=> props.display ? props.display : ''};
    justify-content:${props=> props.justifyContent ? props.justifyContent : ''};
    align-items:${props=> props.alignItems ? props.alignItems : ''};
    flex-wrap: ${props=> props.wrap ? props.wrap : ''};
    background-color:${({bg})=>bg}; // destructure
    width:${props=> props.width ? props.width : ''};
    height:${props=> props.height ? props.height : ''};
    border:${props=> props.border ? props.border : ''};
    border-radius:${props=> props.borderRadius ? props.borderRadius : ''};
    position:${props=> props.position ? props.position : ''};
    top:${props=> props.top ? props.top : ''} ;   
    gap: ${props => props.gap ? props.gap : ''};
    flex-fill:${props => props.flex ? props.flex : ''};
`
export const Text = styled.p`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:${props=> props.color ? props.color : ''};
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
    margin:${props=> props.margin ? props.margin : ''} ;    
    padding:${props=> props.padding ? props.padding : ''} ;    
    top:${props=> props.top ? props.top : ''} ;   
    position:${props=> props.position ? props.position : ''};
`
export const Heading1 = styled.h1`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:${props=> props.color ? props.color : ''};
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
`
export const Heading2 = styled.h2`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:${props=> props.color ? props.color : ''};
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
`
export const Img = styled.img`
    background-size:cover;
    background-repeat: no-repeat;
    background-position:center;
    width:${props => props.width ? props.width : ''};
    min-height:${props => props.height ? props.height : ''};
    margin:${props => props.margin ? props.margin : ''} 0;
    border-radius:${props=> props.borderRadius ? props.borderRadius : ''};
    transform:rotate(${props=> props.rotate ? props.rotate : ''});
`

export const Button = styled.a`
    text-decoration:none;
    margin:${props=> props.margin ? props.margin : ''} 0;
    padding:${props=> props.padding ? props.padding : ''};
    color:${props=> props.color ? props.color : ''};
    border:${props=> props.border ? props.border : ''};
    border-radius:${props=> props.borderRadius ? props.borderRadius : ''};
    background-color:var(${({bg})=>bg}); // destructure
    cursor: pointer;
    display:inline-flex;

    &:hover{
        background-color:${({bgHover})=>bgHover}; // destructure
        color:${({fontHover})=>fontHover};
    }
`

export const A = styled.a`
    text-decoration: underline;
`


