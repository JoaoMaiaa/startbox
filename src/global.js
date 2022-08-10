import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root{
        --bg-dark:#111;
        --font-primary:#111;
        --font-secondary:#fff;
        --bg-white:#fff;
        --bg-third:#ffcc11;
        --font-third:#ffcc11;
        --small-spacing:1.5rem;
        --medium-spacing:3rem;
        --large-spacing:5rem;
        --container:80rem;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        font-family: 'Poppins', sans-serif;
    }

    a, ul, li {
        text-decoration:none;
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
