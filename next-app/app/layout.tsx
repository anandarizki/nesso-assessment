import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/features/navigation";
import { fontDefaultClassName } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Software su misura per imprese & Sviluppatori on-demand",
  description:
    "Soluzioni digitali personalizzate e developer selezionati ottimizzano i processi e fanno crescere il team IT con un referente tecnico italiano.",
  openGraph: {
    title: "Nesso Digitale",
    description:
      "Soluzioni digitali personalizzate e developer selezionati ottimizzano i processi e fanno crescere il team IT con un referente tecnico italiano.",
    url: "https://nesso-next.rizki.id",
    images: [
      {
        url: "https://nesso-next.rizki.id/thumbnail.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://nesso-next.rizki.id/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${fontDefaultClassName} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
