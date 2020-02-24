import React, { Component } from "react";
import PropTypes from "prop-types";
import { AddInput, Button } from "../styledcomponents/styles";
import { connect } from "react-redux";
import { getTodo, updateTodo } from "../actions/todoActions";

class EditTodo extends Component {
  state = {
    title: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTodo(id);
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    const { title } = nextProps.todo;
    this.setState({ title });
  }

  onChange = e => this.setState({ title: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    // alert(title);
    const { id } = this.props.match.params;
    const updTodo = {
      id,
      title,
      isCompleted: false
    };

    this.props.updateTodo(updTodo);

    this.props.history.push("/");
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Edit Todo</legend>
          <AddInput
            type="text"
            name="title"
            required
            value={title}
            onChange={this.onChange}
          />
          <Button type="submit" value="Add" submit>
            Update
          </Button>
        </fieldset>
      </form>
    );
  }
}

EditTodo.propTypes = {
  todo: PropTypes.object,
  getTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todos.todo
});

export default connect(mapStateToProps, { getTodo, updateTodo })(EditTodo);
