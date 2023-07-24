import { styled } from "styled-components";

export const Container = styled.main`
    padding: 20px 0;
    min-height: 80vh;
`
export const Wrapper = styled.div`
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 296px auto;
    gap: 20px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 0px;
    }
`
export const Heading = styled.div`
    width: 100%;
    border-bottom: solid 1px #ddd;

    nav{

        display: flex;
        align-items: center;
        justify-content: flex-start;

        a{
            position: relative;
            color: var(--text-strong);
            font-weight: 600;

            border-bottom: solid 2px #fd8c73;
            padding: 10px;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            gap: 10px;
            span{
                background: #eff1f3;
                padding: 2px 4px;
                font-size: 12px;
                border-radius: 50%;
            }
        }
        a:hover{
            background: #eff1f3;
        }
    }

    @media (max-width: 700px) {
        nav{
            justify-content: center;
        }
    }
`


export const Profile = styled.aside`
    /* padding-bottom: 20px; */
`

export const Repositories = styled.div`
    padding: 10px 0;
   .title{
        width: 100%;
    }

   .wrapper-repos{
    width: 100%;
    padding: 20px 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
   }
`