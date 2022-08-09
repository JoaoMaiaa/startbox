import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root{
        --bg-primary:#111;
        --font-primary:#111;
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
        color:var(--font-primary);
    }

    h1, h2, h3, h4, h5, h6{
        color:var(--font-primary);
        font-size:3rem;
        font-weight:700;
    }
`

export default Global
