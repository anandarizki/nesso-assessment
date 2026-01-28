"use client";
import { HeroMedia } from "./components/hero-media";
import { OrderCta } from "@/components/shared/order-cta";
import { BrandList } from "./components/brand-list";
import { Container } from "@/components/ui/container";
import { SectionWrapperOuter } from "@/components/shared/section-wrapper";
import { heroData } from "@/utils/mock-data";
import { Typography } from "@/components/ui/typography";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <SectionWrapperOuter className="md:bg-[url('/grid-background.svg')] bg-no-repeat bg-position-[calc(50%+842px)_-20px] py-6 pb-28 md:py-31 md:pb-49">
      <Container className="relative px-7 md:px-10">
        <div className="text-max">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <Typography
              as="h1"
              weight="extrabold"
              color="max"
              className="tracking-[0.042rem] text-[68px] md:text-[72px] lg:text-[85px] leading-[130%]"
            >
              {heroData.title}{" "}
              <span className="font-light block"> {heroData.subtitle} </span>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="h-px bg-gray-300 mt-7 mb-8"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", delay: 0.2, duration: 0.5 }}
          >
            <OrderCta />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", delay: 0.3, duration: 0.5 }}
            className="mt-13"
          >
            <Typography as="h2" weight="bold" size="lg" className="mb-6">
              {heroData.brandSectionTitle}
            </Typography>
            <BrandList className="max-w-75" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 1 }}
          className="absolute left-1/2 md:left-[calc(50%+40px)] w-[80vw] md:w-auto top-full md:top-22 lg:top-16"
        >
          <HeroMedia />
        </motion.div>
      </Container>
    </SectionWrapperOuter>
  );
}
