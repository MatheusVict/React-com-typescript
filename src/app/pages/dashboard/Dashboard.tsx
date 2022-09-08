import { useCallback, useEffect, useRef } from "react"
import { useUserLog } from "../../hooks/UserLog";
import { useState } from "react";
import { IItensdaLista, TarefasService } from "../../services/API/tarefas/TarefasService";
import { ErrorExeption } from "../../services/API/ErrorException";

export const Dashboard = () => {
    const contaClick = useRef({ counter: 0 }); // não precisa passar um parametro de tipagem pq ta iniciando co o valor padrão o objeto
    // armaeza o novo valor sem fazer um re render
    const LoginUserContext = useUserLog()

    // Jeito certo de usar uma lista
    


    const [list, setList] = useState<IItensdaLista[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ErrorExeption) {
                    alert(result.message);
                } else {  
                    setList(result);
                }
            });
    }, []);


    const handleIpuntKey: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            
            const value = e.currentTarget.value
            
            e.currentTarget.value = '';
            
            setList((oldList) => {
                if (oldList.some((listItem) => listItem.title === value)) return oldList // se o valor já existir ele śo retorna iclud() === incluso
                return [...oldList, {
                    id: oldList.length,
                    title: value,
                    isComplete: false,
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
                <p>{list.filter((listItem) => listItem.isComplete).length}</p>
                <ul>
                    {list.map((itemLista, index) => {
                        return <li key={itemLista.id}>
                            <input 
                                type="checkbox"
                                checked={itemLista.isComplete}
                                onChange={() => {
                                    setList(oldLista => {
                                        return oldLista.map(oldlistItem => {
                                            const newIsComplete = oldlistItem.title === itemLista.title
                                            ? !oldlistItem.isComplete : oldlistItem.isComplete
                                            return {
                                                ...oldlistItem,
                                                isComplete: newIsComplete
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