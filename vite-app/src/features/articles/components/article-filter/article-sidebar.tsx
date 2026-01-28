import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SettingsIcon } from "@/components/ui/icons";
import { AnimatePresence, motion } from "motion/react";

export function ArticleSidebar({ children }: { children: React.ReactNode }) {
  const [showFilterBar, setShowFilterBar] = useState(false);

  return (
    <>
      <Button
        size="icon"
        onClick={() => setShowFilterBar(true)}
        variant="fill"
        theme="gray"
      >
        <SettingsIcon />
      </Button>
      {showFilterBar && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowFilterBar(false)}
        />
      )}
      <AnimatePresence>
        {showFilterBar && (
          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "100%" }}
            transition={{ ease: "linear" }}
            className="fixed flex flex-col inset-0 left-auto w-64 bg-background z-50 max-w-full shadow-xl "
          >
            <div className="flex-1 flex overflow-y-auto flex-col gap-5 p-5">
              {children}
            </div>

            <div className="border-t border-gray-200 p-5">
              <Button
                className="w-full"
                onClick={() => setShowFilterBar(false)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
