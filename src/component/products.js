import React, { useState,useEffect } from "react";
import DataProducts from "./data";

import { CartProvider, useCart } from "react-use-cart";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom';
function Products()  {
  const { addItem } = useCart();
 
    const items = DataProducts();
    //const [currentPageData, setCurrentPageData] = useState(items);
return (
      
          <div>
              <div className="columns-3 ...">
            { items.map((product) => (
              <div className="item"  key={product.id}>
                <img className="w-full aspect-video ..." src={product.src} />
                     <Link to={`/product/${product.alias}`} >  To</Link> 
                
                <h3>Item #{product.title}</h3>
                 </div>
            ))}
      </div>
       
          </div>
      
        );

            };




function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    currentPageData,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {DataProducts().map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.title} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}







export default Products;