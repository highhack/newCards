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
    getPacks() {
        return instance.get<GetCardPackResponseType>(`cards/pack?pageCount=10`)
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
    }
}

type GetCardPackResponseType = {
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


