import React from 'react'
import Book from './Book'
import data from './data.json'
import './BookShop.css'
export const BookShop=()=>{
    return(
        <div className="bookstore">
           {
               data.map((item)=>{
                   return(
                       <Book
                       image={item.image}
                       name={item.name}
                        price={item.price}
                        author={item.author}
                        key={item.id}
                        />
                   )
               })
           }
        </div>
    )
}