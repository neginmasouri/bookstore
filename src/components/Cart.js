import React,{useContext} from "react";
import {InfoContext} from './InfoContext'
import './Cart.css'
const Cart = () => {
const [cart,setCart]=useContext(InfoContext)
const totalPrice=cart.reduce((acc,curr)=>acc + curr.price,0)
const deleteHandler=()=>{
  return setCart([])
}
  return (
      <div className="cart">
        <h5>Number of items : {cart.length}</h5>
        <h5><span><i class="fa fa-shopping-basket"> ${totalPrice}</i></span></h5>
        <button onClick={deleteHandler} className="delete-btn">Delete</button>
      </div>
  );
};
export default Cart;
