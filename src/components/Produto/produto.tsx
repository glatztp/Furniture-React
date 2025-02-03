import React, { useState } from "react";
import style from "./Produto.module.css";

interface ProdutoProps {
  imageUrl: string;
  imageCardName: string;
  imageCardDescription: string;
  imageCardPrice: number;
}

const Produto: React.FC<ProdutoProps> = ({
  imageUrl,
  imageCardName,
  imageCardDescription,
  imageCardPrice,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={style.produto}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`${style.produtoImageContainer} ${
          hovered ? style.hovered : ""
        }`}
      >
        <img
          src={imageUrl}
          alt={imageCardName}
          className={style.produtoImage}
        />
        {hovered && (
          <div className={style.addToCartButton}>
            <button>Add to Cart</button>
          </div>
        )}
      </div>
      <div className={style.produtoInfo}>
        <h3 className={style.produtoName}>{imageCardName}</h3>
        <p className={style.produtoDescription}>{imageCardDescription}</p>
        <p className={style.produtoPrice}>Rp {imageCardPrice}</p>
      </div>
    </div>
  );
};

export default Produto;
