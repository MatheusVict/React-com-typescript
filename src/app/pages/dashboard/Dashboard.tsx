import { useRef } from "react"

export const Dashboard = () => {
    const contaClick = useRef({ counter: 0 }); // não precisa passar um parametro de tipagem pq ta iniciando co o valor padrão o objeto
    // armaeza o novo valor sem fazer um re render
    return(
        <>
           <h1>Dashboard</h1> 
           <p>Contador : {contaClick.current.counter}</p>
           <button onClick={() => contaClick.current.counter++}>Adicionar</button>
           <button onClick={() => console.log(contaClick.current.counter)}>Mostrar</button>
        </>
    )
}