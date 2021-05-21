import axios from "axios";


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})
export const  Api = {
    postDataRegister(email: string, password: string)  {
        return instance.post('auth/register', {email, password})
            .then(response =>   response.data)
    },
    getPacks(page: number) {
        return instance.get<GetCardPackResponseType>(`cards/pack?page=10&count=${page}`)
            .then(response =>   response.data)
    },
    postNewPack(title: string) {
        return instance.post<PostOrDeleteResponseType>(`cards/pack`, {cardsPack: {name: title}})
            .then(response =>   response.data)
    },
    deletePack(id: string) {
        let promise =  instance.delete<PostOrDeleteResponseType>(`cards/pack?id=${id}`)
        return promise
            .then(response =>   response.data)
    },
        getCards(packId: string) {
            let promise =  instance.get(`cards/card?&cardsPack_id=${packId}&pageCount=10`);
            return promise
                .then(response => response.data)
    },
    postNewCard(question: string, answer: string) {
        return instance.post(`cards/card`, {addCard: {question: question, answer: answer}})
            .then(response =>   response.data)
    },
    me() {
        const promise = instance.get('auth/me');
        return promise;
    },
}

type GetCardPackResponseType = {
    // pageCount: number
    // page: number
    [key: string] : Array<CardPackType>
}

type CardPackType = {
    "_id": string
    "user_id": string
    "user_name": string
    "private": boolean
    "name": string
    "path": string
    "grade": number
    "shots": number
    "cardsCount": number
    "type": string
    "rating": number
    "created": string
    "updated": string
    "more_id": string
    "__v": number
}

type PostOrDeleteResponseType  = {
    cardPacks: Array<CardPackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}


