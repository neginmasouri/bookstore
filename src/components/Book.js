import React,{useContext} from 'react'
import {InfoContext} from './InfoContext'
import './Book.css'

const Book=({name,author,price,image})=>{
  const [cart,setCart]=useContext(InfoContext)
  const addClick=()=>{
    const items={name,author,price,image}
    setCart(itemState=>[...itemState,items])
  }
    return(
      <div className="book">
          <img src={image} className="img" alt="nothing" />
          <div className="info">
          <h3>{name}</h3>
          <h4>{author}</h4>
          <h5>${price}</h5>
          </div>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <button onClick={addClick}>Buy</button>
      </div>
    )
}
export default  Book