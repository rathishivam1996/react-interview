import React, { useState } from 'react';
import './SwapOddsApp.css';
import { cart1, cart2 } from './data';

function SwapOddsApp() {
  const [leftCart, setLeftCart] = useState(cart1);
  const [rightCart, setRightCart] = useState(cart2);

  const handleSwap = () => {
    const updatedLeftCart = leftCart.map((item, index) => {
      if (index % 2 === 1) {
        return rightCart[index];
      }
      return leftCart[index];
    });

    const updatedRightCart = rightCart.map((item, index) => {
      if (index % 2 === 1) {
        return leftCart[index];
      }
      return rightCart[index];
    });

    setLeftCart(updatedLeftCart);
    setRightCart(updatedRightCart);
  };

  return (
    <div className="container">
      <div className="cart-container">
        <h1>Cart 1</h1>
        <ol className="ol-container">
          {leftCart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <button type="button" onClick={handleSwap}>
        Swap Odds
      </button>
      <div className="cart-container">
        <h1>Cart 1</h1>
        <ol className="ol-container">
          {rightCart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SwapOddsApp;
