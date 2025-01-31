import React from "react";
import style from './Produto.module.css';

interface ProdutoProps {
  imageUrl: string;
  imageCardName: string;  
  imageCardDescription: string; 
  imageCardPrice: number; 

}

const Produto: React.FC<ProdutoProps> = ({ imageUrl, imageCardName, imageCardDescription, imageCardPrice}) => {

  return (
    <div className={style.produto}>
      <div className={style.imgWrapper}>
        <img src={imageUrl} alt={imageCardName} />

      </div>
      <div className={style.info}>
        <h1 className={style.h1}>{imageCardName}</h1>
        <p className={style.desc}>{imageCardDescription}</p>

        <div className={style.priceWrapper}>
          <p className={style.price}>R$ {imageCardPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Produto;