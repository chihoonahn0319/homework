import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Products() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const products = location.state ? location.state.products : [];

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
          {products.length > 0 ? (
            products.map((product, index) => (
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
