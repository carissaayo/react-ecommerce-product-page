import React ,{ useState}from 'react';
import Navbar from "./Navbar";
import "./Header.css";


const Header = ()=>{
    const [current,setCurrent] = useState(false);
    return (
      <div className='header'>
          <div className="logo-flex-con">
            <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
            </div>
            <Navbar />
          </div>
        <div className="images-con">
            <button className="btn-cart">
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