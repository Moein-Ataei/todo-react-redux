import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { AddInput, Button } from "../styledcomponents/styles";
import { addTodo } from "../actions/todoActions";
import uuid from "uuid";

class AddTodo extends Component {
  state = {
    title: "",
    isCompleted: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Add newTodo
  onSubmit = e => {
    e.preventDefault();

    const { title, isCompleted } = this.state;

    const newTodo = {
      id: uuid(),
      title,
      isCompleted
    };

    this.props.addTodo(newTodo);

    // clear input field
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Add Todo</legend>
          <AddInput
            type="text"
            name="title"
            required
            placeholder="Add to List..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <Button type="submit" value="Add" submit>
            Add
          </Button>
        </fieldset>
      </form>
    );
  }
}

AddTodo.propType = {
  addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(AddTodo);
