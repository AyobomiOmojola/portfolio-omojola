import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const ChatServer = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Chat Server | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Chat Server </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <p>
            In order to activate the chat server you need to have been
            registered and logged in to ProAssist through the swagger-ui in
            order to get your login Token
          </p>
          <p>
            <br /> Where USERNAME = Username of user you want to chat with and
            TOKEN = Your Login Token, hence the chat server url is to be
            constructed as follows:
            <span
              style={{
                backgroundColor: "#808080",
                color: "#000000",
                padding: "2px",
              }}
            >
              https://proassist.up.railway.app/chat/USERNAME/?token=TOKEN
            </span>
          </p>
          <p>
            <br /> However for ease, two users have been registered and signed
            in with non expiry tokens; Jane(A Client) and John(A Professional).
          </p>
          <div className="buttonr">
            <a
              className="source"
              href="https://proassist.up.railway.app/chat/john/?token=c5c0f6d7f4df1ae188eb2344bb96911a432b7402"
              target="_blank"
            >
              Chat as Jane
            </a>
            <a
              className="white"
              href="https://proassist.up.railway.app/chat/jane/?token=b16facf56bb7564389d7db4e09dcf93bc14b94f8"
              target="_blank"
            >
              Chat as John
            </a>
          </div>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
