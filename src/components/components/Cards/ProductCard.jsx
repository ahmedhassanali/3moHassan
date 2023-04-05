import React from "react";
import { useTranslation } from "react-i18next";
import "./Card.css";

const ProductCard = (props) => {
  const { i18n } = useTranslation();
  console.log(props.prices);
  const prices = props.prices;
  return (
    <div className={i18n.language === "ar" ? "ar-class" : "en-class"}>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="card bg-dark text-white"
      >
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className="d-flex">
          {prices.map((item) => (
            <div className="col-4">
              {i18n.language === "ar" && <p className="size">{item.size.ar}</p>}
              {i18n.language === "en-US" && (
                <p className="size">{item.size.en}</p>
              )}
              <p className="price">{item.price} .LE</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
