import "./Header.css";
import logo from "../../assets/NavBar/logo.png";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div
        className={i18n.language === "ar" ? "ar-class" : "en-class"}
        id="slider"
      >
        <div className="">
          <div className="col-md-6 header-content m-5">
            <img className="col-md-3 m-5" src={logo} alt="" />
            <h1 className="mt-0 mb-5">{t("header-text")}</h1>
            <div className="buttons">
                    <Link to="https://www.facebook.com/3moHassanFoods" className="btn btn-danger btn-floating mx-1">
                      <i className="fa fa-facebook"></i>
                    </Link>

                    <Link  to="https://wsend.co/201102576699" className="btn btn-danger btn-floating mx-1">
                    <i className="fa fa-whatsapp"></i>
                    </Link>

                    <Link to='https://www.youtube.com/@user-om7mf9st5y' className="btn btn-danger btn-floating mx-1">
                      <i className="fa fa-youtube"></i>
                    </Link>
                   
                    <Link to=' https://www.instagram.com/3mohassanfoods' className="btn btn-danger btn-floating mx-1">
                    <i className="fa fa-instagram"></i>
                    </Link>
            </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Header;
