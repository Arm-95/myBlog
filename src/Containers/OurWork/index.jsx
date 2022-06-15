import React, { useState } from "react";
import styles from "./ourWork.module.css";
import { Container } from "react-bootstrap";

const OurWork = () => {
  const [curentId, setCurentId] = useState();
  return (
    <>
      <section className={styles.section_1}>
        <Container>
          <div className={styles.big_div}>
            <img src="/assets/2.png" alt="" />
            <div className={styles.item1} onClick={() => setCurentId(1)}>
              Բնահեն լուծումների ռազմավարություններ, իրավակարգավորումներ
            </div>
            <div className={styles.item2} onClick={() => setCurentId(2)}>
              Մասնավոր հատվածի սոցիալական պատասխանատվություն(ԿՍՊ, ՊՄԳ)
            </div>
            <div className={styles.item3} onClick={() => setCurentId(3)}>
              Էլ - կառավարում
            </div>
            <div className={styles.item4} onClick={() => setCurentId(4)}>
              Ֆինանսական կայուն  կառավարում
            </div>
            <div className={styles.item5} onClick={() => setCurentId(5)}>
              Մշտադիտարկում
            </div>
            <div className={styles.item6} onClick={() => setCurentId(6)}>
              Աղբի {`<<կանաչ>>`}  կառավարում
            </div>
            <div className={styles.item7} onClick={() => setCurentId(7)}>
              {`<< Կանաչ >>`} տրանսպորտ
            </div>
            <div className={styles.item8} onClick={() => setCurentId(8)}>
              Բնական ռեսուրսների կայուն կառավարում(ջուր,հող, անտառ)
            </div>
            <div className={styles.item9} onClick={() => setCurentId(8)}>
              {`<< Կանաչ >>`} տրանսպորտ
            </div>
            <div className={styles.item10} onClick={() => setCurentId(8)}>
              Բնապահպանական կրթություն
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurWork;
