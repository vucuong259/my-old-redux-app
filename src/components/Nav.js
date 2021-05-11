import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Nav = ({todos}) => {
    return (
        <div className="navbar">
            <h1>My app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Totals todo: {todos.length}</li>
            </ul>
        </div>
    )
}

Nav.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps,{})(Nav)
