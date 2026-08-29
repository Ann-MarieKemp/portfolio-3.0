"use client";

import styles from "@/styles/Carousel.module.css";

interface ArrowProps {
  clickFunc: () => void;
  graphic: string;
  disabled?: boolean;
}

const Arrow = ({ clickFunc, graphic, disabled }: ArrowProps) => {
  return (
    <button onClick={clickFunc} disabled={disabled} type="button">
      <p className={styles.arrow}>{graphic}</p>
    </button>
  );
};

export default Arrow;
