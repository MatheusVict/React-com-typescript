import { createContext } from "react"

interface IUserLogContextData {
    NomeUser: string;
}

interface IUserlogProviderProps {
    children: React.ReactNode;
}

export const UserLogContext = createContext<IUserLogContextData>({} as IUserLogContextData); // Macete dizendo q o objeto vazio é a reprensentação da minha interface


export const UserlogProvider: React.FC<IUserlogProviderProps> = ({ children }) => {
    return(
        <UserLogContext.Provider value={{ NomeUser: 'Matheus' }}>
            {children}
        </UserLogContext.Provider>
    );
}