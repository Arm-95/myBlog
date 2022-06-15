import react from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./detail_1.module.css";
import news from "../../utils/newsList";
const Detail = () => {
  const { id } = useParams();

  // const data = news.filter((i) => {
  //   return i.id == id;
  // });

  const data = news.filter((i) => i.id == id)[0];

  console.log("data", data);

  return (
    <>
      <section>
        <Container>
          {/* <div className={styles.detail_title}>
            <div className={styles.line}></div>
            <h3>Our project</h3>
          </div>
          <h5 className={styles.subTitile}>
            Weekly cleanliness program in city
          </h5> */}
          <div className={styles.image_slice}>
            <img src={data?.Image} alt="image" />
          </div>

          <div className={styles.title_slice}>
            <p className={styles.title}>{data?.description}</p>
          </div>

          <div className={styles.description_slice}>
            <p>{data?.description}</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Detail;
