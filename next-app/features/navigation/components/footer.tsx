import { CompanyLogo } from "@/components/ui/company-logo";
import { Container } from "@/components/ui/container";
import { NavLink } from "./nav-link";
import { Typography } from "@/components/ui/typography";
import { menuItems } from "@/utils/mock-data";

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography weight="bold" color="deep" size="md" className="mb-3">
      {children}
    </Typography>
  );
}

export function Footer() {
  return (
    <footer className="md:text-sm lg:text-base">
      <Container className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between gap-6  px-5 md:px-11">
        <div className="md:col-span-2 max-w-96">
          <CompanyLogo />
          <Typography size="md" className="mt-2 text-left">
            Costruiamo soluzioni digitali che semplificano il lavoro, un
            progetto alla volta.
          </Typography>
        </div>
        <div className="max-w-75">
          <GroupTitle>Menus</GroupTitle>
          <ul className="columns-2 size-fit space-y-2">
            {menuItems.map(({ href, label, ...itemProps }, index) => (
              <li key={href + index}>
                <NavLink
                  {...itemProps}
                  href={href}
                  className="[&_span]:hidden underline"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-75">
          <GroupTitle>Contatti</GroupTitle>
          <p className="mb-3">
            <a href="mailto:support@mail.com" className="underline">
              support@mail.com
            </a>
          </p>
          <p>Modulo LTD, Golden Plaza, 7 Nile Street, Cairo EG2R 6DA</p>
        </div>
      </Container>
    </footer>
  );
}
