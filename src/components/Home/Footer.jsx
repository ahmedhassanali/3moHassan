import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div class="main-footer ">
        <div class="container">
          <div className="m-2">
            <span>
              <Link className="btn btn-dark" to="https://www.facebook.com/ahmmedhassanali">
              <i class="fa fa-facebook"></i>            
              </Link>
            </span>
            <span>
              <Link className="btn btn-dark" to="https://www.instagram.com/ahmed_h.ali/">
              <i class="fa fa-instagram"></i>
              </Link>
            </span>
            <span>
              <Link className="btn btn-dark" to="https://www.behance.net/Ahmed_HAli">
              <i class="fa fa-behance"></i>
              </Link>
            </span>
            <span>
              <Link className="btn btn-dark" to="https://www.linkedin.com/in/ahmeedhassanali">
              <i class="fa fa-linkedin"></i>
              </Link>
            </span>
            <span>
              <Link className="btn btn-dark" to="https://www.github.com/ahmedhassanali">
              <i class="fa fa-github"></i>
              </Link>
            </span>
          </div>
          <div>
            <span className="my-2">
              Copyright © 2022{" "}
              <Link to="https://www.linkedin.com/in/ahmeedhassanali">
                Ahmed Hassan Ali.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
