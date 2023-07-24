import { 
    useEffect,
    useState,
    useContext 
} from "react";

import { myContext } from "../../context/Provider";
import { BioGithub } from "../../components/bioGithub/index";
import { Repositorio } from "../../components/repositorio/index";
import { GoRepo } from 'react-icons/go';

import { 
    Container,
    Heading,
    Wrapper,
    Profile,
    Repositories
} from "./style";

interface TypeBio{
    avatar_url: string;
    name: string;
    login?: string;
    bio?: string;
    location?: string;
}

interface TypeRepo{
    id: number;
    name: string;
    description?: string;
    language?: string;
    stargazers_count?: number;
}

export const Home = () => {
    const [bio, setBio] = useState<TypeBio[]>([])
    const [repositorios, setRepositorios] = useState<TypeRepo[]>([])

    const { usuario } = useContext(myContext)

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`https://api.github.com/users/${usuario}`)
            const data = await res.json()
            setBio(data)
        }
        
        const getRepositories = async () => {
            const res = await fetch(`https://api.github.com/users/${usuario}/repos`)
            const data = await res.json()
            data.sort(() => Math.random() - 0.5)
            setRepositorios(data)
        }
        getUser()
        getRepositories()
    },[usuario])

    return(
        <Container>
            <Wrapper>
                <Profile>
                    <BioGithub props={bio}/>
                </Profile>
                <div className="wrapper">
                    <Heading>
                        <nav>
                            <a href="#">
                                <GoRepo/>
                                Repositories 
                                <span>{repositorios.length}</span> 
                            </a>
                        </nav>
                    </Heading>
                    <Repositories>
                        <div className="title">
                            <p></p>
                        </div>
                        <div className="wrapper-repos">
                            {
                                repositorios.length > 0 && repositorios.map((repo) => {
                                    return(
                                        <Repositorio key={repo.id} props={repo}/>
                                    )
                                })
                            }
                        </div>
                    </Repositories>
                </div>
            </Wrapper>
        </Container>

    )
}