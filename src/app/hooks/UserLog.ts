import { useContext } from "react"
import { UserLogContext } from "../context/Userlog";
 // React hooks = função q usa hooks do react

export const useUserLog = () => { // Meu hook personalzado
    const context = useContext(UserLogContext);
    return context
};

// Criei meu proprio hook pra não precisar ficar importando tudo
