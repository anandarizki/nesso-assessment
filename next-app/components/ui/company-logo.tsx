import Image from "next/image";
import Link from "next/link";

function CompanyLogo() {
  return (
    <Link href="/">
      <Image
        alt="nesso digitale"
        src="/nesso-digitale.svg"
        width={192}
        height={45}
        priority
      />
    </Link>
  );
}

export { CompanyLogo };
