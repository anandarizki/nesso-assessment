import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { motion } from "motion/react";

type ShowcaseItemProps = {
  image: string;
  title: string;
  description: string;
  cta: string;
  actions?: React.ReactNode;
};
export function ShowcaseItem({
  image,
  title,
  description,
  cta,
  actions,
}: ShowcaseItemProps) {
  return (
    <div className="md:flex gap-10 md:flex-row-reverse md:justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "linear" }}
        className="md:w-1/2 flex items-center justify-center"
      >
        <Image src={image} width={386} height={475} alt={title} />
      </motion.div>
      <div className="flex flex-col gap-4 md:max-w-110">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear" }}
        >
          <Typography
            as="h3"
            color="max"
            weight="bold"
            size="xl"
            className="font-bold md:text-[28px]"
          >
            {title}
          </Typography>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear", delay: 0.1 }}
          className="md:text-xl mb-3"
        >
          {description}
        </motion.p>
        <div className="flex justify-between items-center md:max-w-78 md:pt-7">
          <Button variant="fill" theme="gray">
            {cta}
          </Button>
          {actions}
        </div>
      </div>
    </div>
  );
}
