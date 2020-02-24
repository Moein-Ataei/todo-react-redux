import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodos, toggleTodo, deleteTodo } from "../actions/todoActions";
import { Wrapper, Status } from "../styledcomponents/styles";
import { VisibilityFilter } from "../actions/types";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.isCompleted);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.isCompleted);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  // Toggle Complete
  markComplete = (id, e) => this.props.toggleTodo(id);

  // Delete Todo
  deleteTodo = (id, e) => {
    this.props.deleteTodo(id);
  };

  render() {
    const { todos, visibilityFilter } = this.props;
    let statusFilter;
    if (visibilityFilter === "SHOW_ALL") {
      statusFilter = <Status>All Todos</Status>;
    } else if (visibilityFilter === "SHOW_COMPLETED") {
      statusFilter = <Status>Completed Todos</Status>;
    } else {
      statusFilter = <Status>Active Todos</Status>;
    }

    if (todos.length > 0) {
      return (
        <div>
          {statusFilter}
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              markComplete={this.markComplete}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
      );
    } else {
      return <Wrapper emptyList>No Task To Do!</Wrapper>;
    }
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter
});

export default connect(mapStateToProps, {
  getTodos,
  toggleTodo,
  deleteTodo
})(Todos);
