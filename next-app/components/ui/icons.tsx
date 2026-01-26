import { cn } from "@/utils/cn";

type IconProps = { className?: string };
function IconArrow({ className }: IconProps) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("[&_path]:fill-accent", className)}
    >
      <path d="M1.16667 10.8333L0 9.66667L8 1.66667H0.833333V0H10.8333V10H9.16667V2.83333L1.16667 10.8333Z" />
    </svg>
  );
}

function IconChevronLeft({ className }: IconProps) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("[&_path]:fill-accent", className)}
    >
      <path
        d="M6.44824 0.146387C6.64351 -0.048756 6.96005 -0.0488354 7.15527 0.146387C7.35038 0.341619 7.35038 0.658186 7.15527 0.853418L1.00879 6.9999L7.15527 13.1464C7.35038 13.3416 7.35038 13.6582 7.15527 13.8534C6.96005 14.0486 6.64351 14.0486 6.44824 13.8534L0.297852 7.70303L0.298828 7.70205C0.206764 7.61274 0.132105 7.50733 0.0810547 7.38955C0.0278376 7.26664 0 7.13383 0 6.9999C0 6.86598 0.0278376 6.73317 0.0810547 6.61025C0.134255 6.48752 0.212023 6.37661 0.30957 6.28506L6.44824 0.146387Z"
        fill="#636363"
      />
    </svg>
  );
}

function IconChevronRight({ className }: IconProps) {
  return <IconChevronLeft className={cn("scale-x-[-1]", className)} />;
}

export { IconArrow, IconChevronLeft, IconChevronRight };
