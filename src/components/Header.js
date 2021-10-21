import Navbar from "./Navbar";
import "./Header.css";
const Header = ({setOpenSidebar, showCart,setShowCart,total})=>{
    return (
      <div className='header'>
            <button  
            onClick={()=>setOpenSidebar(true)} 
            className='harmburger-menu'
            >
              <img src="/images/icon-menu.svg" alt="menu" />
            </button>
          <div className="logo-flex-con">
            <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
            </div>
            <Navbar />
          </div>
        <div className="images-con">
            <button className="btn-cart" onClick={()=>setShowCart(!showCart)}>
              {total? <span className="cart-total">{total}</span>: null}
                <img src="/images/icon-cart.svg" alt="cart icon" />
            </button>
            <button className="avatar-con">
                <img src="/images/image-avatar.png" alt="avartar" />

            </button>
        </div>
      </div>
    );
}
export default Header