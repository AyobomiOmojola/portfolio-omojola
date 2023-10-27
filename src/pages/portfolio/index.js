import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3" id="project">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className=" po_items_ho hello">
          <div className="po_item">
            <div className="content">
              <h1 className="title">ProAssist</h1>
              <p className="desc">
                This consists of a Rest API with dynamic features for webapps
                focused on bridging the gap between skilled professionals and
                clients. It offers features such as creation of job openings for
                professionals, allocation of those jobs to a qualified
                professional, obtaining free professionals with no jobs at hand,
                review and rating of professionals and many more. It also has a
                dedicated real time one to one communication chat server between
                clients and professionals by implementing the
                power of WebSockets.
              </p>
              <div className="tag">
                <div className="tags">
                  <p>django </p>
                </div>
                <div className="tags">
                  <p>django rest framework </p>
                </div>
                <div className="tags">
                  <p>django channels </p>
                </div>
                <div className="tags">
                  <p>Bootstrap</p>
                </div>
              </div>
              <div className="button">
                <a
                  className="source"
                  href="https://github.com/AyobomiOmojola/ProAssist"
                  target="_blank"
                >
                  Source code
                </a>
                <a
                  className="white"
                  href="https://proassist.up.railway.app/docs/"
                  target="_blank"
                >
                  Live API Doc.
                </a>
                <Link className="black" to="/chat-server">
                  Chat server
                </Link>
              </div>
            </div>
          </div>
          <div className="po_item">
            <div className="content">
              <h1 className="title">TinkerTale</h1>
              <p className="desc">
                This Rest API offers amazing possibilities for webapps that are
                centered around story telling. It provides features like
                age-based restrictions on the content users can view, a
                storytelling competition where the highest voted stories are
                elevated to a prestigious list and a variety of other features
                like archiving stories, restriction of stories for non
                authenticated users and many more.
              </p>
              <div className="tag">
                <div className="tags">
                  <p>django </p>
                </div>
                <div className="tags">
                  <p>django rest framework </p>
                </div>
              </div>
              <div className="button">
                <a
                  className="source"
                  href="https://github.com/AyobomiOmojola/_TinkerTale_"
                  target="_blank"
                >
                  Source code
                </a>
                <a
                  className="white"
                  href="https://tinkertale.up.railway.app/docs/"
                  target="_blank"
                >
                  Live API Doc.
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
