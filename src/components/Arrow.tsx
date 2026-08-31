"use client";

import styles from "@/styles/Carousel.module.css";

interface ArrowProps {
  clickFunc: () => void;
  graphic: string;
  disabled?: boolean;
}

const Arrow = ({ clickFunc, graphic, disabled }: ArrowProps) => {
  return (
    <button
      className={styles["arrow-button"]}
      onClick={clickFunc}
      disabled={disabled}
      type="button"
    >
      {graphic}
    </button>
  );
};

export default Arrow;
