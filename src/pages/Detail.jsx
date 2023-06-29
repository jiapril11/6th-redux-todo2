import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import shortid from "shortid";
import { addComment } from "../redux/modules/comments";

export default function Detail() {
  const params = useParams();
  const todos = useSelector((state) => state.todos);
  const matchedItem = todos.filter((todo) => todo.id === params.id)[0];

  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [writer, setWriter] = useState("");
  const [comment, setComment] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSumitComment = (e) => {
    e.preventDefault();
    const newComment = {
      id: shortid.generate(),
      todoId: params.id,
      writer,
      comment,
      pwd,
    };
    dispatch(addComment(newComment));
    setWriter("");
    setComment("");
    setPwd("");
  };

  const handleDeleteComment = (password) => {
    const getPwd = prompt("비번?");
    if (getPwd === password) {
      console.log("비번동일");
    }
  };
  return (
    <div>
      <h2>Detail</h2>
      <div>
        <div>id: {matchedItem.id}</div>
        <div>title: {matchedItem.title}</div>
        <div>body: {matchedItem.body}</div>
        <div>isDone: {matchedItem.isDone.toString()}</div>
        <Link to="/">홈으로</Link>
      </div>
      <div>
        <h3>Comments</h3>
        <form onSubmit={handleSumitComment}>
          <div>
            <div>
              <label htmlFor="">작성자</label>
              <input
                type="text"
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">댓글</label>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">비밀번호</label>
              <input
                type="text"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <button type="submit">작성</button>
          </div>
        </form>
        <div>댓글 내용</div>
        {comments.map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid black", padding: 10, margin: 10 }}
            >
              <p>
                <span>작성자: </span>
                {item.writer}
              </p>
              <p>{item.comment}</p>
              <button onClick={() => handleDeleteComment(item.pwd)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
