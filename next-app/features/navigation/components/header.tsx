"use client";
import { CompanyLogo } from "@/components/ui/company-logo";
import { Container } from "@/components/ui/container";
import { ContactCta } from "../../../components/shared/contact-cta";
import { NavBar } from "./navbar";
import { MobileNav } from "./mobile-nav";
import { fontSecondaryClassName } from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ ease: "linear", duration: 0.5 }}
      className={cn(
        "z-10 md:mt-6.5 sticky top-0 py-2 bg-background",
        fontSecondaryClassName,
      )}
    >
      <Container className="flex gap-2 justify-between items-center px-6 md:px-11">
        <CompanyLogo />
        <NavBar className="hidden md:block flex-1 max-w-167.5" />
        <ContactCta className="hidden md:inline-flex lg:px-9" />
        <MobileNav />
      </Container>
    </motion.header>
  );
}
