import { Container } from "./style";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoLocation } from "react-icons/go";
import  pair_extraordinaire  from "../../assets/pair-extraordinaire-default.png";
import  quickdraw from "../../assets/quickdraw-default.png";
import  yolo  from "../../assets/yolo-default.png";
import  pull_shark  from "../../assets/pull-shark-default.png";

export const BioGithub= ({ props } : any) => {
    return(
        <Container>
            {
                props && (
                    <>
                        <div className="user">
                            {
                                props.avatar_url && (
                                    <img src={props.avatar_url}/>
                                )
                            }
                            <div className="wrapper-username">
                                {
                                    props.name && (
                                        <h2>{props.name}</h2>
                                    )
                                }
                                
                                {
                                    props.login && (
                                        <p>{props.login}</p>
                                    )
                                }
                            </div>
                        </div>
                        {
                            props.name && (
                                <button>follow</button>
                            )
                        }
                        {
                            props.bio && (
                                <div className="description">
                                    <p>{props.bio}</p>
                                </div>
                            )
                        }
                        <ul className="location">
                            {
                                props.location && (
                                    <>
                                        <GoLocation/>
                                        <p>{props.location}</p>
                                    </>
                                )
                            }
                        </ul>
                        {
                            props.name && (
                                <ul>
                                    <h3>Achievements</h3>
                                    <div className="wrapper-achievements">
                                        <img src={pair_extraordinaire}/>
                                        <img src={quickdraw}/>
                                        <img src={yolo}/>
                                        <img src={pull_shark}/>
                                    </div>
                                </ul>
                            )
                        }
                    </>
                )
            }
        </Container>
    )
}