import React from "react";
import { useTranslation } from "react-i18next";
import "./Card.css";
import { Link } from "react-router-dom";


const CategoryCard = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="card bg-dark text-white">
      <img src={props.image} alt={props.name} />
      <div className={i18n.language === "ar" ? "ar-class" : "en-class"}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Link className="btn btn-danger " to={`/3moHassan/category/${props.id}`}>
          {t('open')}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
