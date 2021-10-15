import React from 'react';
import  Header from "./Header";
import ProductPage from "./ProductPage";
import "./Container.css"

const Container = ()=>{
    return (
      <div className="container">
        <Header />
        <ProductPage />
      </div>
    );

}
export default Container
