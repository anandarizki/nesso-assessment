"use client";

import { cn } from "@/utils/cn";
import { Button } from "../ui/button";
import { IconChevronLeft, IconChevronRight } from "../ui/icons";

type ArrowButtonProps = {
  onClick: () => void;
  direction?: "left" | "right";
  className?: string;
  label?: string; //accessibility purpose
  controls?: string; //accessibility purpose
};

function ArrowButton({
  onClick,
  className,
  label,
  controls,
  direction = "right",
}: ArrowButtonProps) {
  const iconList = {
    left: IconChevronLeft,
    right: IconChevronRight,
  };
  const Icon = iconList[direction];
  return (
    <Button
      className={cn("group border-gray-500 hover:border-accent", className)}
      onClick={onClick}
      aria-label={label}
      aria-controls={controls}
      size="icon"
    >
      <Icon className="[&_path]:fill-gray-500 group-hover:[&_path]:fill-white" />
    </Button>
  );
}

type ArrowNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  controlsFor?: string;
  labelFor?: string;
};
function ArrowNav({ onPrev, onNext, controlsFor, labelFor }: ArrowNavProps) {
  return (
    <nav
      aria-label={controlsFor ? controlsFor + " controls" : "Controls"}
      className="flex gap-2"
    >
      {onPrev && (
        <ArrowButton
          direction="left"
          onClick={onPrev}
          label={labelFor ? `Previous ${labelFor}` : "Previous"}
          controls={controlsFor}
        />
      )}

      {onNext && (
        <ArrowButton
          onClick={onNext}
          label={labelFor ? `Next ${labelFor}` : "Next"}
          controls={controlsFor}
        />
      )}
    </nav>
  );
}

export { ArrowNav };
