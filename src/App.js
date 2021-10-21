import {useState} from 'react'
import Container from "./components/Container";
import ImagePage from "./components/ImagePage";
import SideBar from "./components/SideBar";
import './App.css';
import { data } from "./util";


function App() {
   const [openImage, setOpenImage] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [products, setProducts] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <Container
        openImage={openImage}
        setOpenImage={setOpenImage}
        setOpenSidebar={setOpenSidebar}
        products={products}
        index={index}
        setIndex={setIndex}
      />
      <div
        className={
          openImage
            ? "product-page__overlay display-overlay"
            : "product-page__overlay"
        }
      ></div>
      <SideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <ImagePage
        openImage={openImage}
        setOpenImage={setOpenImage}
        products={products}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
}

export default App;
