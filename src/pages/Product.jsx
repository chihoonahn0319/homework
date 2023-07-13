import React from "react";
import { useParams } from "react-router-dom";
//React와 React Router에서 useParams를 가져옴

//Product라는 이름의 함수형 컴포넌트를 정의
export default function Product() {
  // useParams 훅을 사용하여 URL 매개변수(id)를 가져옵
  const { id } = useParams();

  //products라는 배열에 상품 데이터를 저장
  const products = [
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
  ];

  //id를 사용하여 products 배열에서 해당 상품을 찾아 product 변수에 할당
  //JavaScript 배열의 인덱스는 0부터 시작하니까 id 값에서 1을 빼준당
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
            {/* <div>는 product.name이 표시되는 상품 카드 */}
            <h3>좋아요: {product.likes}</h3>
            {/* <div>는 product.likes가 표시되는 상품 카드 */}
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              {product.options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
              {/* product.options.map() 메서드를 사용하여 구매 옵션을 반복하며
               <option> 요소를 렌더링한다! */}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
