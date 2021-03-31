import React,{useState} from 'react'
import Cart from './Cart'

export const InfoContext=React.createContext()

export const InfoProvider=(props)=>{
const[cart,SetCart]=useState([])
    return(
       <InfoContext.Provider value={[cart,SetCart]}>
            {props.children}
       </InfoContext.Provider>
    )
}