import React, { useState } from "react";
import styles from "./ResponseNav.module.css";
import { Container, Accordion } from "react-bootstrap";
// import Logo from "../../svg/log.svg";
// import NextLink from "../NextLink";
// import { buyserGet, buyserSalesGet } from "../../redux/actions/product.acion";
// import { useDispatch, useSelector } from "react-redux";

const ResponseNav = () => {
  const [active, setActive] = useState(false);
  // const [name, setName] = useState("Ամբողջ Տեսականի");
  // const [categoryNamee, setCategoryNamee] = useState();

  // const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
  };

  console.log(active, "asdasdasd");
  // const getNameHeader = (name) => {
  //   setName(name);
  //   dispatch(buyserGet(name));
  //   setActive(!active);
  // };

  // const getCategoryNameHeader = (name, categoryNamee) => {
  //   setCategoryNamee(categoryNamee);
  //   dispatch(buyserGet(name, categoryNamee));
  //   setActive(!active);
  // };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.burger_block}>
          <div className={styles.responseStyle}>
            {/* <NextLink exat to="/"> */}
            {/* <Logo /> */}
            {/* </NextLink> */}
          </div>
          <p
            className={active ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          >
            sdsds
          </p>
        </div>
        <ul className={active ? styles.activ_nav : styles.just_nav}>
          <li>asdadasdasd</li>
          <li>asdadasdasd</li>
          <li>asdadasdasd</li>
          <li>asdadasdasd</li>
          <li>asdadasdasd</li>
        </ul>
      </nav>
    </>
  );
};

export default ResponseNav;
