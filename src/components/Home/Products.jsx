import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../rtk/slices/ProductsSlice";
import ProductCard from "../components/ProductCard";
import "./CardsSection.css";

const Products = () => {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const params = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
  });

  const products = productsData.map((product) => {
    if (i18n.language === "ar") {
      return {
        id: product.id,
        name: product.name.ar,
        description: product.description.ar,
        image: product.image,
        prices: product.prices,
        productId: product.productId,
      };
    } else {
      return {
        id: product.id,
        name: product.name.en,
        description: product.description.en,
        image: product.image,
        prices: product.prices,
        productId: product.productId,
      };
    }
  });

  const productId = params.productId;
  return (
    <div className="menu">
      {products.map(
        (item) =>
          productId === item.productId && (
            <>
              <ProductCard
                key={item.id}
                name={item.name}
                description={item.description}
                prices={item.prices}
                image={item.image}
                productId={item.productId}
              />
            </>
          )
      )}
    </div>
  );
};

export default Products;
