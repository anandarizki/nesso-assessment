import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactCta({ className }: { className?: string }) {
  return (
    <Button as={Link} href="#" className={className}>
      Contatti
    </Button>
  );
}
