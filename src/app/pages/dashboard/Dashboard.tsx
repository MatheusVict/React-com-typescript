import { useCallback, useRef } from "react"
import { useUserLog } from "../../hooks/UserLog";
import { useState } from "react";

export const Dashboard = () => {
    const contaClick = useRef({ counter: 0 }); // não precisa passar um parametro de tipagem pq ta iniciando co o valor padrão o objeto
    // armaeza o novo valor sem fazer um re render
    const LoginUserContext = useUserLog()

    // Jeito certo de usar uma lista
    interface IItensdaLista {
        title: string;
        select: boolean;
    }


    const [list, setList] = useState<IItensdaLista[]>([]);
    const handleIpuntKey: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            
            const value = e.currentTarget.value
            
            e.currentTarget.value = '';
            
            setList((oldList) => {
                if (oldList.some((listItem) => listItem.title === value)) return oldList // se o valor já existir ele śo retorna iclud() === incluso
                return [...oldList, {
                    title: value,
                    select: false,
                }];
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
                <p>{list.filter((listItem) => listItem.select).length}</p>
                <ul>
                    {list.map((itemLista, index) => {
                        return <li key={itemLista.title}>
                            <input 
                                type="checkbox"
                                checked={itemLista.select}
                                onChange={() => {
                                    setList(oldLista => {
                                        return oldLista.map(oldlistItem => {
                                            const newSelect = oldlistItem.title === itemLista.title
                                            ? !oldlistItem.select : oldlistItem.select
                                            return {
                                                ...oldlistItem,
                                                select: newSelect
                                            };
                                        })
                                    });
                                }}
                            />
                            {itemLista.title}
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    )
}