import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a-mkemp.com"),
  title: "Ann-Marie Kemp — Mobile Engineering Lead",
  description: "Ann-Marie Kemp — Mobile Engineering Lead specializing in React Native, mobile architecture, and accessibility.",
  openGraph: {
    title: "Ann-Marie Kemp — Mobile Engineering Lead",
    description: "Ann-Marie Kemp — Mobile Engineering Lead specializing in React Native, mobile architecture, and accessibility.",
    url: "https://a-mkemp.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
