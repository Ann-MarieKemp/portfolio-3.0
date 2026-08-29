"use client";

import { useState } from "react";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import styles from "@/styles/Carousel.module.css";

interface CarouselProps {
  images: string[];
  altPrefix?: string;
}

const Carousel = ({ images, altPrefix = "Photo" }: CarouselProps) => {
  const [imageIdx, setImageIdx] = useState(0);
  const trans = imageIdx * (100 / images.length);

  return (
    <div className={styles.slider}>
      <div
        className={styles["slider-wrapper"]}
        style={{ transform: `translateX(-${trans}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className={`${styles["carousel-image-container"]} ${
              index === imageIdx ? styles["opacity-full"] : styles["opacity-half"]
            }`}
          >
            <Image
              src={image}
              alt={`${altPrefix} ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div className={styles["arrow-container"]}>
        <Arrow
          clickFunc={() => setImageIdx((i) => Math.max(0, i - 1))}
          graphic="Prev"
          disabled={imageIdx === 0}
        />
        <Arrow
          clickFunc={() => setImageIdx((i) => Math.min(images.length - 1, i + 1))}
          graphic="Next"
          disabled={imageIdx === images.length - 1}
        />
      </div>
    </div>
  );
};

export default Carousel;
