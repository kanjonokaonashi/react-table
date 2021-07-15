export const loadAction = (isLoading) => {
    return {
        type: 'LOADING',
        payload: isLoading,
    }
}

export const addAction = (item) => {
    return {
        type: 'ADD',
        payload: item,
    }
}

export const editAction = (item) => {
    return {
        type: 'EDIT',
        payload: item,
    }
}

export const removeAction = (item) => {
    return {
        type: 'REMOVE',
        payload: item,
    }
}