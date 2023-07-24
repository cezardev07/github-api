/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, ReactNode } from "react";

interface MyContextData {
    usuario: string;
    setUsuario: (value: string) => void;
}

export const myContext = createContext<MyContextData>({} as MyContextData)

export const Provider = ({children} : { children: ReactNode }) => {
    const [usuario, setUsuario] = useState<string>("cezardev07")

    const value : MyContextData = {
        usuario,
        setUsuario
    }

    return(
        <myContext.Provider value={value}>
            {children}
        </myContext.Provider>
    )
}