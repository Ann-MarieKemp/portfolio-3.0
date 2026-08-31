"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styles from "@/styles/Lightbox.module.css"

interface LightboxImageProps {
  images: string[];
  alt: string;
  rotate?: boolean;
}

const LightboxImage = ({ images, alt, rotate }: LightboxImageProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  const close = useCallback(() => setIsOpen(false), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = "hidden"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, close, prev, next])

  return (
    <>
      <button
        type="button"
        className={styles["thumbnail-button"]}
        onClick={() => {
          setIndex(0)
          setIsOpen(true)
        }}
        aria-label={`View larger image of ${alt}`}
      >
        <Image
          src={images[0]}
          alt={alt}
          width={400}
          height={220}
          className={`${styles["thumbnail"]} ${rotate ? styles["thumbnail-rotate"] : ""}`}
        />
        {hasMultiple && <span className={styles["image-count"]}>+{images.length - 1}</span>}
      </button>
      {isOpen && (
        <div
          className={styles["overlay"]}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
        >
          <button type="button" className={styles["close-button"]} onClick={close} aria-label="Close">
            <FaTimes size="20" />
          </button>
          {hasMultiple && (
            <button
              type="button"
              className={`${styles["nav-button"]} ${styles["prev-button"]}`}
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft size="20" />
            </button>
          )}
          <div className={styles["overlay-image-container"]} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index]}
              alt={alt}
              fill
              style={{ objectFit: "contain" }}
              className={rotate ? styles["overlay-image-rotate"] : ""}
            />
          </div>
          {hasMultiple && (
            <button
              type="button"
              className={`${styles["nav-button"]} ${styles["next-button"]}`}
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next image"
            >
              <FaChevronRight size="20" />
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default LightboxImage
