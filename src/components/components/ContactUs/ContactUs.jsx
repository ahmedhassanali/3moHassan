import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/NavBar/logo.png";
import image from "../../../assets/OrderNow/motorbike.png";
import "./ContactUs.css";
import { Link } from "react-router-dom";
export default function ContactUs() {
  const { t, i18n } = useTranslation();
  return (
      <section className="contact-us row" id="contact-us">
        <img className="col-md-4 image" src={image} alt="" />
        <div className="col-md-5 content">
          <div className="col-md-12">
            <div className={i18n.language === "ar" ? "ar-class" : "en-class"}>
              <h2 className="my-2">{t("order-now")}</h2>
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 call container">
                  <Link
                    type="button"
                    className="btn btn-danger btn-floating container"
                    to="https://wsend.co/201102576699"
                  >
                    <h5>{t("call")}</h5>
                    <i className="fa fa-call">01102576699</i>
                  </Link>
                </div>
                <div className="col-md-6 ">
                  <Link
                    type="button"
                    className="btn btn-success btn-floating whatsapp"
                    to="https://wsend.co/201102576699"
                  >
                    <h5>{t("whatsapp")}</h5>
                    <i className="fa fa-whatsapp"></i>
                  </Link>
                </div>
                <div className="col-md-6 ">
                  <Link
                    type="button"
                    className="btn btn-primary btn-floating facebook"
                    to="https://www.facebook.com/3moHassanFoods"
                  >
                    <h5>{t("facebook")}</h5>
                    <i className="fa fa-facebook"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img className="col-md-3 logo" src={logo} alt="" />
      </section>
  );
}
