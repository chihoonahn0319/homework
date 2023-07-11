import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <div>로고</div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </header>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품{id}
          </div>
          <div>
            <h3>가격: ~~~~</h3>
            <h3>좋아요: ~~~~</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </select>
          </div>
        </div>
      </div>
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "fixed",
          bottom: "0",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </>
  );
}
