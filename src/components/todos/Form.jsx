import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import shortid from "shortid";
import { flushSync } from "react-dom";

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContnet] = useState("");
  const dispatch = useDispatch();

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: shortid.generate(),
      title,
      body: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContnet("");
  };
  return (
    <form onSubmit={handleTodoSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "20px 10px",
          borderBottom: "1px solid lightblue",
        }}
      >
        <div>
          <label htmlFor="todoTitle">제목</label>
          <input
            type="text"
            id="todoTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="todoContent">내용</label>
          <input
            type="text"
            id="todoContent"
            value={content}
            onChange={(e) => setContnet(e.target.value)}
          />
        </div>
        <button type="submit">추가</button>
      </div>
    </form>
  );
}
