import styled from 'styled-components'

export const Container = styled.section`
    max-width: var(--container);
    padding:0 var(--small-spacing);
    margin: auto;
`
export const Box = styled.div`
    padding:var(${props=> props.padding ? props.padding : ''});
    margin:var(${props=> props.margin ? props.margin : ''});       
    color:${props=> props.color ? props.color : ''};
    display:${props=> props.display ? props.display : ''};
    justify-content:${props=> props.justifyContent ? props.justifyContent : ''};
    align-items:${props=> props.alignItems ? props.alignItems : ''};
    background-color:var(${({bg})=>bg}); // destructure
    width:${props=> props.width ? props.width : ''};
    height:${props=> props.height ? props.height : ''};
    border:${props=> props.border ? props.border : ''};
    border-radius:${props=> props.borderRadius ? props.borderRadius : ''};
    position:${props=> props.position ? props.position : ''};

    a{
        color:${props=> props.color ? props.color : ''}; 
        margin:0 var(--small-spacing);   
    }
`
export const Text = styled.p`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:var(${props=> props.color ? props.color : ''});
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
    margin:${props=> props.margin ? props.margin : ''} ;    
    top:${props=> props.top ? props.top : ''} ;   
    position:${props=> props.position ? props.position : ''};

`
export const Heading1 = styled.h1`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:var(${props=> props.color ? props.color : ''});
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
`
export const Heading2 = styled.h2`
    font-size:${props=> props.fontSize ? props.fontSize : ''};
    color:var(${props=> props.color ? props.color : ''});
    font-weight:${props=> props.weight ? props.weight : ''};
    text-align:${props=> props.align ? props.align : ''} ;
`

export const Img = styled.img`
    background-size:cover;
    background-repeat: no-repeat;
    width:${props => props.width ? props.width : ''};
    min-height:${props => props.height ? props.height : ''};
`


