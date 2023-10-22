import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../contact";
import { Language } from "../languages";
import { Logo } from "../../assets";
export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100">
            <img className="image" src={Logo} alt="hello" />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x big">{introdata.title}</h2>
                <h2 className="mb-1x thick">BACKEND DEVELOPER</h2>
                <p className="mb-1x bigger">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <a href="#project" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Projects
                    </div>
                  </a>
                  <a href="#contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Language id="language" />
      <Portfolio id="project" />
      <ContactUs id="contact" />
    </HelmetProvider>
  );
};
