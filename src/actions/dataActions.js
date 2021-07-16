export const loadAction = (isLoading) => {
    return {
        type: 'LOADING',
        payload: isLoading,
    }
}

export const loadDataAction = (data) => {
    return {
        type: 'LOADDATA',
        payload: data,
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