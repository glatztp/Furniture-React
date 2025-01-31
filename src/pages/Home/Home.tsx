import style from "./Home.module.css";

import { Footer } from "../../components/Footer/Footer";
import Type from "../../components/Type/Type";
import Produto from "../../components/Produto/produto";

import imagetype1 from "../../assets/Mask Group.svg";
import imgP from "../../assets/image 4.svg";

interface Type {
  name: string;
  imageUrl: string;
}

interface Produto1 {
  imageCardName: string;
  imageCardDescription: string;
  imageCardPrice: number;
  imageUrl: string;
  BeforePrice?: number;
}

export const Home = () => {
  const type: Type[] = [
    { name: "Dining", imageUrl: imagetype1 },
    { name: "Living", imageUrl: imagetype1 },
    { name: "Bedroom", imageUrl: imagetype1 },
  ];

  const produtos: Produto1[] = [
    {
      imageCardName: "Prod 1",
      imageCardDescription: "Desc 1",
      imageCardPrice: 20.99,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 2",
      imageCardDescription: "Desc 2",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 3",
      imageCardDescription: "Desc 3",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 4",
      imageCardDescription: "Desc 4",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 5",
      imageCardDescription: "Desc 5",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 6",
      imageCardDescription: "Desc 6",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 7",
      imageCardDescription: "Desc 7",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
    {
      imageCardName: "Prod 8",
      imageCardDescription: "Desc 8",
      imageCardPrice: 29.9,
      imageUrl: imgP,
    },
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
        <h1 className={style.bt}>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className={style.imageContainer}>
          {type.map((Type, index) => (
            <div key={index} className={style.imageCard}>
              <img
                src={Type.imageUrl}
                alt={`Type ${index + 1}`}
                className={style.image}
              />
              <h1 className={style.imageName}>{Type.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className={style.products}>
        <h1 className={style.title}>Our Products</h1>

        <div className={style.c_products}>
          {produtos.map((produtos, index) => (
            <Produto
              key={index}
              imageUrl={produtos.imageUrl}
              imageCardName={produtos.imageCardName}
              imageCardDescription={produtos.imageCardDescription}
              imageCardPrice={produtos.imageCardPrice}
            />
          ))}
        </div>

        <a href="#" className={style.Show}>
          Show More
        </a>
      </div>

      <Footer />
    </div>
  );
};
