import React from "react";
import styles from "./about.module.css";
import slider from "../../utils/slider";
import { SliderAll } from "../../Components";
import settings from "./slider";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import project from "../../utils/project";

const About = () => {
  //==​🔥​🔥​🔥​================SLIDER DESIGN CODE========​🔥​🔥​🔥​========
  const ABOUTE_SLIDER = slider.map((i) => {
    return (
      <div key={i.id} className={styles.best_sale_box}>
        <div className={styles.sal_img_blco}>
          <h3 className={styles.title_slider}>{i.title}</h3>
          <img src={i.Image} alt="" />
          <div className={styles.subtitle_blcok}>
            <h4 className={styles.subtitle_slider}>{i.subtitle}</h4>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    );
  });
  // ===​🔥​🔥​🔥​=================HOME UI CODE============​🔥​🔥​🔥​===========
  console.log(project, "project");

  return (
    <>
      <section className={styles.section}>
        <div className={styles.mainDiv}>
          <SliderAll settings={settings} ABOUTE_SLIDER={ABOUTE_SLIDER} />
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.name_two_block}>
                <div className={styles.line_two}></div>
                <h3 className={styles.just_name}>Know About us</h3>
              </div>
              <h2 className={styles.title_two}>
                We are a nonprofit team working worldwide
              </h2>
              <p className={styles.text_two}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim
                elementum tristique.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Suspendisse
                varius enim elementum tristique.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.img_two}>
                <img
                  src="https://previews.123rf.com/images/dolgachov/dolgachov1703/dolgachov170300207/72947836-happy-friends-playing-football-at-summer-garden.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.section_two}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.mission_block}>
                <h2 className={styles.mission_title}>our mission</h2>
                <h5 className={styles.mission_subTitile}>
                  We make the world we save our own environment
                </h5>
                <p className={styles.mission_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.mission_block}>
                <h2 className={styles.mission_title}>our mission</h2>
                <h5 className={styles.mission_subTitile}>
                  We make the world we save our own environment
                </h5>
                <p className={styles.mission_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <div className={styles.proect_block}>
              <div className={styles.project_name_block}>
                <div className={styles.project_line}></div>
                <h5 className={styles.project_name}>Projects we have done</h5>
              </div>
              <h5 className={styles.project_name_two}>
                We are Creating sustainable society, for everyone and forever.
              </h5>
            </div>
            {project
              ? project.map((i) => {
                  return (
                    <Col sm={12} md={6} lg={4} key={i.id}>
                      <div
                        className={styles.card}
                        style={{
                          height: "400px",
                          backgroundImage: `url(${i.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "50% 50%",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "20px",
                        }}
                      >
                        <h4 className={styles.card_name}>{i.title}</h4>
                        <p className={styles.text}>{i.text}</p>
                        <Link to={`/details/${i.id}`}>
                          <button className={styles.see_more}>See More</button>
                        </Link>
                      </div>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
