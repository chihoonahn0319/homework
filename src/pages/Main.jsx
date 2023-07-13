import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main({ products }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products", { state: { products: products } });
  };

  return (
    <>
      {/* Header */}
      <header>Header</header>

      {/* Main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>

        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              alert("이동할건가?");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          <button onClick={handleClick}>더보기</button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                <div>{product.name}</div>
                <div>가격: {product.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>Footer</footer>
    </>
  );
}
