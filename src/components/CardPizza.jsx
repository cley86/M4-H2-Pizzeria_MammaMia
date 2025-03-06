import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow" style={{ width: "20rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
        <div className="mt-auto">
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Ver más</button>
            <button className="btn btn-success">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
