import {
  GET_TODOS,
  TOGGLE_TODO,
  DELETE_TODO,
  ADD_TODO,
  GET_TODO,
  UPDATE_TODO
} from "../actions/types";

const initialState = {
  todos: [],
  todo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state
      };
    case GET_TODO:
      return {
        ...state,
        todo: state.todos.filter(todo => todo.id === action.payload)[0]
      };
    case TOGGLE_TODO:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (action.payload === todo.id) {
              todo.isCompleted = !todo.isCompleted;
            }
            return todo;
          })
        ]
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => action.payload !== todo.id)]
      };
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        )
      };

    default:
      return state;
  }
}
