import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Waterfall Shuttle CR",
    template: "%s | Waterfall Shuttle CR"
  },
  description:
    "Official transportation to Nauyaca Waterfall. Book a reliable, comfortable, and safe shuttle from Dominical, Uvita, and Manuel Antonio.",
  openGraph: {
    title: "Waterfall Shuttle CR",
    description:
      "Official transportation to Nauyaca Waterfall. Book a reliable, comfortable, and safe shuttle from Dominical, Uvita, and Manuel Antonio.",
    locale: "en_US",
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
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(config) {
                window._peekConfig = config || {};
                var idPrefix = 'peek-book-button';
                var id = idPrefix+'-js'; if (document.getElementById(id)) return;
                var head = document.getElementsByTagName('head')[0];
                var el = document.createElement('script'); el.id = id;
                var date = new Date; var stamp = date.getMonth()+"-"+date.getDate();
                var basePath = "https://js.peek.com";
                el.src = basePath + "/widget_button.js?ts="+stamp;
                head.appendChild(el); id = idPrefix+'-css'; el = document.createElement('link'); el.id = id;
                el.href = basePath + "/widget_button.css?ts="+stamp;
                el.rel="stylesheet"; el.type="text/css"; head.appendChild(el);
              })({key: '3b8d4aa7-9701-4638-afbf-5e1ac23c9dbd'});
            `
          }}
        />
      </head>
      <body className="bg-brand-light text-brand-black">
        <Header />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
