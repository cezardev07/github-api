/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repo, Language } from "./style";
import { GoRepo } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';

import { useContext } from "react";
import { myContext } from "../../context/Provider";

export const Repositorio = ({props}: any) => {
    const { usuario } = useContext(myContext)

    return(
        <Repo>
            {
                props.name && (
                    <div className="heading-repo">
                        <GoRepo/>
                        <a href={`https://github.com/${usuario}/${props.name}`} target="_blank">{props.name}</a>
                        <span className="view">Public</span>
                    </div>
                )
            }
            {
                props.description ? (
                    <p>{props.description}</p>
                ) : (
                    <p>this repository has no description!</p>
                )
            }
            {
                props.language ? (
                    <div className="status-repo">
                        <div className="language">
                            <span>
                                <Language props={props.language}></Language>
                                {props.language}
                            </span>
                            {
                                props.stargazers_count > 0 && (            
                                    <div className="star">
                                        <AiOutlineStar/>
                                        <p className="numberStar">{props.stargazers_count}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : (
                    <div className="status-repo">
                        <div className="language">
                            <span>
                                <Language></Language>
                                language not found
                            </span>
                        </div>
                    </div>
                )
            }
        </Repo>
    )
}