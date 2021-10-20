import {useState}from 'react';
import  Header from "./Header";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import "./Container.css"

const Container = ({openImage,setOpenImage,setOpenSidebar})=>{
  const [amount, setAmount] = useState(0);
  const [total,setTotal] = useState(0);
  const [showCart,setShowCart] = useState(false)
  const [addProduct, setAddProduct] = useState(true);

    return (
      <div className="container">
        <Header amount={amount} setAmount={setAmount} setOpenSidebar={setOpenSidebar}  setShowCart={setShowCart}showCart={showCart}/>
        <ProductPage amount={amount} setAmount={setAmount} openImage={openImage} setOpenImage={setOpenImage}  addProduct={addProduct} 
      
        />
        {showCart?<Cart setShowCart={setShowCart}/>:null}
      </div>
    );

}
export default Container
