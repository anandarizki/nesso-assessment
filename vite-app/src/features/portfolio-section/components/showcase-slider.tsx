"use client";

import { portfolioData } from "@/utils/mock-data";
import { ShowcaseItem } from "./showcase-item";
import { ArrowNav } from "@/components/shared/arrow-nav";
import { cn } from "@/utils/cn";
import { useState } from "react";

const dataLength = portfolioData.items.length;

export function ShowcaseSlider({ className }: { className?: string }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = portfolioData.items[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => {
      if (prev === 0) {
        return dataLength - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setActiveSlide((prev) => {
      if (prev === dataLength - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className={cn("", className)}>
      <ShowcaseItem
        {...data}
        key={data.title}
        actions={<ArrowNav onNext={handleNext} onPrev={handlePrev} />}
      />
    </div>
  );
}
