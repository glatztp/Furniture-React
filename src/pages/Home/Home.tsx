import style from "./Home.module.css";

import { Footer } from "../../components/Footer/Footer";
import Category from '../../components/Category_card/Category';
import Produto from '../../components/Produto/produto';

import imageCardCategory1 from '../../assets/Mask Group.svg'

interface Category {
  name: string;
  imageUrl: string;
}

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  BeforePrice?: number;
}

export const Home = () => {

  const categories: Category[] = [
    { name: "Dining", imageUrl: imageCardCategory1 },
    { name: "Living", imageUrl: imageCardCategory1 },
    { name: "Bedroom", imageUrl: imageCardCategory1 },
  ];

  const products: Product[] = [
    { name: "Product 1", description: "Some description", price: 10.99, BeforePrice: 30, imageUrl: imageCardCategory1 },
    { name: "Product 2", description: "Some description", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 3", description: "Some description", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 4", description: "Some description", price: 40.99, BeforePrice: 80, imageUrl: imageCardCategory1 },
    { name: "Product 5", description: "Some description", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 6", description: "Some description", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 7", description: "Some description", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 8", description: "Some description", price: 40.99, imageUrl: imageCardCategory1 },
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

        {/* Categorias */}
        <div className={style.imageContainer}>
          {categories.map((category, index) => (
            <div key={index} className={style.imageCard}>
              <img
                src={category.imageUrl}
                alt={`Category ${index + 1}`}
                className={style.image}
              />
              <h1 className={style.imageName}>{category.name}</h1>
            </div>
          ))}
        </div>

        {/* Produtos */}
        <div className={style.our_products}>
          <h1 className={style.title}>Our Products</h1>

          <div className={style.wrapper_products}>
            {products.map((product, index) => (
              <Produto
                key={index}
                imageUrl={product.imageUrl}
                name={product.name}
                description={product.description}
                price={product.price}
                BeforePrice={product.BeforePrice}
              />
            ))}
          </div>

          <a href="#" className={style.show_more}>Show More</a>
        </div>

      </div>

      <Footer />
    </div>
  );
};
