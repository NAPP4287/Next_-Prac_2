import Image from "next/image";
import { If_Dummy_List } from "@/interface/interfaceDummy";
import Tomato from "/public/food_tomato.png";
import Pasta from "/public/food_pasta.png";
import Coconut from "/public/food_coconut.png";

export default function List() {
  const dummyList: Array<If_Dummy_List> = [
    { name: "Tomatos", img: Tomato },
    { name: "Pasta", img: Pasta },
    { name: "Coconut", img: Coconut },
  ];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {dummyList.map((el, idx) => (
        <div key={idx} className="food">
          <h4>{el.name} $40</h4>
          <Image className="food-img" src={el.img} alt="" />
        </div>
      ))}
    </div>
  );
}
