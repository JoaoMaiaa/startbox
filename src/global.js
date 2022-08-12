import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root{
        --font-primary:#111;
        --font-secondary:#3B696B;
        --bg-white:#fff;        
        --bg-dark:#111;
        --small-spacing:1.5rem;
        --medium-spacing:3rem;
        --large-spacing:5rem;
        --container:75rem;
    }

    body{
        background-color: #F6F0DB;
        overflow-x:hidden;
        margin:0;
        padding:0;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        font-family: 'Poppins', sans-serif;        
        color: #414A44;
    } 
    
    ul{
        padding:0;
        margin:0;
    }

    li {
        list-style:none;        
    }

    h1,h2,h3,h4,h5,h6{
        color:#383221;
    }

    p{
        line-height:1.5rem;
    }

    img{
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
    }

    @keyframes slide {
        from{
            opacity:0;
        }
        to{
            transform: translateX(0); // transform é anterior ao opacity
            opacity:1
        }
    }
`

export default Global
