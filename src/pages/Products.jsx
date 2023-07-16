import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 리셋하자이, 정렬하자이 } from "..";

export default function Products() {
  const 상품들 = useSelector((state) => state.상품들);
  const dispatch = useDispatch();

  return (
    <>
      {/* Header */}

      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            dispatch(정렬하자이());
          }}
        >
          가격순으로 정렬해랏
        </button>
        <button
          onClick={() => {
            dispatch(리셋하자이());
          }}
        >
          리셋
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {상품들.length > 0 ? (
            상품들.map((product, index) => (
              <Link to={`/products/${index + 1}`} key={index}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  {product.name}
                  <div>가격: {product.price}</div>
                </div>
              </Link>
            ))
          ) : (
            <div>상품이 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
}
