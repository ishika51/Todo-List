export const ADD = (data) =>
{
    return {
        type : 'ADD_TODO',
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
     }
}

export const clear = () => {
    return {
        type: 'CLEAR_ALL'
    }
}