import React from "react";
import { BookShop } from "./components/BookShop";
import Cart from "./components/Cart";
import { InfoProvider } from "./components/InfoContext";
import './App.css'
const App = () => {
  return (
    <InfoProvider>
      <div>
        <h2>Online Bookstore</h2>
        <Cart />
        <BookShop />
 
    </InfoProvider>
  );
};
export default App;
