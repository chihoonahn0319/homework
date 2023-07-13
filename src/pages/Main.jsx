import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate(); //네비게이트 함수가져옴.

  //useState 훅을 사용하여 products 상태를 초기화!
  //상품을 나타내는 객체의 배열이고
  //각 객체에는 name, price, options, likes와 같은 속성이 있당
  const [products] = useState([
    {
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    {
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ]);

  return (
    <>
      {/* Header */}

      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB", // 케러셀 배경색
            color: "white", // 케러셀 텍스트 색
            height: "300px", // 케러셀 높이
            lineHeight: "300px", // 케러셀 텍스트 수직 가운데 정렬을 위한 줄 높이
            textAlign: "center", // 케러셀 텍스트 가운데 정렬
            fontSize: "24px", // 케러셀 텍스트 크기
          }}
        >
          케러셀
        </section>
        <section
          style={{
            marginTop: "56px", // 여름 추천템 섹션과의 위쪽 여백
            textAlign: "center", // 텍스트 가운데 정렬
          }}
        >
          <h2
            onClick={() => {
              alert("이동할건가?"); // 클릭 시 알림창 출력
              navigate("/products"); // "/products" 경로로 이동
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          <Link to="/products">더보기</Link>{" "}
          {/* "/products" 페이지로 이동하는 링크 */}
          <div
            style={{
              display: "flex", // 내부 요소를 가로로 정렬
              justifyContent: "center", // 내부 요소를 가로로 가운데 정렬
              gap: "24px", // 내부 요소 사이의 간격
            }}
          >
            {/* products.map() 메서드를 사용하여 products 배열을 순회. */}
            {/*각 product 객체에 대해 다음 내용을 담은 <div> 요소를 렌더링!! */}
            {products.map((product, index) => (
              <div
                key={index} // 고유한 키 prop을 설정
                style={{
                  width: "200px", // 상품 카드 너비
                  height: "240px", // 상품 카드 높이
                  backgroundColor: "#068FFF", // 상품 카드 배경색
                  display: "flex", // 내부 요소를 가로로 정렬
                  flexDirection: "column", // 내부 요소를 세로로 정렬
                  justifyContent: "center", // 내부 요소를 세로로 가운데 정렬
                  alignItems: "center", // 내부 요소를 가로로 가운데 정렬
                  padding: "16px", // 상품 카드 내부 여백
                  borderRadius: "4px", // 상품 카드 테두리 모서리 반경
                  color: "white", // 상품 카드 텍스트 색상
                  fontSize: "16px", // 상품 카드 텍스트 크기
                }}
              >
                <div>{product.name}</div>
                {/* <div> 요소 내부에는 product.name을 출력하여 상품명을 표시 */}
                <div>가격: {product.price}</div>
                {/* <div> 요소 내부에는 product.name을 출력하여 가격을 표시 */}
              </div>
            ))}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px", // 추가적인 데이터 섹션과의 위쪽 여백
            textAlign: "center", // 텍스트 가운데 정렬
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex", // 내부 요소를 가로로 정렬
              justifyContent: "center", // 내부 요소를 가로로 가운데 정렬
              gap: "24px", // 내부 요소 사이의 간격
            }}
          >
            <div
              style={{
                width: "200px", // 상품 카드 너비
                height: "240px", // 상품 카드 높이
                backgroundColor: "#EEEEEE", // 상품 카드 배경색
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px", // 상품 카드 너비
                height: "240px", // 상품 카드 높이
                backgroundColor: "#EEEEEE", // 상품 카드 배경색
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px", // 상품 카드 너비
                height: "240px", // 상품 카드 높이
                backgroundColor: "#EEEEEE", // 상품 카드 배경색
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
    </>
  );
}
