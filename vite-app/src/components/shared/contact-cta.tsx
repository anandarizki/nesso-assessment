import { Button } from "@/components/ui/button";

export function ContactCta({ className }: { className?: string }) {
  return (
    <Button as="a" href="#" className={className}>
      Contatti
    </Button>
  );
}
