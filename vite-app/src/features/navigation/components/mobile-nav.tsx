"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "./nav-link";
import { ContactCta } from "../../../components/shared/contact-cta";
import { menuItems } from "@/utils/mock-data";

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      aria-label="Menu"
      onClick={onClick}
      variant="ghost"
      size="icon"
      className="inline-flex md:hidden"
    >
      <span
        className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ${
          open ? "rotate-45" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-black transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ${
          open ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </Button>
  );
}

export function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <HamburgerButton open={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 fixed inset-0 top-14 bg-white/40 backdrop-blur-md md:hidden flex flex-col justify-between p-10 items-center overflow-y-auto gap-7"
          >
            <div />
            <nav className="text-3xl landscape:text-xl font-bold">
              <ul className="w-full flex flex-col gap-7">
                {menuItems.map(({ href, label, ...itemProps }, index) => (
                  <motion.li
                    initial={{ opacity: 0, translateY: "100%" }}
                    animate={{ opacity: 1, translateY: "0%" }}
                    transition={{ delay: index * 0.08 }}
                    key={href + index}
                  >
                    <NavLink
                      {...itemProps}
                      href={href}
                      onClick={() => setShowMenu(false)}
                      className="has-[.active]:text-black [&_span]:hidden w-full justify-center"
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              transition={{ delay: menuItems.length * 0.08 }}
              className="w-full"
            >
              <ContactCta className="h-12 w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
