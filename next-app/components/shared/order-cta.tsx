import { Button } from "../ui/button";
import { IconArrow } from "../ui/icons";

export function OrderCta() {
  return (
    <Button className="font-semibold group text-black border-accent">
      Prenota una Consulenza
      <IconArrow className="size-2.5 [&_path]:fill-accent group-hover:[&_path]:fill-white" />
    </Button>
  );
}
