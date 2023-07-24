/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from 'styled-components';

export const Repo = styled.div`
    padding: 13px;
    border: solid 1px #ddd;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    .heading-repo{
        display: flex;
        align-items: center;
        gap: 5px;
        svg{
            font-size: 15px;
        }
    }

    a{
        color: #2f81f7;
        font-weight: 600;
        display: flex;
        align-items: center;
        margin-top: -3px;
    }
    a:hover{
        text-decoration: underline;
    }
    .view{
        font-size: 12px;
        padding: 3px;
        background: transparent;
        color: #646c76;
        border: solid 1px #ddd;
        border-radius: 10px;
        text-transform: capitalize;
    }
    p{
        font-size: 12px;
        color: #646c76;
        font-weight: 400;
    }
    .language{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 20px;

        span{
            font-size: 12px;
            color: #646c76;
            font-weight: 400;
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 6px;
        }
    }
    .star{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;

        p.numberStar{
            font-size: 12px;
        }
    }
`

export const Language = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({props}: any) => {
        if (props === "TypeScript" || props === "Python") {
            return "#3178c6";
          } else if (props === "HTML") {
            return "#e34c26";
          } else if (props === "JavaScript") {
            return "#f1e05a";
          } else if (props === "CSS") {
            return "#563d7c";
          } else {
            return "#000";
          }
    }};
`