import React from 'react';
import { CartState } from '../Context';

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>$ {prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
