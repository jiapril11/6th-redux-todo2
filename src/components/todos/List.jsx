import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateTodo, deleteTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

export default function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>TODO</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{ border: "1px solid black", margin: 10, padding: 10 }}
              >
                <Link to={`/detail/${todo.id}`}>자세히 보기</Link>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  삭제
                </button>
                <button onClick={() => dispatch(changeStateTodo(todo.id))}>
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </div>
            );
          })}
      </div>
      <hr />
      <div>
        <h2>DONE</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{ border: "1px solid black", margin: 10, padding: 10 }}
              >
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  삭제
                </button>
                <button onClick={() => dispatch(changeStateTodo(todo.id))}>
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
