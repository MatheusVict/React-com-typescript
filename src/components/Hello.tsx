interface User {
    name: string;
    idade: number;
}




export const Hello = ({name, idade}: User) =>{
    return(
        <div>
            <p>Olá {name}</p>
            <p>Você tem {idade} anos</p>
        </div>
    )
}