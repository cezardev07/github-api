import { useContext, useState } from "react";

import { Container } from "./style"
import { BsGithub } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { myContext } from "../../context/Provider";

export const Header = () => {
    const [ value, setValue ] = useState("")
    const { setUsuario } = useContext(myContext)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setUsuario(value)
        setValue("")
    }

    return(
        <Container>
            <nav>
                <a href="https://github.com/cezardev07" target="_blank" className="logo">
                    <BsGithub/>
                </a>
                <form onSubmit={handleSubmit} className="wrapper-search">
                    <label htmlFor="search">
                        <BiSearch/>
                    </label>
                    <input onChange={({ target }) => setValue(target.value)} value={value} required id="search" type="text" placeholder="busca usuario"/>
                </form>
            </nav>
        </Container>
    )
}