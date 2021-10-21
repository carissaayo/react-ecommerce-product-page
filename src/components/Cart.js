import "./Cart.css";
const Cart = ({ setShowCart,total,setTotal }) => {
  return (
    <main className={`${total?'cart':'cart empty-cart'}`}>
      <h3>Cart</h3>
      <hr></hr>
      {total? (
        <>
          <section>
            <div className="image-con">
              <img
                src="/images/image-product-2-thumbnail.jpg"
                alt="thumbnail"
              />
            </div>
            <p className="product-name">Fall Limited Edition Sneakers</p>
            <p className="product-price">
              $125 x {total} <span>$375.00</span>
            </p>
            <button className="delete-btn"
            onClick={()=>setTotal(0)}>
              <img src="/images/icon-delete.svg" alt="delete" />
            </button>
          </section>
          <button className="checkout-btn">Checkout</button>
        </>
      ): <p >Your cart is empty.</p>}
    </main>
  );
};
export default Cart;
