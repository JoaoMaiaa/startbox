import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root{
        --bg-dark:#111;
        --font-primary:#111;
        --font-secondary:#3B696B;
        --bg-white:#fff;
        --bg-third:#ffcc11;
        --font-third:#ffcc11;
        --small-spacing:1.5rem;
        --medium-spacing:3rem;
        --large-spacing:5rem;
        --container:75rem;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration:none;
        color:var(--font-secondary);
    }

    li {
        list-style:none;
    }

    h1,h2,h3,h4,h5,h6{
        color:var(--font-primary);
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
