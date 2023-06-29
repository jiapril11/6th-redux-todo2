import shortid from "shortid";

const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const CHANGE_STATE_TODO = "todos/CHANGE_STATE_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const changeStateTodo = (id) => {
  return {
    type: CHANGE_STATE_TODO,
    payload: id,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "리액트1",
    body: "리액트 공부하기1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트2",
    body: "리액트 공부하기2",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트3",
    body: "리액트 공부하기3",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트4",
    body: "리액트 공부하기4",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_STATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
