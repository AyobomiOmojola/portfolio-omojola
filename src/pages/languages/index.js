import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill12,
  skill13,
  skill14,
  skill15,
  skill16,
  skill17,
} from "../../assets";
export const Language = () => {
  const skills = [
    { skill: "HTML5", image: skill8 },
    { skill: "CSS3", image: skill7 },
    { skill: "Javascript", image: skill2 },
    { skill: "Python", image: skill12 },
    { skill: "Django", image: skill3 },
    { skill: "PostgreSQL", image: skill4 },
    { skill: "MySQL", image: skill13 },
    { skill: "Postman", image: skill9 },
    { skill: "Swagger", image: skill14 },
    { skill: "Linux", image: skill15 },
    { skill: "Redis", image: skill6 },
    { skill: "AWS", image: skill5 },
    { skill: "Docker", image: skill16 },
    { skill: "Git", image: skill17 },
    { skill: "Github", image: skill1 },
  ];

  const rows = [];
  let skillIndex = 0;
  let rowSize = 7;

  while (skillIndex < skills.length) {
    const row = skills.slice(skillIndex, skillIndex + rowSize);
    rows.push(row);
    skillIndex += rowSize;
    rowSize = Math.max(1, rowSize - 2); // Reduce row size by 1 in each iteration
  }
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Languages | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p className="about">
          Hello, I'm Ayo Omojola, a backend developer who is fascinated with
          software being built from the ground up. I've cultivated a hobby of
          writing codes for web applications and am now venturing into the ever
          changing world of contemporary technological progress, eager to be a
          hands-on contributor to these advancements.
        </p>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Languages and Technologies</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="image-grid">
          {rows.map((row, rowIndex) => (
            <div className="image-row" key={rowIndex}>
              {row.map((skill, skillIndex) => (
                <div className="data">
                  <img
                    src={skill.image}
                    key={skillIndex}
                    alt={`Skill ${skillIndex + 1}`}
                  />
                  <h2>{skill.skill}</h2>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Non Technical Skills</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <ul>
          <li>
            {" "}
            <p className="padding">
              <strong>Communication</strong>
            </p>
          </li>
          <li>
            {" "}
            <p className="padding">
              <strong>Time Management</strong>
            </p>
          </li>
          <li>
            {" "}
            <p className="padding">
              <strong>Attention To Detail</strong>
            </p>
          </li>
          <li>
            <p className="padding">
              <strong>Collaboration</strong>
            </p>
          </li>
        </ul> */}
      </Container>
    </HelmetProvider>
  );
};
