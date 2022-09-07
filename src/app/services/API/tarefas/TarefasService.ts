import { api } from "../ApiCOnfig";
import { ErrorExeption } from "../ErrorException";

interface IItensdaLista {
    id: number;
    title: string;
    isComplete: boolean;
}

const getAll = async (): Promise<IItensdaLista[] | ErrorExeption> => {
try {
    const { data } = await api().get('/tarefas');
    return data;

}catch(error: any) {
    return new ErrorExeption(error.msg || 'ERRO pai');
}


};

const getById = async (id: number): Promise<IItensdaLista | ErrorExeption> => {
try {
    const { data } = await api().get(`/tarefas/${id}`)
    return data;
} catch(error: any) {
    return new ErrorExeption(error.msg || 'Erro')
}
};

const create = async (dataCreate: Omit<IItensdaLista, 'id'>): Promise<IItensdaLista | ErrorExeption> => {
try {
    const { data } = await api().post('/tarefas', dataCreate)
    return data;
} catch(error: any) {
    return new ErrorExeption(error.msg || 'ERRO')
}
};

const deleteById = () => {

};

const updateById = () => {

};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};