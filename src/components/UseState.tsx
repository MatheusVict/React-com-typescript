import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { UserLogContext } from "../app/context/Userlog";
import { ButtonLogin } from "./ButtonLogin";
import { InputLgin } from "./inputLogin";



export const UseState = () => {
    const refContainer = useRef<HTMLInputElement>(null); // Ele inicia como nulo, mas alguma coisa pode atribuir um valor de um input html pra ele

    useEffect(() => { //Carrega só quando o componente renderizar de primeira
        if (window.confirm('Homem ou mulher?')) { //useEffect é bom pra chamada de API pq só faz uma vez
            console.log('interessante');
        } else {
            console.log('HMMMMMM');
        }
    
    }, []);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    useEffect(() => {
        console.log(email);
    }, [email, senha]); // Dependencias dizem q ele vai ser re renderizado sempre q esses valores forem alterados


    const Btn = useCallback(() => {
        console.log(email);
        console.log(senha);
        if (refContainer.current != null) {

            refContainer.current.focus()
        }
    }, [email, senha]);

    const tamanhoDoEmail = useMemo(() => {
        console.log('foi');
        return email.length;
    }, [email.length]);

    const {NomeUser, Logout} = useContext(UserLogContext); // Pode desestruturar igual o props

    return(
        <div>
            <form >
                <p>Você digitou {tamanhoDoEmail} letras</p>
                <InputLgin 
                label="Email" 
                type="text" 
                value={email} onChange={newvalue => setEmail(newvalue)}
                onPressEnter={() => refContainer.current?.focus()}
                /><br/>
                <InputLgin
                label="Senha"
                type="password"
                ref={refContainer}
                value={senha}
                onChange={newvalue => setSenha(newvalue)}
                /><br/>
                
                {/*<label>
                    <span>
                        Email
                    </span>
                    <input type="text" 
                    onKeyDown={e => e.key === 'Enter' ? refContainer.current?.focus() : undefined} // se eu teclar enter o input de senha é focado(Com operador ternario)
                    onChange={e => setEmail(e.target.value)} 
                    />
                    </label>*/}
                    {/*<label>
                    <span>
                        Senha
                    </span>
                    <input type="password" ref={refContainer} onChange={e => setSenha(e.target.value)}/>
                </label>*/}
                {/*<button type="button" onClick={Btn}>Vai</button>*/}
                <ButtonLogin type="button" onClick={Btn}>
                    children
                </ButtonLogin>
                <ButtonLogin type="button" onClick={Btn}>
                    Entrar
                </ButtonLogin>
                <button onClick={Logout}>Logout</button>
                <p>{NomeUser}</p>
                <p>Seu email é {email}</p>
                <p>Sua senha é {senha}</p>
            </form>
        </div>
    )
}