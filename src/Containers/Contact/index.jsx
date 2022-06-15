import React from "react";
import styles from "./contact.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { AddressMap } from "./map";

const Contact = () => {
  return (
    <>
      <section className={styles.section}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.title_block}>
                <div className={styles.name_block}>
                  <div className={styles.line_name}></div>
                  <p className={styles.name_item}>Contact us</p>
                </div>
                <h5 className={styles.subName}>We'd love to hear from you</h5>
                <p className={styles.text}>
                  Have any question in mind or want to enquire? Please feel free
                  to contact us through the form or the following details.
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.title_second_blok}>
                <h4 className={styles.secont_title_name}>Let's talk! </h4>
                <div className={styles.phone}>
                  <p>+1 23 456 789</p>
                  <p>hello@loremipsum.com</p>
                </div>
                <h4 className={styles.sub_title_name}>Headoffice</h4>
                <div className={styles.office}>
                  <p>8 Lorem Ipsum, Lorem, Armenia</p>
                </div>
                <div className={styles.networks}>
                  <p>twiter</p>
                  <p>twiter</p>
                  <p>twiter</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section_two}>
        <Container>
          <form className={styles.form_contact} action="">
            <Row>
              <Col sm={12} md={6} lg={6}>
                <label htmlFor="" className={styles.lable}>
                  First Name
                </label>
                <input type="text" className={styles.input} />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label htmlFor="" className={styles.lable}>
                  Last Name
                </label>
                <input type="text" className={styles.input} />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label htmlFor="" className={styles.lable}>
                  Email Id
                </label>
                <input type="text" className={styles.input} />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label htmlFor="" className={styles.lable}>
                  Subject
                </label>
                <input type="text" className={styles.input} />
              </Col>
              <Col sm={12} md={12} lg={12}>
                <label htmlFor="" className={styles.lable}>
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className={styles.textarea}
                ></textarea>
              </Col>
            </Row>
            <div className={styles.button_block}>
              <button className={styles.submit}>Send message</button>
            </div>
          </form>
        </Container>
      </section>
      <section>
        <AddressMap />
      </section>
    </>
  );
};

export default Contact;
