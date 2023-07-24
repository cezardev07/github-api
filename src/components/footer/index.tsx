import { Container } from "./style";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
    return(
        <Container>
            <div className="wrapper">
                <div className="direitos">
                    <BsGithub/>
                    <p>
                        © 2023 GitHub, Inc. 
                    </p>
                </div>
                <ul>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Status</a>
                    <a href="#">Docs</a>
                    <a href="#">Contact GitHub</a>
                    <a href="#">Pricing</a>
                    <a href="#">API</a>
                    <a href="#">Training</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                </ul>
            </div>
        </Container>
    )
}