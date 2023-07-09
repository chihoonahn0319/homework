import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [할일목록, set할일목록] = useState([
    { id: nanoid(), content: "리액트 공부하기1", 좋아요: 0 },
    { id: nanoid(), content: "리액트 공부하기2", 좋아요: 0 },
    { id: nanoid(), content: "리액트 공부하기3", 좋아요: 0 },
    { id: nanoid(), content: "리액트 공부하기4", 좋아요: 0 },
  ]);
  const [입력값, 입력값변경] = useState("");

  const 증가시키기 = (id) => {
    set할일목록((이전할일목록) =>
      이전할일목록.map((할일) =>
        할일.id === id ? { ...할일, 좋아요: 할일.좋아요 + 1 } : 할일
      )
    );
  };

  const 삭제하기 = (id) => {
    set할일목록(할일목록.filter((할일) => 할일.id !== id));
  };

  return (
    <>
      <input
        value={입력값}
        onChange={(e) => {
          return 입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          return set할일목록([
            ...할일목록,
            { id: nanoid(), content: 입력값, 좋아요: 0 },
          ]);
        }}
      >
        추가
      </button>

      {할일목록.map((todo, i) => {
        return (
          <div key={todo.id}>
            <span>{todo.content}</span>
            <button
              onClick={() => {
                증가시키기(todo.id);
              }}
            >
              좋아요 {todo.좋아요}
            </button>
            <button
              onClick={() => {
                삭제하기(todo.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
