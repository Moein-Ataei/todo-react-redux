import {
  GET_TODOS,
  TOGGLE_TODO,
  DELETE_TODO,
  ADD_TODO,
  GET_TODO,
  UPDATE_TODO,
  SET_VISIBILITY_FILTER
} from "./types";

export const getTodos = () => {
  return {
    type: GET_TODOS
  };
};

export const getTodo = id => {
  return {
    type: GET_TODO,
    payload: id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
};

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
