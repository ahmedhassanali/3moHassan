import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import React from 'react'
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar >
        <Navbar.Brand to="/">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav row col-12">
            <div className="col-3">
              {i18n.language === 'en-US' ?
              ( 
               <button className="btn btn-danger" onClick={()=>{
                i18n.changeLanguage('ar');}}>AR<i class="fi fi-eg mx-1"></i></button>
              )
              :
              (
              <button className="btn btn-danger" onClick={()=>{
                i18n.changeLanguage('en-US');
              }}>EN<i class="fi fi-us mx-1"></i></button>
              )}

            </div>
            <div className="btns col-9">
              <a className="link" href="/3moHassan">{t('categories')}</a>
              <Link className="link" to="contact-us" spy={true} smooth={true} offset={-70} duration={500} >{t('contact-us')}</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;
