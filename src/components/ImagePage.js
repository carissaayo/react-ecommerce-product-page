  import React, { Component } from 'react';
  import "./ImagePage.css"

  const ImagePage=({openImage,setOpenImage})=>{
      return (
        <section
          className={
            openImage ? "image-page-con show-image-con" : "image-page-con"
          }
        >
          <button className="close-btn" onClick={() => setOpenImage(false)}>
            <img src="/images/icon-close.svg" alt="" />
          </button>
          <div className="main-image-con">
            <img src="/images/image-product-1.jpg" alt="product" />
            <button className="prev-btn">
              <img src="/images/icon-previous.svg" alt="previous" />
            </button>
            <button className="next-btn">
              <img src="/images/icon-next.svg" alt="next" />
            </button>
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
      );
  }
  export default ImagePage;