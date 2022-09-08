import { api } from "../ApiCOnfig";
import { ErrorExeption } from "../ErrorException";

export interface IItensdaLista {
    id: number;
    title: string;
    isComplete: boolean;
}

const getAll = async (): Promise<IItensdaLista[] | ErrorExeption> => {
try {
    const { data } = await api().get('/todo');
    return data;

}catch(error: any) {
    return new ErrorExeption(error.msg || 'ERRO ao buscar todos');
}


};

const getById = async (id: number): Promise<IItensdaLista | ErrorExeption> => {
try {
    const { data } = await api().get(`/todo${id}`)
    return data;
} catch(error: any) {
    return new ErrorExeption(error.msg || 'Erro ao buscar por id')
}
};

const create = async (dataCreate: Omit<IItensdaLista, 'id'>): Promise<IItensdaLista | ErrorExeption> => {
try {
    const { data } = await api().post('/todo', dataCreate)
    return data;
} catch(error: any) {
    return new ErrorExeption(error.msg || 'ERRO ao criar')
}
};

const deleteById = async (id: number): Promise<undefined | ErrorExeption> => {
try {
    await api().delete(`/todo/${id}`)
    return undefined;
} catch(error: any) {
    return new ErrorExeption(error.msg || 'ERROR ao deletar') 
}
};

const updateById = async (id: number, dataCreate: IItensdaLista): Promise<IItensdaLista | ErrorExeption> => {
try {
    const { data } = await api().put(`/todo/${id}`, dataCreate)
    return data;
} catch (error:any) {
    return new ErrorExeption(error.msg || 'ERRO ao atualizar')
}
};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};