import style from "./Home.module.css";
import image1 from "../../assets/Image-living room.svg";
import image2 from "../../assets/Mask Group.svg";
import image4 from "../../assets/image 4.svg";

export function Home() {
  const imgs = [
    { name: "Dining", src: image1 },
    { name: "Living", src: image2 },
    { name: "Bedroom", src: image1 },
  ];

  const products = [
    { name: "Syltherine", src: image4 },
    { name: "Syltherine", src: image4 },
    { name: "Syltherine", src: image4 },
    { name: "Syltherine", src: image4 },
    
  ];

  return (
    <div className={style.contaneir}>
      <div className={style.Homecard}>
        <p>New Arrival</p>
        <h1 className={style.titleCard}>Discover Our New Collection</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </h5>

        <div className={style.buttonHome}>
          <button type="button">
            <a href="#">Buy Now</a>
          </button>
        </div>
      </div>

      <div className={style.browse}>
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className={style.imageContainer}>
          {imgs.map((img, index) => (
            <div key={index} className={style.imageCard}>
              <img
                src={img.src}
                alt={`Image ${index + 1}`}
                className={style.image}
              />
              <h1 className={style.imageName}>{img.name}</h1>
            </div>
          ))}
        </div>

        <div className={style.products}>
          <h1>Our Products</h1>

          <div className={style.imageContainerproducts}>
            {products.map((img, index) => (
              <div key={index} className={style.imageCardproducts}>
                <img
                  src={img.src}
                  alt={`Image ${index + 1}`}
                  className={style.imageProducts}
                />
                <h1 className={style.imageNameProducts}>{img.name}</h1>
                <p className={style.prodDesc}>Stylish cafe chair</p>
                <h1 className={style.imageNameProducts}>{img.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
