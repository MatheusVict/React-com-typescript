import { useCallback, useRef } from "react"
import { useUserLog } from "../../hooks/UserLog";
import { useState } from "react";

export const Dashboard = () => {
    const contaClick = useRef({ counter: 0 }); // não precisa passar um parametro de tipagem pq ta iniciando co o valor padrão o objeto
    // armaeza o novo valor sem fazer um re render
    const LoginUserContext = useUserLog()

    // Jeito certo de usar uma lista
    const [list, setList] = useState<string[]>(['Linda', 'Princesa', 'Fofa'])
    const handleIpuntKey: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            
            const valor = e.currentTarget.value
            
            e.currentTarget.value = '';
            
            setList((oldList) => {
                if (oldList.includes(valor)) return oldList // se o valor já existir ele śo retorna iclud() === incluso
                return [...oldList, valor];
            }); // ... espred usar uma lista com elemtos da lista anteriro
        }
    }, []) // com algumas validações


    return(
        <div>
           <h1>Dashboard</h1>
           <p>O contexto é {LoginUserContext.NomeUser}</p> 
           <p>Contador : {contaClick.current.counter}</p>
           <button onClick={() => contaClick.current.counter++}>Adicionar</button>
           <button onClick={() => console.log(contaClick.current.counter)}>Mostrar</button>

            <div>
            <h1>Tú é</h1>
            <input
                type="text"
                onKeyDown={handleIpuntKey}
            />

            <ul>
                {list.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
            </div>
        </div>
    )
}