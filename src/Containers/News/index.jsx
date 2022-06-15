import React from "react";
import styles from "./news.module.css";
import { Container, Row, Col } from "react-bootstrap";
import news from "../../utils/newsList";
import { Link } from "react-router-dom";
const News = () => {
  const newsData = news
    ? news.map((i) => {
        return (
          <Col sm={12} md={6} lg={3}>
            <Link to={`/detail/${i.id}`}>
              <div key={i.id} className={styles.news_item_block}>
                <img src={i.Image} alt="img" />
                <h3>{i.title}</h3>
                <p>{i.description}</p>
              </div>
            </Link>
          </Col>
        );
      })
    : null;
  return (
    <>
      <section>
        <Container>
          <div className={styles.news_title}>
            <div className={styles.line}></div>
            <p>Latest news</p>
          </div>
          <h3 className={styles.read_news}>Read Our News</h3>
          <Row>{newsData}</Row>
        </Container>
      </section>
    </>
  );
};

export default News;
