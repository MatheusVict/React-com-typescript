import { useContext, useRef } from "react"
import { UserLogContext } from "../../context/Userlog";

export const Dashboard = () => {
    const contaClick = useRef({ counter: 0 }); // não precisa passar um parametro de tipagem pq ta iniciando co o valor padrão o objeto
    // armaeza o novo valor sem fazer um re render
    const LoginUserContext = useContext(UserLogContext);
    return(
        <>
           <h1>Dashboard</h1>
           <p>O contexto é {LoginUserContext.NomeUser}</p> 
           <p>Contador : {contaClick.current.counter}</p>
           <button onClick={() => contaClick.current.counter++}>Adicionar</button>
           <button onClick={() => console.log(contaClick.current.counter)}>Mostrar</button>
        </>
    )
}