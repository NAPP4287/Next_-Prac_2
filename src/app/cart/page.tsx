import { If_Dummy_Cart } from "@/interface/interfaceDummy";

export default function Cart() {
  const dummyList: Array<If_Dummy_Cart> = [
    { name: "상품명", price: "$40", count: 1 },
    { name: "상품명", price: "$40", count: 2 },
    { name: "상품명", price: "$40", count: 1 },
  ];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {dummyList.map((el, idx) => (
        <div key={idx} className="cart-item">
          <p>{el.name}</p>
          <p>{el.price}</p>
          <p>{String(el.count)}개</p>
        </div>
      ))}
    </div>
  );
}
