import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root{
        --bg-primary:#111;
        --font-primary:#111;
        --font-secondary:#fff;
        --bg-secondary:#fff;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        font-family: 'Poppins', sans-serif;
    }

    p{
        font-size:1.5rem;
        font-weight:400;       
        padding:1rem 0 1rem;
    }

    h1, h2, h3, h4, h5, h6{        
        font-size:3rem;
        font-weight:700;
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
