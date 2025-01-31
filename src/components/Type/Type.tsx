import React from "react";
import style from './Type.module.css'

interface TypeProps {
  name: string;
  imageUrl: string;
}

const Type: React.FC<TypeProps> = ({ name, imageUrl }) => {
  return (
    <div className={style.typeCard}> 
      <img src={imageUrl} alt={name} className={style.typeImage} /> 
      <h3 className={style.typeName}>{name}</h3>
    </div>
  )
}

export default Type;