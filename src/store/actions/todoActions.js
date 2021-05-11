export const markComplete = (id) => {
    const markCompleteAction = dispatch => {
        // console.log(id);
        dispatch({
            type: 'MARK_COMPLETE',
            payload: id
        })
    }

    return markCompleteAction
}

export const addTodo = (title) => {
    const 
}