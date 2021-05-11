const initialState = {
    todos: [
        { id: 1, title: 'Viec 1', completed: false },
        { id: 2, title: 'Viec 2', completed: false },
        { id: 3, title: 'Viec 3', completed: false },
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MARK_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload )
                        todo.completed = !todo.completed
                    return todo
                })
            }
        case 'ADD_TODO':
            return {
                ...state,
                to
            }
        default:
            return state
    }


}

export default todoReducer