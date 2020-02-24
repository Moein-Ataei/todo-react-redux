import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledTodo, Button } from "../styledcomponents/styles";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <StyledTodo completed={todo.isCompleted}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, todo.id)}
          />
          {todo.title}
          <Button
            delete
            title="Delete"
            onClick={this.props.deleteTodo.bind(this, todo.id)}
          >
            <i className="fas fa-times"></i>
          </Button>
          <Link to={`/edit/${todo.id}`}>
            <Button edit title="Edit">
              <i className="fas fa-pencil-alt"></i>
            </Button>
          </Link>
        </StyledTodo>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
