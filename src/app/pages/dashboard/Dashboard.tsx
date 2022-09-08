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

            if (list.some((listItem) => listItem.title === value)) return;

            TarefasService.create({title: value, isComplete: false}).then((result) => {
                if (result instanceof ErrorExeption) {
                    alert(result.message);
                } else {  
                    setList((oldList) => {
                        return [...oldList, result];
                    }); 
                }
            });
            
            
            }
    }, [list]) // com algumas validações // ... espred usar uma lista com elemtos da lista anteriro

    

    const atualizarInput = useCallback((id:number) => {
        const updateTarefa = list.find((tarefa) => tarefa.id === id);
        if(!updateTarefa) return;

        TarefasService.updateById(id, {
            ...updateTarefa,
            isComplete: !updateTarefa.isComplete
        }).then((result) => {
            if(result instanceof ErrorExeption){
                alert(result.message)
            } else {
                setList(oldlista => {
                    return oldlista.map(oldlistItem => {
                        if(oldlistItem.id === id) return result;
                        return oldlistItem;
                    })
                })
            }
        });
    }, [list])


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
                    {list.map((itemLista) => {
                        return <li key={itemLista.id}>
                            <input 
                                type="checkbox"
                                checked={itemLista.isComplete}
                                onChange={() => atualizarInput(itemLista.id)/*Usa com função pq é e passa o id de parametro para apagalo */}
                            />
                            {itemLista.title}
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    )
}