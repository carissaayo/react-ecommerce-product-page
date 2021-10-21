import  { useEffect } from 'react';
import "./ProductPage.css";
const ProductPage = ({
  setAmount,
  amount,
  setOpenImage,
  addProduct,
  setTotal,
  index,
  setIndex,
  products,
}) => {

  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    if (amount <= 0) return;
    setAmount(amount - 1);
  };
  const addToCart = () => {
    setTotal((prevTotal) => (prevTotal += amount));
    setAmount(0)
  };
  useEffect(() => {
    const lastIndex = products.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [products, index]);
  return (
    <>
      <main className="product__grid-con">
        <section className="product__image-con">
          <div className="main-image-con">
            {products.map((product, imgIndex) => {
              const { name, src, id } = product;
              let position = "nextImage";
              if (imgIndex === index) {
                position = "activeImage";
              }
              if (
                imgIndex === index - 1 ||
                (index === 0 && imgIndex === products.length - 1)
              ) {
                position = "lastImage";
              }

              return (
                <img
                  src={src}
                  alt={name}
                  key={id}
                  className={position}
                  onClick={() => setOpenImage(true)}
                />
              );
            })}
            <button className="prev-btn" onClick={() => setIndex(index - 1)}>
              <img src="/images/icon-previous.svg" alt="previous" />
            </button>
            <button className="next-btn" onClick={() => setIndex(index + 1)}>
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
        <section className="product__text-con">
          <h4 className="product__company">SNEAKERS COMPANY</h4>
          <h1 className="product__name">Fall Limited Edition Sneakers</h1>
          <p className="product__desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer
          </p>
          <div className="product__price-con">
            <h2 className="product__new-price">
              $125.00 <span className="product__percent"> 50%</span>
            </h2>

            <h3 className="product__old-price">$250.00</h3>
          </div>

          <div className="product__button-con">
            <div className="product__quality">
              <button
                className="product__decrease-btn"
                onClick={decreaseAmount}
              >
                <img src="/images/icon-minus.svg" alt="minus icon" />
              </button>
              <h4>{amount}</h4>
              <button
                className="product__increase-btn"
                onClick={increaseAmount}
              >
                <img src="/images/icon-plus.svg" alt="plus icon" />
              </button>
            </div>
            <button
              onClick={addToCart}
              className={
                addProduct ? "product__cart-btn added" : "product__cart-btn"
              }
            >
              <img src="/images/icon-cart.svg" alt="cart icon" />
              <span>Add to cart</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;