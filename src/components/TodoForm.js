import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from '../store/actions/todoActions'
import {v4 as uuidv4} from 'uuid';

const TodoForm = ({addTodo}) => {

    const [title, setTitle] = useState('');

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();

        if(title !== ''){
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false
            }
            addTodo(newTodo);
            setTitle('');
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" name="title" onChange={onTitleChange} placeholder="Enter new todo" value={title} />   
            <input type="submit" value="Add"/> 
        </form>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {addTodo})(TodoForm)
