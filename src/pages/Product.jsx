import React from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  const { id } = useParams();
  const product = products[id - 1];

  return (
    <>
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
            {product.name}
          </div>
          <div>
            <h3>가격: {product.price}</h3>
            <h3>좋아요: {product.likes}</h3>
            <h3>구매 옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              {product.options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
