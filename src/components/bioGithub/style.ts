import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: solid 2px #ddd;
        cursor: pointer;

        margin-top: 10px;
    }

    button{
        text-transform: capitalize;
        padding: 10px;
        background: #f6f8fa;
        border: solid 1px #ddd;
        border-radius: 5px;
        cursor: pointer;
        color: #000;
        font-size: 15px;
    }
    button:hover{
        background: #dddd;
    }

    ul{
        border-bottom: solid 1px #ddd;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        h3{
            font-size: 15px;
            font-weight: 600;
        }

        .wrapper-achievements{
            display: flex;
            gap: 2px;

            img{
                width: 64px;
                height: 64px;

                object-fit: cover;
                border: none;
            }
        }
    }
    ul.location{
        border-bottom: solid 1px #ddd;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 7px;
    }
    @media (max-width: 700px) {
        .user{
            display: flex;
            align-items: center;
            gap: 20px;
            img{
                width: 60px;
            }
        }
        ul{
            border-color: transparent;
        }
    }
`