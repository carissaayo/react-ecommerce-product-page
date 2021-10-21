import "./ImagePage.css";
const ImagePage = ({ openImage, setOpenImage, setIndex, index, products }) => {
  return (
    <section
      className={openImage ? "image-page-con show-image-con" : "image-page-con"}
    >
      <button className="close-btn" onClick={() => setOpenImage(false)}>
        <img src="/images/icon-close.svg" alt="" />
      </button>
      <div className="image-con">
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
        <button className="prev-btn" onClick={() => setIndex(index + 1)}>
          <img src="/images/icon-previous.svg" alt="previous" />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <img src="/images/icon-next.svg" alt="next" />
        </button>
      </div>
      <div className="thumbnails-con">
        <div className="image-con">
          <img src="/images/image-product-1-thumbnail.jpg" alt="thumbnail" />
          <div className="image-overlay"></div>
        </div>
        <div className="image-con">
          <img src="/images/image-product-2-thumbnail.jpg" alt="thumbnail" />
          <div className="image-overlay"></div>
        </div>
        <div className="image-con">
          <img src="/images/image-product-3-thumbnail.jpg" alt="thumbnail" />
          <div className="image-overlay"></div>
        </div>
        <div className="image-con">
          <img src="/images/image-product-4-thumbnail.jpg" alt="thumbnail" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};
export default ImagePage;
