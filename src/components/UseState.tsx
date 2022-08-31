import { useState } from "react"

export const UseState = () => {
    const [email, setEmail] = useState('')
    const Btn = () => {

    }

    return(
        <div>
            <form>
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