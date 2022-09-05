import { createContext, useCallback, useEffect, useState } from "react"

interface IUserLogContextData {
    NomeUser: string;
    Logout: () => void;
}

interface IUserlogProviderProps {
    children: React.ReactNode;
}

export const UserLogContext = createContext<IUserLogContextData>({} as IUserLogContextData); // Macete dizendo q o objeto vazio é a reprensentação da minha interface


export const UserlogProvider: React.FC<IUserlogProviderProps> = ({ children }) => {
    const ExeLogout = useCallback(() => {
        console.log('Lougt')
    }, []);

    const [nome , setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
           setNome('Tú')
           console.log(nome)
        }, 200);
    });

    return(
        <UserLogContext.Provider value={{ NomeUser: 'Matheus', Logout: ExeLogout }}>
            {children} 
        </UserLogContext.Provider>

    );
}