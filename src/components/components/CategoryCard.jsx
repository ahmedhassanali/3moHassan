import React from "react";
import { useTranslation } from "react-i18next";
import "./Card.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCard = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      className="card bg-dark text-white"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img src={props.image} alt={props.name} />
      <div className={i18n.language === "ar" ? "ar-class" : "en-class"}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Link
          className="btn btn-danger "
          to={`/3moHassan/category/${props.id}`}
        >
          {t("open")}
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
