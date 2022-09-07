export class ErrorExeption extends Error{

    public readonly message: string = '';

    constructor(msg: string) {
        
        super();
        this.message = msg
    }
}