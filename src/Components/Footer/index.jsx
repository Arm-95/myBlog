import React from "react";
import styles from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section className={styles.bacground}>
      <Container>
        <Row>
          <Col>
            <div>
              <p className={styles.logo}>logo</p>
            </div>
          </Col>
          <Col>
            <div>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
