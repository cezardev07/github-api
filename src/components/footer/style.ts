import { styled } from 'styled-components';

export const Container = styled.footer`
    .wrapper{
        max-width: 1280px;
        padding: 40px 20px;
        margin: 0 auto;
        border-top: solid 1px #ddd;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 40px;
        .direitos{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            svg{
                font-size: 30px;
            }
            p{
                white-space: nowrap;
            }
        }
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            text-align: center;
            a{
                text-decoration: none;
                color: royalblue;
                text-transform: capitalize;
                font-size: 15px;
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }
`