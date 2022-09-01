import { useEffect, useMemo, useState } from "react"

export const UseState = () => {

    useEffect(() => { //Carrega só quando o componente renderizar de primeira
        if (window.confirm('Homem ou mulher?')) { //useEffect é bom pra chamada de API pq só faz uma vez
            console.log('interessante')
        } else {
            console.log('HMMMMMM')
        }
    
    }, []);

    const [email, setEmail] = useState('')
    useEffect(() => {
        console.log(email)
    }, [email]); // Dependencias dizem q ele vai ser re renderizado sempre q esses valores forem alterados


    const Btn = () => {
        console.log(email)
    }

    const tamanhoDoEmail = useMemo(() => {
        console.log('foi')
        return email.length;
    }, [email.length]);

    return(
        <div>
            <form>
                <p>Você digitou {tamanhoDoEmail} letras</p>
                <label>
                    <span>
                        Email
                    </span>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                    <span>
                        Senha
                    </span>
                    <input type="text"/>
                </label>
                <button type="button" onClick={Btn}>Vai</button>
                <p>{email}</p>
            </form>
        </div>
    )
}