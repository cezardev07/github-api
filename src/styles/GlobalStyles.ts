import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    }

    html{
        min-height: 100vh;
    }
    
    :root{
        --text-strong: #000;
        --text-normal: #000;
        --background: #ffffff;
    }

    body{
        background: var(--background);
    }

    a{
        text-decoration: none;
    }
    
`