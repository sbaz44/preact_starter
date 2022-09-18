import { useEffect, useRef, useState } from "preact/compat";
import { motion } from "framer-motion";
import logo from "../../assets/icon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, parentContainer, xMotion } from "../../helper/motions";
import style from "./formcard.scss";
export const FormCard = (props) => {
  const sliderRef = useRef();
  const sliderRef2 = useRef();

  const [ThemeData, setThemeData] = useState({
    label: "Diycam123",
    logo_white_theme: "",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: (current, next) => {
      sliderRef2.current.slickGoTo(next);
    },
  };
  const settings2 = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: (current, next) => {
      sliderRef.current.slickGoTo(next);
    },
  };

  const sliderImages = [
    "https://img.freepik.com/free-vector/office-background-video-conferencing_23-2148641674.jpg",
    "https://i.pinimg.com/736x/66/a4/b1/66a4b1f09330f8dc444301de6e158c13.jpg",
    "https://vectorforfree.com/wp-content/uploads/2019/07/Office_Worker_VectorForFree.jpg",
  ];

  const sliderText = [
    {
      header: "Banking Sector",
      content:
        "The banking sector is a major segment of the U.S. and world economies. While some might define it more broadly, the U.S. Department of Commerce considers it a subsector of the larger financial services.",
    },
    {
      header: "Health Sector",
      content:
        "Your earnings will be automatically paid before midnight on the next payment date (June 1st, 2022) if your earnings have reached a total of $5.00 or more for the previous month(s). ",
    },
    {
      header: "Security Sector",
      content:
        "Referral program is a great way to spread the word of this great service and to earn even more money with your short links! Refer friends and receive 20% of their earnings for life!",
    },
  ];

  return (
    <motion.div
      variants={parentContainer}
      exit="exit"
      animate="visible"
      initial="hidden"
      className={style.__form_Card__}
    >
      <p className={style["cp-text2"]}>
        © Copyright 2022 EaseMyAI All rights reserved. | Contact Us
      </p>
      <div className={style.company_info}>
        <motion.img
          src={logo}
          alt="logo"
          className={style.logo}
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.8 }}
        />
        <div className={style._slider}>
          <Slider {...settings} ref={sliderRef}>
            {sliderImages.map((item, index) => (
              <div key={item} className={style.slider_content}>
                <img
                  className={style.slider_img}
                  src={item}
                  alt={"slider_image_" + index}
                />
                <div style={{ opacity: 0 }}>
                  <h1 className={style.slider_header}>
                    {sliderText[index].header}
                  </h1>
                  <p className={style.slider_desc}>
                    {sliderText[index].content}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <div className={style.slider_content_wrapper}>
            <Slider {...settings2} ref={sliderRef2}>
              {sliderText.map((item, index) => (
                <div key={item.header} className={style.slider_content}>
                  <h1 className={style.slider_header}>{item.header}</h1>
                  <p className={style.slider_desc}>{item.content}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className={style.d_data}>{props.children}</div>
    </motion.div>
  );
};

export const FormHeader = ({ name, bold }) => {
  return (
    <div className={style._form__header}>
      <p>{name}</p>
      <span> {bold}</span>
    </div>
  );
};
