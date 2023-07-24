import { styled } from 'styled-components';

export const Container = styled.header`
    background: #24292f;
    nav{
        padding: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 20px;

        .logo{
            color: #ffffff;
            font-size: 33px;
        }
        .wrapper-search{
            position: relative;
            width: 400px;
            display: flex;
            align-items: center;
            input{
                width: 100%;
                padding: 8px 40px;
                font-size: 17px;
                background: transparent;
                border: solid 1px #424951;
                color: rgba(255,255,255,.75);
                outline: none;
                border-radius: 5px;
            }
            input::placeholder{
                color: rgba(255,255,255,.75);
            }
            label{
                position: absolute;
                left: 10px;
                font-size: 25px;
                margin-top: 6px;
                color: rgba(255,255,255,.75);
            }
        }
    }
`