import React from "react";
import styles from "./Fleet.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCard from "./SwiperCard";

function Fleet() {
  return (
    <>
      <div className={styles.fleet}>
        <div className={styles.header}>
          <p>Our Fleet</p>
          <p>
            We offer an extensive collection of vehicles including, sedans,
            limosines and crossovers.
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/2s77p9n5"
              make="Mercedes Maybach "
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/558b87hx"
              make="Mercedes GLS"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/yckj4huk"
              make="Mercedes V Class"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard image="https://tinyurl.com/3b2csr3d" make="Audi" />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/2k83mdsh"
              make="Rolls Royce"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/bdhv4pch"
              make="Stretch Limo"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/2s77p9n5"
              make="Mercedes Maybach"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/558b87hx"
              make="Mercedes GLS"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/yckj4huk"
              make="Mercedes V Class"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard image="https://tinyurl.com/3b2csr3d" make="Audi" />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/2k83mdsh"
              make="Rolls Royce"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/bdhv4pch"
              make="Stretch Limo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/2k83mdsh"
              make="Rolls Royce"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/bdhv4pch"
              make="Stretch Limo"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/2s77p9n5"
              make="Mercedes Maybach"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCard
              image="https://tinyurl.com/558b87hx"
              make="Mercedes GLS"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Fleet;
