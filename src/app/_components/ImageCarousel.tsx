"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectMediaItem } from "@/data/projects";
import styles from "./ImageCarousel.module.css";

interface ImageCarouselProps {
  media: ProjectMediaItem[];
}

export default function ImageCarousel({ media }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (media.length === 0) return null;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentMedia = media[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={currentMedia.src}
          alt={currentMedia.alt}
          width={800}
          height={500}
          className={`${styles.image} ${currentMedia.className || ''}`}
          style={currentMedia.style}
          priority
        />
        
        {media.length > 1 && (
          <>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {currentMedia.caption && (
        <p className={styles.caption}>{currentMedia.caption}</p>
      )}

      {media.length > 1 && (
        <div className={styles.indicators}>
          {media.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.activeIndicator : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
