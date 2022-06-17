import React, { useEffect } from "react";
import styles from "./home.module.css";
import { SliderAll } from "../../Components";
import settings from "./slider";
import slider from "../../utils/slider";
import { Container, Row, Col } from "react-bootstrap";
import { bannerInfo } from "../../redux/actions/bannerAction";
import { homeAboutAction } from "../../redux/actions/homeAboutAction";
import { homeBuildActin } from "../../redux/actions/homeBuildAction";
import { partnersAction } from "../../redux/actions/partnerAction";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bannerInfo());
    dispatch(homeAboutAction());
    dispatch(homeBuildActin());
    dispatch(partnersAction());
  }, []);
  const data = useSelector((state) => state.BannerinfoReducer.bannerData);
  const homeAboutData = useSelector((state) => state.homeAboutReducer.homabout);
  const build = useSelector((state) => state.homeBuildReducer.build);
  const partners = useSelector((state) => state.partnersReducer.partners);

  console.log(partners, "data");
  //==​🔥​🔥​🔥​================SLIDER DESIGN CODE========​🔥​🔥​🔥​========
  const BEST_SALE_SLIDER = data?.map((i) => {
    return (
      <div key={i.id} className={styles.best_sale_box}>
        <div className={styles.sal_img_blco}>
          <h3 className={styles.title_slider}>
            {localStorage.getItem("lang") == "am" ? i.titleHy : i.titleEn}
          </h3>
          <img src={i.video} alt="" />
          <div className={styles.subtitle_blcok}>
            <h4 className={styles.subtitle_slider}>"asdasdasd"</h4>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    );
  });
  // ===​🔥​🔥​🔥​=================HOME UI CODE============​🔥​🔥​🔥​===========
  return (
    <>
      <section className={styles.section}>
        <div className={styles.mainDiv}>
          <SliderAll settings={settings} BEST_SALE_SLIDER={BEST_SALE_SLIDER} />
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.name_two_block}>
                <div className={styles.line_two}></div>
                <h3 className={styles.just_name}>know About Us</h3>
              </div>
              <h2 className={styles.title_two}>
                {localStorage.getItem("lang") == "am"
                  ? homeAboutData?.titleHy
                  : homeAboutData?.titleEn}
              </h2>
              <p className={styles.text_two}>
                {localStorage.getItem("lang") == "am"
                  ? homeAboutData?.textHy
                  : homeAboutData?.textEn}
              </p>
              <button className={styles.more}>Learn more</button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.img_two}>
                <img src={homeAboutData?.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section_two}>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.partner_name_block}>
                <p className={styles.partner_title}>our Supporters</p>
                <div className={styles.partner_line}></div>
              </div>
            </Col>
            {partners
              ? partners.map((i) => {
                  return (
                    <Col sm={12} md={6} lg={2} key={i.id}>
                      <div className={styles.partner_block}>
                        <img src={i.image} alt="" />
                        <p>{i.namee}</p>
                      </div>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </section>

      <section className={styles.section_three}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.name_two_block}>
                <div className={styles.line_two}></div>
                <h3 className={styles.just_name}>Know About us</h3>
              </div>
              <h2 className={styles.title_two}>
                {localStorage.getItem("lang") == "am"
                  ? homeAboutData?.titleHy
                  : homeAboutData?.titleEn}
              </h2>
              <p className={styles.text_two}>
                {localStorage.getItem("lang") == "am"
                  ? homeAboutData?.textHy
                  : homeAboutData?.textEn}
              </p>
              <div className={styles.items_blok}>
                <div className={styles.item_name_block}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/353/557/original/building-vector-icon.jpg"
                    alt=""
                  />

                  <h5 className={styles.item_name}> Build Healthy Cities</h5>
                </div>
                <p className={styles.infotext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className={styles.items_blok}>
                <div className={styles.item_name_block}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/353/557/original/building-vector-icon.jpg"
                    alt=""
                  />
                  <h5 className={styles.item_name}>Tree Plantation</h5>
                </div>
                <p className={styles.infotext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className={styles.items_blok}>
                <div className={styles.item_name_block}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/353/557/original/building-vector-icon.jpg"
                    alt=""
                  />
                  <h5 className={styles.item_name}>Protect Land and Water</h5>
                </div>
                <p className={styles.infotext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.img_two}>
                <img
                  src="https://thumbs.dreamstime.com/b/portrait-old-farmer-white-beard-portrait-old-farmer-white-beard-overall-straw-hat-corn-field-157201592.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={styles.question_title}>Can Help you!</h2>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className={styles.question_block}>
                <img
                  src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                  alt=""
                />
                <p>
                  Lorem Ipsum dolor sit loremLorem Ipsum dolor sit loremLorem
                  Ipsum dolor sit lorem
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.proect_block}>
            <div className={styles.project_name_block}>
              <div className={styles.project_line}></div>
              <h5 className={styles.project_name}>Projects we have done</h5>
            </div>
            <h5 className={styles.project_name_two}>
              We are Creating sustainable society, for everyone and forever.
            </h5>
          </div>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div className={styles.card}>
                <h4 className={styles.card_name}>
                  Mission 40K: Tree plantation
                </h4>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className={styles.see_more}>See More</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className={styles.card}>
                <h4 className={styles.card_name}>
                  Mission 40K: Tree plantation
                </h4>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className={styles.see_more}>See More</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className={styles.card}>
                <h4 className={styles.card_name}>
                  Mission 40K: Tree plantation
                </h4>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className={styles.see_more}>See More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={styles.red_news_title}>Read Our News</h2>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className={styles.news_block}>
                <div className={styles.news_img_block}>
                  <img
                    src="https://thumbs.dreamstime.com/b/man-dog-gardening-work-working-garden-55783074.jpg"
                    alt=""
                  />
                </div>
                <h5 className={styles.news_title}>
                  Don’t destroy greenery and don’t spoil scenery
                </h5>
                <p className={styles.news_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.name_block}>
            <h2 className={styles.events_title}>Our Events</h2>
            <div className={styles.naem_line}></div>
          </div>
          <Row>
            <Col>
              <div className={styles.Eventd_First_block}>
                <div className={styles.title_block}>
                  <h3>23</h3>
                  <p>Next Events</p>
                  <div className={styles.events_lines}></div>
                </div>
                <div className={styles.subtitle_block}>
                  <p>MAY</p>
                  <h4>Say no to plastic usage and save the planet</h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles.Eventd_First_block}>
                <div className={styles.title_block}>
                  <h3>25</h3>
                  <p>Next Events</p>
                  <div className={styles.events_lines}></div>
                </div>
                <div className={styles.subtitle_block}>
                  <p>MAY</p>
                  <h4>Say no to plastic usage and save the planet</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
