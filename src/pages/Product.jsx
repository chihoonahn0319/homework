import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { 장바구니추가, 장바구니삭제 } from "..";

export default function Product() {
  const { id } = useParams();
  const products = useSelector((state) => state.상품들);
  const product = products[id - 1];
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [cart, setCart] = useState([]);

  const 사이즈선택버튼 = (e) => {
    setSelectedSize(e.target.value);
  };

  const 수량선택함수 = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (!selectedSize || !quantity) {
      alert("사이즈와 수량을 선택해주세요.");
      return;
    }
    //selectedSize(사이즈) 나 quantity(수량)이 비어있으면 alert

    const item = {
      ...product,
      size: selectedSize,
      quantity: quantity,
    };

    dispatch(장바구니추가(item));
    alert("장바구니에 추가되었습니다.");

    setCart((prevCart) => [...prevCart, item]);
  };

  const 장바구니수량추가 = (index) => {
    const updatedCart = [...cart];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity + 1,
    };
    setCart(updatedCart);
  };
  //배열의 내용을 복사하여 updatedCart 변수에 할당한다
  //새로운 배열을 생성하는 이유는 불변성을 유지하기위행
  //quantity 속성을 1 증가시킨 새로운 객체로 업데이트

  const 장바구니수량감소 = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1,
      };
      setCart(updatedCart);
    }
  };
  //배열의 내용을 복사하여 updatedCart 변수에 할당한다
  //새로운 배열을 생성하는 이유는 불변성을 유지하기위행
  //quantity 속성을 1 감소시킨 새로운 객체로 업데이트

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, itemIndex) => itemIndex !== index);
    setCart(updatedCart);
    alert("장바구니에서 삭제되었습니다.");
  };

  //장바구니삭제 액션과 함께 선택된 항목의 인덱스를
  //dispatch 함수를 사용하여 Redux store에 전달

  useEffect(() => {
    const updatedPrice = product.price * quantity;
    setTotalPrice(updatedPrice);
  }, [product.price, quantity]);
  //총가격 계산
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
              onChange={사이즈선택버튼}
              value={selectedSize}
            >
              <option value="">-- 사이즈 선택 --</option>
              {product.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={수량선택함수}
              style={{ width: "60px", marginLeft: "10px" }}
            />
            <button onClick={handleAddToCart}>장바구니 추가하기</button>
          </div>
        </div>
        <h3>총 금액: {totalPrice} 원</h3>
        <h1>장바구니</h1>
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ border: "1px solid black" }}>
              <h3>{item.name}</h3>
              <h3>가격: {item.price} 원</h3>
              <h3>사이즈: {item.size}</h3>
              <h3>수량: {item.quantity}</h3>
              <div>
                <button onClick={() => 장바구니수량감소(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => 장바구니수량추가(index)}>+</button>
              </div>
              <h3>총 금액: {item.price * item.quantity} 원</h3>
              <button onClick={() => handleRemoveFromCart(index)}>
                장바구니에서 삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
