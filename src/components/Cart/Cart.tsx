import React from "react";

interface CartProps {
  items: Array<{ name: string; price: number }>;
  showPopup: boolean;
}

const Cart: React.FC<CartProps> = ({ items, showPopup }) => {
  return (
    <>
      {showPopup && (
        <div className="fixed top-10 left-10 bg-yellow-600 text-white p-4 rounded-lg shadow-lg w-64 z-50">
          <h4 className="text-xl font-semibold mb-2">Item Adicionado ao Carrinho!</h4>
          <ul className="list-none p-0">
            {items.map((item, index) => (
              <li key={index} className="text-sm mb-2">
                <span>{item.name}</span> - <span>${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cart;
