import { UseState } from "./UseState";

const Button = () => {
    return(
        <button>Entrar</button>
    )
}


interface ILogin {
    tipo: string;
    place: string;
}

export const Login = ({ tipo, place }: ILogin) => {
    function Enviar(e: any) {
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={Enviar}>
                <input type={tipo} placeholder={place}/>
                <Button/>
            </form>
            <UseState/>
        </div>
    )
}