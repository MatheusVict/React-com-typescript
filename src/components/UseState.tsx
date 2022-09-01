import { useCallback, useEffect, useMemo, useState } from "react"
import styles from './useState.module.css'

export const UseState = () => {

    useEffect(() => { //Carrega só quando o componente renderizar de primeira
        if (window.confirm('Homem ou mulher?')) { //useEffect é bom pra chamada de API pq só faz uma vez
            console.log('interessante')
        } else {
            console.log('HMMMMMM')
        }
    
    }, []);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    useEffect(() => {
        console.log(email)
    }, [email, senha]); // Dependencias dizem q ele vai ser re renderizado sempre q esses valores forem alterados


    const Btn = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha]);

    const tamanhoDoEmail = useMemo(() => {
        console.log('foi')
        return email.length;
    }, [email.length]);

    return(
        <div>
            <form className={styles.form}>
                <p>Você digitou {tamanhoDoEmail} letras</p>
                <label>
                    <span>
                        Email
                    </span>
                    <input type="text" onChange={e => setEmail(e.target.value)} className={styles.input}/>
                    </label>
                    <label>
                    <span>
                        Senha
                    </span>
                    <input type="password" onChange={e => setSenha(e.target.value)}/>
                </label>
                <button type="button" onClick={Btn} className={styles.btn}>Vai</button>
                <p>Seu email é {email}</p>
                <p>Sua senha é {senha}</p>
            </form>
        </div>
    )
}