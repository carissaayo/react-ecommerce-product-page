import React, { Component } from 'react';
import "./ProductPage.css";
const ProductPage= ()=>{
    return (
      <>
        <main className="product__grid-con">
          <section className="product__image-con">
            <div className="main-image-con">
              <img src="/images/image-product-1.jpg" alt="product" />
            </div>
            <div className="thumbnails-con">
              <div className="image-con">
                <img
                  src="/images/image-product-1-thumbnail.jpg"
                  alt="thumbnail"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="image-con">
                <img
                  src="/images/image-product-2-thumbnail.jpg"
                  alt="thumbnail"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="image-con">
                <img
                  src="/images/image-product-3-thumbnail.jpg"
                  alt="thumbnail"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="image-con">
                <img
                  src="/images/image-product-4-thumbnail.jpg"
                  alt="thumbnail"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </section>
          <section className="product__text-con">
            <h4 className="product__company">SNEAKERS COMPANY</h4>
            <h1 className="product__name">Fall Limited Edition Sneakers</h1>
            <p className="product__desc">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer
            </p>
            <div className="product__price-con">
              <h2 className="product__new-price">
                $125.00 <span className="product__percent"> 50%</span>
              </h2>

              <h3 className="product__old-price">$250.00</h3>
            </div>

            <div className="product__button-con">
              <div className="product__quality">
                <button className="product__decrease-btn">
                  <img src="/images/icon-minus.svg" alt="minus icon" />
                </button>
                <h4>3</h4>
                <button className="product__increase-btn">
                  <img src="/images/icon-plus.svg" alt="plus icon" />
                </button>
              </div>
              <button className="product__cart-btn">
                <img src="/images/icon-cart.svg" alt="cart icon" />
                <span>Add to cart</span>
              </button>
            </div>
          </section>
        </main>
        
      </>
    );
}

export default ProductPage;