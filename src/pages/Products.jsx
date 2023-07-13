import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  const [SearchParams, setSearchParams] = useSearchParams();

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
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순으로 정렬해랏
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Link to="/products/1">
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              멋진 바지
              <div>20,000</div>
            </div>
          </Link>
          <Link to="/products/2">
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              멋진 셔츠
              <div>10,000</div>
            </div>
          </Link>
          <Link to="/products/3">
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              멋진 신발
              <div>30,000</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
