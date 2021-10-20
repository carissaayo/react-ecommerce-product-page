import {useState} from 'react'
import Container from "./components/Container";
import ImagePage from "./components/ImagePage";
import SideBar from "./components/SideBar";
import './App.css';

function App() {
   const [openImage, setOpenImage] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="App">
      <Container openImage={openImage} setOpenImage={setOpenImage} setOpenSidebar={setOpenSidebar} />
      <div
        className={
          openImage
            ? "product-page__overlay display-overlay"
            : "product-page__overlay"
        }
      ></div>
      <SideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <ImagePage openImage={openImage} setOpenImage={setOpenImage} />
    </div>
  );
}

export default App;
