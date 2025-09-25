import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Waterfall Shuttle CR",
    template: "%s | Waterfall Shuttle CR"
  },
  description:
    "Transporte oficial a Catarata Nauyaca. Reserva tu shuttle confiable, cómodo y seguro desde Dominical, Uvita y Manuel Antonio.",
  openGraph: {
    title: "Waterfall Shuttle CR",
    description:
      "Transporte oficial a Catarata Nauyaca. Reserva tu shuttle confiable, cómodo y seguro desde Dominical, Uvita y Manuel Antonio.",
    locale: "es_CR",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-brand-light text-brand-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
