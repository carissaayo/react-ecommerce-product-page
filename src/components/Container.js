import {useState}from 'react';
import  Header from "./Header";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import "./Container.css"

const Container = ({
  openImage,
  setOpenImage,
  setOpenSidebar,
  setIndex,
  index,
  products,
}) => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  return (
    <div className="container">
      <Header
        amount={amount}
        total={total}
        setAmount={setAmount}
        setOpenSidebar={setOpenSidebar}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <ProductPage
        amount={amount}
        setAmount={setAmount}
        openImage={openImage}
        setOpenImage={setOpenImage}
        addProduct={addProduct}
        setTotal={setTotal}
        setAddProduct={setAddProduct}
        products={products}
        index={index}
        setIndex={setIndex}
      />
      {showCart ? <Cart total={total} setTotal={setTotal} setShowCart={setShowCart} /> : null}
    </div>
  );
};
export default Container
